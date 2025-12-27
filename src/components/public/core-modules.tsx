"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const modules = [
  { 
    id: "serp-analysis",
    name: "SERP Analysis",
    description: "Deconstructs AI-generated search results to pinpoint how your brand is being represented and where you can improve.",
    features: ["AI Summary Visibility", "Source & Citation Tracking", "Competitor Comparison"]
  },
  { 
    id: "content-quality",
    name: "Content Quality",
    description: "Audits your content for originality, depth, and clarity, ensuring it's a prime source for AI models.",
    features: ["Originality Scoring", "Fact-Checking Assistance", "Semantic Richness Analysis"]
  },
  { 
    id: "eeat",
    name: "E-E-A-T Signals",
    description: "Evaluates your site's Experience, Expertise, Authoritativeness, and Trust signals—critical for high-stakes topics.",
    features: ["Author Credibility Audit", "Trust Signal Identification", "Knowledge Graph Alignment"]
  },
  {
    id: "brand-narrative",
    name: "Brand Narrative",
    description: "Analyzes how AI perceives and communicates your brand story, ensuring it's consistent and compelling.",
    features: ["Narrative Consistency Check", "Sentiment Analysis in AI Answers", "Key Message Penetration"]
  }
];

export function CoreModules() {
  return (
    <section className="bg-muted py-20 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">The Kasparro Audit Modules</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our seven proprietary modules work in concert to give you an unparalleled view of your brand's standing in the AI search ecosystem.
          </p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="serp-analysis" className="w-full">
            {modules.map(module => (
              <AccordionItem value={module.id} key={module.id}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">{module.name}</AccordionTrigger>
                <AccordionContent>
                    <p className="mb-4 text-muted-foreground">{module.description}</p>
                    <ul className="space-y-2">
                        {module.features.map(feature => (
                            <li key={feature} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500"/>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
