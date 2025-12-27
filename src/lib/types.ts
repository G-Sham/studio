export type Brand = {
  id: string;
  name: string;
};

export type DashboardData = {
  aiVisibility: number;
  trustScore: number;
  keywordCoverage: number;
  lastAudit: string;
};

export type AuditIssue = {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
};

export type AuditModule = {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: AuditIssue[];
  recommendations: string[];
};

export type AuditData = {
  [brandId: string]: AuditModule[];
};

export type ArchitectureComponent = {
  id: string;
  name: string;
  description: string;
  connections: string[];
};
