import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Connect Your Data",
    description: "Securely link your website, Google Analytics, and Search Console to provide Kasparro with foundational data."
  },
  {
    title: "AI Audit Begins",
    description: "Our platform analyzes your digital presence through seven specialized AI modules, from SERP visibility to brand narrative."
  },
  {
    title: "Receive Actionable Insights",
    description: "Get a prioritized list of recommendations and a clear dashboard to track your AI-SEO performance over time."
  }
];

export function HowItWorks() {
  const howItWorksImage = PlaceHolderImages.find(img => img.id === 'how-it-works');

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="max-w-2xl">
               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How It Works</h2>
               <p className="mt-4 text-lg text-muted-foreground">
                Get started with Kasparro in three simple steps and begin your journey to AI search dominance.
              </p>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-start gap-4">
                     <div className="bg-primary/10 p-2 rounded-full">
                       <CheckCircle className="h-5 w-5 text-primary"/>
                     </div>
                     <div>
                        <h3 className="font-semibold text-lg">{index + 1}. {step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                     </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Button asChild>
              <Link href="/app/dashboard">Start Your First Audit</Link>
            </Button>
          </div>
           {howItWorksImage && (
            <div className="flex items-center justify-center">
              <Image
                src={howItWorksImage.imageUrl}
                alt={howItWorksImage.description}
                width={500}
                height={500}
                className="rounded-xl shadow-xl ring-1 ring-border"
                data-ai-hint={howItWorksImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
