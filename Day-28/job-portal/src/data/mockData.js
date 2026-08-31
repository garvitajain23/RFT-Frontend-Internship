export const jobs = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Notion",
    companyId: 1,
    logo: "https://logo.clearbit.com/notion.so",
    location: "Remote",
    type: "Full-time",
    salary: "₹18–28 LPA",
    tags: ["React", "TypeScript", "CSS"],
    posted: "2 days ago",
    applicants: 142,
    description: "Build the next generation of collaborative tools used by millions. You'll own core UI surfaces, work closely with design, and ship fast.",
    responsibilities: [
      "Build and maintain React components across the product",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Write clean, testable TypeScript code",
      "Participate in code reviews and architectural decisions"
    ],
    requirements: [
      "3+ years of React experience",
      "Strong TypeScript skills",
      "Eye for design and attention to detail",
      "Experience with performance optimization"
    ],
    perks: ["Equity", "Remote-first", "Learning budget", "Health insurance"],
    saved: false
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Linear",
    companyId: 2,
    logo: "https://logo.clearbit.com/linear.app",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "₹22–35 LPA",
    tags: ["Figma", "Design Systems", "Prototyping"],
    posted: "1 day ago",
    applicants: 89,
    description: "Shape how software teams track and ship their work. Linear is obsessed with quality — you'll help maintain that bar.",
    responsibilities: [
      "Own design for 1–2 product areas end to end",
      "Run user research and synthesize findings",
      "Create and maintain design system components",
      "Partner with engineers during implementation"
    ],
    requirements: [
      "4+ years in product design",
      "Strong Figma proficiency",
      "Systems thinking mindset",
      "Portfolio with shipped work"
    ],
    perks: ["Equity", "Flexible hours", "Top-tier equipment", "Annual retreat"],
    saved: false
  },
  {
    id: 3,
    title: "Backend Engineer – Infra",
    company: "Vercel",
    companyId: 3,
    logo: "https://logo.clearbit.com/vercel.com",
    location: "Remote",
    type: "Full-time",
    salary: "₹25–40 LPA",
    tags: ["Node.js", "Rust", "Kubernetes"],
    posted: "4 days ago",
    applicants: 203,
    description: "Make the global deployment network faster and more reliable. You'll work on systems that serve millions of deploys every day.",
    responsibilities: [
      "Design and implement distributed systems at scale",
      "Improve observability and reliability of infrastructure",
      "Work across the stack from edge to origin",
      "Drive technical RFC processes"
    ],
    requirements: [
      "5+ years backend experience",
      "Experience with distributed systems",
      "Proficiency in Node.js or Go",
      "Understanding of container orchestration"
    ],
    perks: ["Equity", "Remote-first", "Competitive salary", "Conferences"],
    saved: false
  },
  {
    id: 4,
    title: "iOS Developer",
    company: "Figma",
    companyId: 4,
    logo: "https://logo.clearbit.com/figma.com",
    location: "New York, NY",
    type: "Contract",
    salary: "₹15–22 LPA",
    tags: ["Swift", "SwiftUI", "UIKit"],
    posted: "1 week ago",
    applicants: 67,
    description: "Bring the Figma experience to native iOS. You'll build the mobile app used by design teams worldwide.",
    responsibilities: [
      "Build new iOS features using SwiftUI and UIKit",
      "Optimize app performance and memory usage",
      "Collaborate with the web team on shared architecture",
      "Maintain high code quality and test coverage"
    ],
    requirements: [
      "3+ years iOS development",
      "Swift expertise",
      "Understanding of Figma's product",
      "Experience with real-time sync or collaboration features"
    ],
    perks: ["Equity", "Health", "Design tools", "Growth budget"],
    saved: false
  },
  {
    id: 5,
    title: "Data Engineer",
    company: "Stripe",
    companyId: 5,
    logo: "https://logo.clearbit.com/stripe.com",
    location: "Bangalore, IN",
    type: "Full-time",
    salary: "₹20–32 LPA",
    tags: ["Python", "Spark", "dbt", "SQL"],
    posted: "3 days ago",
    applicants: 178,
    description: "Build the data pipelines that power financial insights for millions of businesses. Your work directly informs product and risk decisions.",
    responsibilities: [
      "Design and build scalable ETL pipelines",
      "Maintain data quality and observability",
      "Enable self-serve analytics across the company",
      "Work closely with data science and product teams"
    ],
    requirements: [
      "4+ years data engineering experience",
      "Proficiency in Python and SQL",
      "Experience with Spark or Flink",
      "Strong data modeling skills"
    ],
    perks: ["Equity", "Relocation", "Health", "Catered meals"],
    saved: false
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Supabase",
    companyId: 6,
    logo: "https://logo.clearbit.com/supabase.com",
    location: "Remote",
    type: "Full-time",
    salary: "₹16–26 LPA",
    tags: ["AWS", "Docker", "Terraform", "CI/CD"],
    posted: "5 days ago",
    applicants: 95,
    description: "Keep one of the fastest-growing developer platforms running smoothly. You'll shape the infra that thousands of startups depend on.",
    responsibilities: [
      "Manage cloud infrastructure across AWS and GCP",
      "Build and improve CI/CD pipelines",
      "Monitor and respond to production incidents",
      "Improve developer experience for internal teams"
    ],
    requirements: [
      "3+ years in DevOps or SRE roles",
      "Terraform and IaC experience",
      "Kubernetes proficiency",
      "Strong scripting skills"
    ],
    perks: ["Fully remote", "Equity", "Async culture", "Annual team meet"],
    saved: false
  }
];

export const companies = [
  {
    id: 1,
    name: "Notion",
    logo: "https://logo.clearbit.com/notion.so",
    tagline: "Tools for thought, built for teams.",
    industry: "Productivity",
    size: "501–1000 employees",
    location: "San Francisco, CA",
    founded: 2016,
    website: "notion.so",
    openRoles: 8,
    description: "Notion builds an all-in-one workspace where teams write, plan, and collaborate. Known for its product quality and design culture, it's one of the most thoughtfully built tools in tech.",
    perks: ["Remote-first", "Equity", "Top equipment", "Learning stipend"],
    techStack: ["React", "TypeScript", "Postgres", "Electron"]
  },
  {
    id: 2,
    name: "Linear",
    logo: "https://logo.clearbit.com/linear.app",
    tagline: "Issue tracking built for speed.",
    industry: "Developer Tools",
    size: "51–200 employees",
    location: "San Francisco, CA",
    founded: 2019,
    website: "linear.app",
    openRoles: 4,
    description: "Linear is the issue tracking tool built for high-performance teams. It's minimalist, fast, and opinionated — built by people who care deeply about software quality.",
    perks: ["Equity", "Flexible hours", "Async-first", "Annual retreat"],
    techStack: ["React", "TypeScript", "GraphQL", "Postgres"]
  },
  {
    id: 3,
    name: "Vercel",
    logo: "https://logo.clearbit.com/vercel.com",
    tagline: "Frontend infrastructure for the web.",
    industry: "Cloud / Infrastructure",
    size: "201–500 employees",
    location: "Remote",
    founded: 2015,
    website: "vercel.com",
    openRoles: 12,
    description: "Vercel provides frontend developers with the tools and cloud infrastructure to ship faster. Home to Next.js, they're shaping the future of web development.",
    perks: ["Remote-first", "Equity", "Competitive salary", "Conferences"],
    techStack: ["Next.js", "Rust", "Node.js", "Kubernetes"]
  }
];

export const user = {
  name: "Aman Sharma",
  role: "Frontend Developer",
  location: "Mohali, Punjab",
  avatar: null,
  appliedJobs: [1, 3],
  savedJobs: [2, 5],
  skills: ["React", "TypeScript", "Tailwind", "Node.js"],
  resumeUploaded: true
};