import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 sm:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
            Navigate the New Search Era with AI-Native SEO
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Kasparro is the first brand intelligence platform built from the ground up for the age of AI-driven search. Understand your visibility, shape your narrative, and win in a world of answers, not just links.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/app/dashboard">
                Get Started Free
                <ArrowRight className="ml-2"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/platform">Learn More</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 flow-root">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
             {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={1400}
                    height={800}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
