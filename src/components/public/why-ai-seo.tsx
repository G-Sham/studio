import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, MessageCircle, BarChart } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "From Links to Direct Answers",
        description: "Google SGE and Perplexity don't just list links—they generate answers. If your brand isn't cited in that generated text, you are invisible to the modern user."
    },
    {
        icon: MessageCircle,
        title: "Optimizing for LLM Context",
        description: "Models like GPT-4 and Claude build narratives from your entity density. We help you structure content so these models understand your authority and cite you as a primary source."
    },
    {
        icon: BarChart,
        title: "New Metrics for a New Era",
        description: "Traditional rank tracking is obsolete. We track your 'Share of Model'—how often your brand appears in AI-generated responses across different personas and prompts."
    }
];

export function WhyAiSeo() {
    const whyAiSeoImage = PlaceHolderImages.find(img => img.id === 'why-ai-seo');
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {whyAiSeoImage && (
             <div className="flex items-center justify-center">
              <Image
                src={whyAiSeoImage.imageUrl}
                alt={whyAiSeoImage.description}
                width={500}
                height={500}
                className="rounded-xl shadow-xl ring-1 ring-border"
                data-ai-hint={whyAiSeoImage.imageHint}
              />
            </div>
          )}
          <div className="space-y-8">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why AI-First SEO?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    The world of search is undergoing its biggest change in a decade. Your old SEO playbook is obsolete.
                </p>
            </div>
            <div className="space-y-6">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <Card key={feature.title}>
                            <CardHeader className="flex flex-row items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <Icon className="h-5 w-5 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    );
                })}
            </div>
             <Button asChild variant="outline">
                <Link href="/platform">Explore the Platform</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
