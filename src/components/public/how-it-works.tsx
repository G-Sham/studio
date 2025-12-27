import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cpu, FileText, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Database,
        title: "1. Data Ingestion",
        description: "Connect your site, GSC, and public data sources. We build a comprehensive model of your brand's digital footprint.",
    },
    {
        icon: Cpu,
        title: "2. AI Analysis",
        description: "Our proprietary AI modules audit your brand's visibility, E-E-A-T signals, and narrative across the AI search landscape.",
    },
    {
        icon: FileText,
        title: "3. Strategic Outputs",
        description: "Receive actionable dashboards and reports that pinpoint opportunities and guide your content strategy.",
    }
]

export function HowItWorks() {
  const howImage = PlaceHolderImages.find(p => p.id === 'how-it-works');

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From raw data to strategic insights in three simple steps.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 items-start relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
                 <Card className="w-full">
                    <CardContent className="pt-6">
                        <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                            <step.icon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </CardContent>
                </Card>
                {index < steps.length - 1 && (
                    <ArrowRight className="absolute top-1/2 -right-10 hidden md:block h-8 w-8 text-muted-foreground transform -translate-y-1/2" />
                )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Button asChild size="lg">
                <Link href="/platform">Explore the Full Platform</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
