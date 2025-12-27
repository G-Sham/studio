import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BrainCircuit, MessageSquare, Target } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Search is now a conversation.",
    description: "Users get answers, not just links. We help you become the source of those answers.",
  },
  {
    icon: BrainCircuit,
    title: "AI models are the new audience.",
    description: "Your content needs to be optimized for machine understanding and citation, not just human readability.",
  },
  {
    icon: Target,
    title: "Brand narrative is your new keyword.",
    description: "AI builds a 'story' about your brand from all public data. We help you shape that story.",
  },
];

export function WhyAiSeo() {
  const whyImage = PlaceHolderImages.find(p => p.id === 'why-ai-seo');
  
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why AI-Native SEO Matters Now</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The shift from keyword lists to conversational AI is the biggest disruption to search in a decade. Traditional SEO is no longer enough.
            </p>
            <div className="mt-12 space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            {whyImage && (
                <Image
                    src={whyImage.imageUrl}
                    alt={whyImage.description}
                    data-ai-hint={whyImage.imageHint}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
