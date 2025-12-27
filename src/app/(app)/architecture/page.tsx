import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import architectureData from '@/data/architecture-data.json';
import { type ArchitectureComponent } from '@/lib/types';
import { Cpu, Database, FileText, Layers } from 'lucide-react';

const icons: { [key: string]: React.ElementType } = {
  input: Database,
  context: Layers,
  modules: Cpu,
  output: FileText
};

export default function ArchitecturePage() {
  const components: ArchitectureComponent[] = architectureData;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">System Architecture</h1>
      <p className="text-muted-foreground">
        A high-level overview of the Kasparro data pipeline, demonstrating how we turn raw data into actionable brand intelligence.
      </p>

      <div className="relative mt-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16">
          {components.map((component, index) => {
            const Icon = icons[component.id] || Cpu;
            return (
              <div key={component.id} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full lg:w-auto">
                <Card className="flex-1 w-full lg:max-w-xs hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{component.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{component.description}</p>
                  </CardContent>
                </Card>

                {index < components.length - 1 && (
                  <>
                    <ArrowRight className="h-8 w-8 text-muted-foreground hidden lg:block" />
                    <div className="lg:hidden w-0.5 h-8 bg-border" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
