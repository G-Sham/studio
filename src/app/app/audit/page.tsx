"use client";

import { useState, useMemo, useEffect } from 'react';
import { useBrand } from '@/context/brand-provider';
import allAuditData from '@/data/audit-data.json';
import { type AuditModule, type AuditData } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, BarChart } from 'lucide-react';

const typedAuditData: AuditData = allAuditData;

export default function AuditPage() {
  const { selectedBrand, isLoading: isBrandLoading } = useBrand();
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const auditModules = useMemo(() => {
    if (!selectedBrand) return [];
    return typedAuditData[selectedBrand.id] || [];
  }, [selectedBrand]);

  useEffect(() => {
    if (auditModules.length > 0) {
      setSelectedModuleId(auditModules[0].id);
    } else {
      setSelectedModuleId(null);
    }
  }, [auditModules]);

  const selectedModule = useMemo(() => {
    return auditModules.find(m => m.id === selectedModuleId) ?? null;
  }, [auditModules, selectedModuleId]);

  if (isBrandLoading) {
    return <AuditPageSkeleton />;
  }
  
  if (!selectedBrand || auditModules.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Audit Data Available</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Audit data for {selectedBrand?.name ?? 'the selected brand'} could not be found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-6 h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold px-4">Audit Modules</h2>
        {auditModules.map(module => (
          <Button
            key={module.id}
            variant={selectedModuleId === module.id ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setSelectedModuleId(module.id)}
          >
            {module.name}
          </Button>
        ))}
      </div>

      <div className="overflow-y-auto">
        {selectedModule ? (
          <ModuleDetails module={selectedModule} />
        ) : (
          <Card>
            <CardContent className="pt-6">
              <p>Select a module from the left to see details.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function ModuleDetails({ module }: { module: AuditModule }) {
  const getSeverityVariant = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{module.name}</CardTitle>
          <CardDescription>Overall performance for this module.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <div className="text-4xl font-bold text-primary">{module.score}</div>
          <div className="w-full">
            <Progress value={module.score} className="h-3" />
            <p className="text-sm text-muted-foreground mt-1">Module Score</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5"/> Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {module.insights.map((insight, i) => <li key={i}>{insight}</li>)}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><AlertCircle className="h-5 w-5 text-destructive"/> Issues / Flags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {module.issues.length > 0 ? module.issues.map(issue => (
            <div key={issue.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">{issue.title}</h4>
                <Badge variant={getSeverityVariant(issue.severity)}>{issue.severity}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
            </div>
          )) : <p className="text-muted-foreground">No issues found in this module. Great work!</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500"/> Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal list-inside space-y-3">
            {module.recommendations.map((rec, i) => <li key={i} className="pl-2">{rec}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function AuditPageSkeleton() {
  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-6 h-full">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-3/4 mb-2" />
        {[...Array(7)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
      </div>
      <div>
        <div className="space-y-6">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  )
}
