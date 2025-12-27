import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">About Kasparro</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We are a team of engineers and product thinkers obsessed with the future of information discovery.
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-7 w-7 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To empower brands to thrive in the AI-first search era. We believe that the shift to conversational, AI-driven search represents the most significant change in digital marketing in a decade, and we're building the tools to navigate it.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Lightbulb className="h-7 w-7 text-primary" />
              Product Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Clarity over complexity. Actionable insights over raw data. We design our systems to be powerful yet intuitive, translating complex AI analysis into clear, strategic guidance that marketing teams can actually implement.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Rocket className="h-7 w-7 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We envision a future where brand intelligence is not just about tracking keywords, but about understanding and shaping a brand's narrative across the entire digital ecosystem. Kasparro aims to be the central nervous system for this new paradigm.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
