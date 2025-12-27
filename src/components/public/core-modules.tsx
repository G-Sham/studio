import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, Target, BrainCircuit, BookOpen, LineChart, VenetianMask } from "lucide-react";

const modules = [
  {
    icon: LineChart,
    title: "SERP Analysis & Visibility",
    description: "Monitors your brand's presence in AI-generated answers and traditional search results for your target keywords."
  },
  {
    icon: Check,
    title: "Content Quality & Originality",
    description: "Audits your content for originality, depth, and clarity, ensuring it's seen as a primary source by AI."
  },
  {
    icon: ShieldCheck,
    title: "E-E-A-T & Trust Signals",
    description: "Evaluates your site's Experience, Expertise, Authoritativeness, and Trustworthiness signals from an AI's perspective."
  },
  {
    icon: BrainCircuit,
    title: "Knowledge Graph Alignment",
    description: "Analyzes your brand's representation in major knowledge graphs like Google's and identifies optimization opportunities."
  },
  {
    icon: Target,
    title: "Semantic SEO & User Intent",
    description: "Ensures your content is semantically aligned with the topics you want to own and matches user search intent."
  },
  {
    icon: BookOpen,
    title: "Brand Narrative & Perception",
    description: "Tracks how AI models perceive your brand narrative and compares it against your desired positioning."
  },
   {
    icon: VenetianMask,
    title: "Competitive Intelligence",
    description: "Provides insights into your competitors' AI search strategies and visibility."
  }
];

export function CoreModules() {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">The Kasparro Audit Framework</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform runs a comprehensive, multi-layered audit to give you a complete picture of your AI search readiness. We analyze seven core modules.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.title}>
                <CardHeader>
                  <Icon className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{module.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
