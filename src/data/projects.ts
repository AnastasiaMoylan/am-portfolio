export interface Project {
  slug: string;
  title: string;
  problem: string;
  role: string;
  status: string;
  tags: string[];
  outcome: string;
  featuredOrder: number;
  filterCategories: string[];
}

export const projects: Project[] = [
  {
    slug: "governed-ai-finance-workspace",
    title: "Designing a Governed AI Workspace for Enterprise Finance",
    problem:
      "Enterprise finance teams needed AI-assisted analysis without losing audit trails, governance controls, or human accountability for high-consequence actions.",
    role: "Lead UX / Product Designer",
    status: "Proof of concept (ongoing)",
    tags: ["AI Interaction Design", "Complex Workflows", "Governance"],
    outcome:
      "Working POC connecting Workflow Builder, Sandbox, promotion gates, Production, and monitoring for accountants, analysts, and finance leaders.",
    featuredOrder: 1,
    filterCategories: ["AI and Trust", "Complex Workflows", "Data and Finance"],
  },
  {
    slug: "auditable-billing-workflow",
    title: "Replacing Manual Billing-Package Assembly With an Auditable Workflow",
    problem:
      "AT&T's billing-package process was fragmented across tools, with no shared status model, no progress preservation, and no audit trail for approvals.",
    role: "Design Lead and UX / Product Strategy Lead",
    status: "MVP delivered",
    tags: ["End-to-end Flow", "B2B SaaS", "Workflow Automation"],
    outcome:
      "Completed first MVP for interface and project querying with a phased roadmap for document integration, in-product editing, and automation.",
    featuredOrder: 2,
    filterCategories: ["Complex Workflows", "B2B SaaS"],
  },
  {
    slug: "enterprise-document-knowledge",
    title: "Making Enterprise AI Answers Verifiable Across Complex Documents",
    problem:
      "Enterprise knowledge workers needed to trust AI-generated answers — which required citations as real navigation, explicit source context, and side-by-side comparison.",
    role: "UX and Product Strategy Lead",
    status: "Multi-phase platform (ongoing)",
    tags: ["Document Intelligence", "AI Trust", "Research"],
    outcome:
      "Designed sourced chat, inline citations, embedded PDF viewer, and comparison views that kept generated answers verifiable and document context explicit.",
    featuredOrder: 3,
    filterCategories: ["AI and Trust", "B2B SaaS", "Research"],
  },
  {
    slug: "connected-customer-journey",
    title: "Reducing Churn With a Connected Customer Journey Platform",
    problem:
      "Globe needed to convert predictive churn signals into human-reviewed mitigation actions — without presenting opaque scores or removing human control over outbound messaging.",
    role: "Senior UX Designer",
    status: "Completed April 2025",
    tags: ["Predictive Analytics", "Customer Experience", "AI Decision Support"],
    outcome:
      "End-to-end mitigation flow from risk detection through human-reviewed action, message adjustment, launch, monitoring, and iteration.",
    featuredOrder: 4,
    filterCategories: ["AI and Trust", "Customer Experience", "Data and Finance"],
  },
];

export const filterCategories = [
  "All",
  "AI and Trust",
  "Complex Workflows",
  "B2B SaaS",
  "Design Systems",
  "Research",
  "Data and Finance",
  "Customer Experience",
];
