import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Database, Cpu, FileText, BarChart } from "lucide-react";

const dataSources = ["Your Website Content", "Google Search Console", "Public Web Mentions", "Competitor Data", "Knowledge Panels"];
const outputs = ["AI Visibility Score", "E-E-A-T Audit", "Content Gap Analysis", "Actionable Recommendations", "Brand Narrative Report"];

export default function PlatformPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">The Kasparro Platform</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Bridging the gap between raw data and AI-search dominance. Our platform is an end-to-end system for brand intelligence in the new search era.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 font-headline">Audit Pipeline Flow</h2>
        <div className="flex flex-col items-center gap-8">
          {/* Input */}
          <Card className="w-full max-w-2xl text-center">
            <CardHeader>
              <Database className="h-8 w-8 mx-auto text-primary"/>
              <CardTitle>1. Data Consumption</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Kasparro ingests a wide range of data to build a comprehensive view of your brand.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {dataSources.map(source => (
                  <span key={source} className="px-3 py-1 text-sm bg-secondary rounded-full">{source}</span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
          
          {/* Modules */}
          <Card className="w-full max-w-2xl text-center">
            <CardHeader>
              <Cpu className="h-8 w-8 mx-auto text-primary"/>
              <CardTitle>2. AI Analysis Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our seven proprietary modules analyze the data through the lens of AI search engines, evaluating everything from semantic relevance to brand narrative.</p>
            </CardContent>
          </Card>
          
          <ArrowDown className="h-8 w-8 text-muted-foreground" />

          {/* Output */}
          <Card className="w-full max-w-2xl text-center">
            <CardHeader>
              <FileText className="h-8 w-8 mx-auto text-primary"/>
              <CardTitle>3. Actionable Outputs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We don't just give you data; we give you a strategy. Outputs are designed for clarity and impact.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                 {outputs.map(output => (
                  <span key={output} className="px-3 py-1 text-sm bg-secondary rounded-full">{output}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 font-headline">How Kasparro Differs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Traditional SEO Tools</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Focus on keyword rankings.</li>
                        <li>Measure backlinks and domain authority.</li>
                        <li>Provide generic, one-size-fits-all advice.</li>
                        <li>Optimized for crawlers, not conversations.</li>
                    </ul>
                </CardContent>
            </Card>
             <Card className="border-primary">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart className="text-primary"/>
                        Kasparro
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="list-disc list-inside space-y-2">
                        <li className="font-semibold">Focus on AI-driven visibility and narratives.</li>
                        <li className="font-semibold">Measure trust, authoritativeness, and semantic relevance.</li>
                        <li className="font-semibold">Deliver custom, context-aware strategies.</li>
                        <li className="font-semibold">Optimized for answers, not just links.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
