import { useCallback, useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export interface LightboxImage {
  /** Preview asset shown inline in the gallery (already in the browser cache). */
  src: string;
  /** Full-resolution original, swapped in once it finishes loading. */
  fullSrc?: string;
  alt: string;
  caption: string;
}

interface Size {
  w: number;
  h: number;
}

interface View {
  scale: number;
  x: number;
  y: number;
}

const FIT: View = { scale: 1, x: 0, y: 0 };
const TAP_ZOOM_SCALE = 2.5;
const clampNum = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function ImageLightbox({
  image,
  onClose,
}: {
  image: LightboxImage;
  onClose: () => void;
}) {
  const [view, setView] = useState<View>(FIT);
  const [dragging, setDragging] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(image.src);
  const [natural, setNatural] = useState<Size | null>(null);
  const [stageSize, setStageSize] = useState<Size | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  // Active pointers, for one-finger pan and two-finger pinch.
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  // Set once a gesture moves far enough that pointer-up should not count as a tap.
  const movedRef = useRef(false);

  // The image renders at its fitted (object-contain) size; zoom/pan is a
  // transform on top of that. Derive the fitted size so panning can be
  // clamped and zoom capped relative to the image's native resolution.
  const base: Size | null =
    natural && stageSize
      ? (() => {
          const fit = Math.min(1, stageSize.w / natural.w, stageSize.h / natural.h);
          return { w: natural.w * fit, h: natural.h * fit };
        })()
      : null;

  // Zoom no further than the image's native pixels (min 3x so small images
  // still magnify, capped at 8x).
  const maxScale = base ? clampNum(natural!.w / base.w, 3, 8) : 3;

  // Refs so pointer/wheel handlers always see current geometry.
  const geo = useRef({ base, stageSize, maxScale, scale: view.scale });
  geo.current = { base, stageSize, maxScale, scale: view.scale };

  const clampView = useCallback((v: View): View => {
    const { base: b, stageSize: s } = geo.current;
    if (!b || !s) return v;
    const maxX = Math.max(0, (b.w * v.scale - s.w) / 2);
    const maxY = Math.max(0, (b.h * v.scale - s.h) / 2);
    return { scale: v.scale, x: clampNum(v.x, -maxX, maxX), y: clampNum(v.y, -maxY, maxY) };
  }, []);

  /**
   * Zoom to `targetScale`, keeping the image point under `origin` (stage
   * coordinates relative to the stage center) fixed on screen.
   */
  const zoomTo = useCallback(
    (targetScale: number, origin?: { x: number; y: number }) => {
      setView((v) => {
        const scale = clampNum(targetScale, 1, geo.current.maxScale);
        if (scale === v.scale) return v;
        const p = origin ?? { x: 0, y: 0 };
        const ratio = scale / v.scale;
        return clampView({
          scale,
          x: p.x - (p.x - v.x) * ratio,
          y: p.y - (p.y - v.y) * ratio,
        });
      });
    },
    [clampView],
  );

  const toStagePoint = (clientX: number, clientY: number) => {
    const rect = stageRef.current!.getBoundingClientRect();
    return {
      x: clientX - rect.left - rect.width / 2,
      y: clientY - rect.top - rect.height / 2,
    };
  };

  // Swap in the full-resolution original once it has loaded.
  useEffect(() => {
    const full = image.fullSrc;
    if (!full || full === image.src) return;
    let cancelled = false;
    const loader = new Image();
    loader.onload = () => {
      if (!cancelled) setDisplaySrc(full);
    };
    loader.src = full;
    return () => {
      cancelled = true;
    };
  }, [image]);

  // Focus management, scroll lock, and keyboard controls.
  useEffect(() => {
    closeBtnRef.current?.focus();
    const PAN_STEP = 80;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      const pan = (dx: number, dy: number) => {
        if (geo.current.scale <= 1) return;
        e.preventDefault();
        setView((v) => clampView({ ...v, x: v.x + dx, y: v.y + dy }));
      };
      if (e.key === "+" || e.key === "=") zoomTo(geo.current.scale * 1.5);
      else if (e.key === "-" || e.key === "_") zoomTo(geo.current.scale / 1.5);
      else if (e.key === "0") setView(FIT);
      else if (e.key === "ArrowLeft") pan(PAN_STEP, 0);
      else if (e.key === "ArrowRight") pan(-PAN_STEP, 0);
      else if (e.key === "ArrowUp") pan(0, PAN_STEP);
      else if (e.key === "ArrowDown") pan(0, -PAN_STEP);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, zoomTo, clampView]);

  // Wheel-to-zoom toward the cursor; non-passive to allow preventDefault.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = Math.exp(-e.deltaY * 0.0022);
      zoomTo(geo.current.scale * factor, toStagePoint(e.clientX, e.clientY));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomTo]);

  // Track the stage size so fit/clamp math follows window resizes.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setStageSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(() => {
      measure();
      setView((v) => clampView(v));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [clampView]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 1) movedRef.current = false;
    else movedRef.current = true; // multi-touch is never a tap
    // Disable the transform transition while a pan or pinch is active.
    if (pointers.current.size === 2 || geo.current.scale > 1) setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const curr = { x: e.clientX, y: e.clientY };

    if (pointers.current.size === 2) {
      // Pinch: zoom by the change in finger distance, anchored at the midpoint.
      const other = [...pointers.current.entries()].find(([id]) => id !== e.pointerId)?.[1];
      if (other) {
        const distPrev = Math.hypot(prev.x - other.x, prev.y - other.y);
        const distCurr = Math.hypot(curr.x - other.x, curr.y - other.y);
        if (distPrev > 0) {
          const midPrev = toStagePoint((prev.x + other.x) / 2, (prev.y + other.y) / 2);
          const midCurr = toStagePoint((curr.x + other.x) / 2, (curr.y + other.y) / 2);
          setView((v) => {
            const scale = clampNum(v.scale * (distCurr / distPrev), 1, geo.current.maxScale);
            const ratio = scale / v.scale;
            return clampView({
              scale,
              x: midCurr.x - (midPrev.x - v.x) * ratio,
              y: midCurr.y - (midPrev.y - v.y) * ratio,
            });
          });
        }
      }
    } else if (pointers.current.size === 1 && geo.current.scale > 1) {
      // One-finger / mouse pan.
      setView((v) => clampView({ ...v, x: v.x + curr.x - prev.x, y: v.y + curr.y - prev.y }));
    }

    if (Math.hypot(curr.x - prev.x, curr.y - prev.y) > 3) movedRef.current = true;
    pointers.current.set(e.pointerId, curr);
  };

  const onPointerEnd = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size === 0) setDragging(false);
  };

  // Tap/click toggles zoom at that point; ignored after a drag or pinch.
  const onImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (movedRef.current) return;
    if (geo.current.scale > 1) setView(FIT);
    else zoomTo(TAP_ZOOM_SCALE, toStagePoint(e.clientX, e.clientY));
  };

  const zoomPct = Math.round(view.scale * 100);
  const loadingFull = Boolean(image.fullSrc && image.fullSrc !== image.src && displaySrc !== image.fullSrc);

  const toolbarBtn =
    "flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:cursor-default";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged view: ${image.alt}`}
      onClick={onClose}
    >
      <div
        className="flex items-center justify-end gap-2 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {loadingFull && (
          <span className="text-xs text-white/50 mr-auto" role="status">
            Loading full resolution&hellip;
          </span>
        )}
        <button
          type="button"
          className="h-10 px-3 rounded-sm bg-white/10 text-white text-[0.8125rem] tabular-nums hover:bg-white/20 cursor-pointer transition-colors duration-150 disabled:opacity-40 disabled:cursor-default"
          onClick={() => setView(FIT)}
          disabled={view.scale === 1}
          aria-label="Reset zoom to fit"
          title="Reset zoom"
        >
          {zoomPct}%
        </button>
        <button
          type="button"
          className={toolbarBtn}
          onClick={() => zoomTo(view.scale / 1.5)}
          disabled={view.scale <= 1}
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
        <button
          type="button"
          className={toolbarBtn}
          onClick={() => zoomTo(view.scale * 1.5)}
          disabled={view.scale >= maxScale}
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <button
          ref={closeBtnRef}
          type="button"
          className={toolbarBtn}
          onClick={onClose}
          aria-label="Close enlarged view"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 min-h-0 px-4 overflow-hidden">
        <div
          ref={stageRef}
          className="relative h-full w-full flex items-center justify-center"
        >
          <img
            src={displaySrc}
            alt={image.alt}
            onLoad={(e) =>
              setNatural({
                w: e.currentTarget.naturalWidth,
                h: e.currentTarget.naturalHeight,
              })
            }
            onClick={onImageClick}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
            draggable={false}
            style={{
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
              transition: dragging ? "none" : "transform 0.18s ease-out",
              cursor: view.scale > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
              touchAction: "none",
              willChange: "transform",
            }}
            className="max-w-full max-h-full object-contain select-none"
          />
        </div>
      </div>

      <p
        className="text-center text-sm text-white/70 italic px-4 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        {image.caption}
      </p>
    </div>
  );
}
