"use client";

import { ARCHITECTURE_NODES } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Database, BrainCircuit, Cpu, LayoutDashboard } from "lucide-react";

const getIcon = (index: number) => {
  switch (index) {
    case 0: return Database;
    case 1: return BrainCircuit;
    case 2: return Cpu;
    case 3: return LayoutDashboard;
    default: return Database;
  }
};

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Architecture</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Real-time visualization of the AI-SEO data processing pipeline.
        </p>
      </div>

      {/* VISUAL FIX 1: Increased padding (p-12) and Grid Gap (lg:gap-12) 
        This stops the "squished" look by giving the arrows room to breathe.
      */}
      <div className="relative rounded-xl border border-dashed bg-muted/40 p-8 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-12">
          
          {ARCHITECTURE_NODES.map((node, index) => {
            const Icon = getIcon(index);
            const isLast = index === ARCHITECTURE_NODES.length - 1;

            return (
              <div key={node.id} className="relative flex flex-col items-center group">
                
                {/* Node Card */}
                <Card className="z-10 h-full w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary/50">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Step 0{index + 1}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="mb-2 text-lg font-bold">{node.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {node.description}
                    </p>
                  </CardContent>
                </Card>

                {/* VISUAL FIX 2: Better Arrow Positioning 
                   -right-9 places it perfectly in the middle of the gap-12 spacing.
                   Added a subtle animation pulse to make it look alive.
                */}
                {!isLast && (
                  <div className="hidden lg:absolute lg:-right-9 lg:top-1/2 lg:block lg:-translate-y-1/2 text-muted-foreground/30 transition-colors group-hover:text-primary">
                    <ArrowRight className="h-6 w-6 animate-pulse" />
                  </div>
                )}
                
                {/* Mobile Arrow */}
                {!isLast && (
                  <div className="my-6 lg:hidden text-muted-foreground/30">
                    <ArrowRight className="h-6 w-6 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>
      
      {/* System Status - Kept the dark terminal look */}
      <div className="rounded-lg border bg-slate-950 p-6 text-slate-300 shadow-inner">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Pipeline Metrics</h3>
        <div className="flex flex-wrap gap-8 font-mono text-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/>
            <span className="text-slate-500">Latency:</span>
            <span className="text-green-400 font-bold">42ms</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"/>
            <span className="text-slate-500">Agents:</span>
            <span className="text-blue-400 font-bold">7/7 Active</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"/>
            <span className="text-slate-500">Sources:</span>
            <span className="text-purple-400 font-bold">Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}