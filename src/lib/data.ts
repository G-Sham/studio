import { Brand, DashboardData, AuditData, ArchitectureComponent } from './types';

export const BRANDS: Brand[] = [
  { id: 'brand-1', name: 'Acme Corp' },
  { id: 'brand-2', name: 'Stark Industries' },
  { id: 'brand-3', name: 'Wayne Enterprises' },
];

export const DASHBOARD_STATS: DashboardData = {
  aiVisibility: 85,
  trustScore: 92,
  keywordCoverage: 78,
  lastAudit: '2025-07-22T10:30:00Z',
};

export const AUDIT_DATA: AuditData = {
  'brand-1': [
    {
      id: 'serp-analysis',
      name: 'SERP Analysis',
      score: 75,
      insights: ["Ranked in top 3 for 'cartoon physics' in AI summaries.", "Not appearing for 'rocket powered skates' queries."],
      issues: [{ id: "i1", title: "Low visibility in Perplexity", description: "Your brand is not cited in Perplexity answers for 5 of your 10 target keywords.", severity: "high" }],
      recommendations: ["Create a detailed guide on 'The Physics of Roadrunners'.", "Improve semantic linking between product pages and informational content."]
    },
    {
      id: 'content-quality',
      name: 'Content Quality',
      score: 82,
      insights: ["'Anvil Usage Guide' is considered highly original content.", "Product descriptions are too short for AI to generate rich snippets."],
      issues: [{ id: "i2", title: "Thin content on 15 product pages", description: "Product pages have less than 150 words, which is insufficient for AI models.", severity: "medium" }],
      recommendations: ["Expand product descriptions to include use cases, specifications, and customer stories."]
    },
    { id: "eeat-signals", name: "E-E-A-T Signals", score: 68, insights: [], issues: [], recommendations: ["Add author bios to technical blog posts."] },
  ],
  'brand-2': [ // Stark Industries
    {
      id: 'serp-analysis',
      name: 'SERP Analysis',
      score: 95,
      insights: ["Dominating AI search for 'powered armor' and 'arc reactor technology'."],
      issues: [],
      recommendations: ["Maintain current content velocity and internal linking strategy."]
    },
    {
      id: 'content-quality',
      name: 'Content Quality',
      score: 91,
      insights: ["Whitepapers on clean energy are frequently cited by AI models."],
      issues: [],
      recommendations: ["Explore creating video content to complement existing whitepapers."]
    },
  ],
  'brand-3': [ // Wayne Enterprises
    {
      id: 'serp-analysis',
      name: 'SERP Analysis',
      score: 88,
      insights: ["High visibility for 'grappling hook' and 'utility belt' queries.", "Low visibility for philanthropic activities."],
      issues: [{ id: "i3", title: "Brand narrative disconnect", description: "AI models associate 'Wayne' primarily with technology, not philanthropy.", severity: "high" }],
      recommendations: ["Create a dedicated microsite for the Wayne Foundation's activities."]
    },
    {
      id: 'content-quality',
      name: 'Content Quality',
      score: 85,
      insights: ["Content is well-structured but lacks personal author bios."],
      issues: [{ id: "i4", title: "Lack of author attribution", description: "Blog posts and articles lack clear author information, impacting E-E-A-T signals.", severity: "medium" }],
      recommendations: ["Implement author schema and create detailed author bio pages."]
    },
  ]
};

export const ARCHITECTURE_NODES: ArchitectureComponent[] = [
  { id: 'node-1', name: 'Input Assembler', description: 'Ingests raw website data.', connections: ['node-2'] },
  { id: 'node-2', name: 'Context Pack', description: 'Enriches raw data with SERP context.', connections: ['node-3'] },
  { id: 'node-3', name: 'Audit Modules', description: 'Runs parallel AI analysis.', connections: ['node-4'] },
  { id: 'node-4', name: 'Output Surfaces', description: 'Generates dashboard metrics.', connections: [] },
];