"use client";

import { useAppStore } from "@/lib/store";
import { AUDIT_DATA } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, BarChart, Activity, ChevronRight, ShieldCheck } from 'lucide-react';

export default function AuditPage() {
  // 1. Use our Zustand store instead of the missing Context
  const { selectedBrandId, selectedModuleId, setSelectedModule } = useAppStore();
  
  // 2. Get data from our existing data.ts file
  const auditModules = AUDIT_DATA[selectedBrandId] || [];
  const selectedModule = auditModules.find(m => m.id === selectedModuleId);

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-6 h-[calc(100vh-8rem)]">
      
      {/* LEFT COLUMN: Module List */}
      <div className="flex flex-col gap-2 overflow-y-auto pr-2">
        <h2 className="text-lg font-semibold px-2 mb-2">Audit Modules</h2>
        {auditModules.map(module => (
          <Button
            key={module.id}
            variant={selectedModuleId === module.id ? 'secondary' : 'ghost'}
            className="justify-between h-auto py-3 px-4"
            onClick={() => setSelectedModule(module.id)}
          >
            <span className="truncate">{module.name}</span>
            {selectedModuleId === module.id && <ChevronRight className="h-4 w-4 opacity-50" />}
          </Button>
        ))}
      </div>

      {/* RIGHT COLUMN: Detailed View */}
      <div className="overflow-y-auto pr-2">
        {selectedModule ? (
          <div className="space-y-6">
            
            {/* Header Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{selectedModule.name}</CardTitle>
                    <CardDescription>AI Analysis Status: Complete</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-blue-600">{selectedModule.score}</div>
                    <span className="text-xs text-muted-foreground uppercase font-bold">Score</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Custom Progress Bar using Tailwind */}
                <div className="h-3 w-full rounded-full bg-slate-100">
                  <div 
                    className="h-full rounded-full bg-blue-600 transition-all duration-500" 
                    style={{ width: `${selectedModule.score}%` }} 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Insights Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-blue-500"/> Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {selectedModule.insights.map((insight, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Issues Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500"/> Issues Detected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedModule.issues.length > 0 ? selectedModule.issues.map(issue => (
                  <div key={issue.id} className="p-4 border rounded-lg bg-slate-50/50">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-slate-900">{issue.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase ${
                        issue.severity === 'high' ? 'bg-red-100 text-red-700' :
                        issue.severity === 'medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {issue.severity}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{issue.description}</p>
                  </div>
                )) : (
                  <p className="text-slate-500 italic">No critical issues found.</p>
                )}
              </CardContent>
            </Card>

            {/* Recommendations Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600"/> Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {selectedModule.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-center justify-between p-3 rounded-lg border bg-white">
                      <span className="text-sm font-medium text-slate-700">{rec}</span>
                      <Button size="sm" variant="outline" className="h-8 text-xs">Auto-Fix</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            Select a module to view details
          </div>
        )}
      </div>
    </div>
  );
}