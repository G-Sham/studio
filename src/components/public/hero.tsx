import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Gradients (Pushed to back with -z-10) */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Main Content (Brought to front with z-10) */}
      <div className="container relative z-10 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl font-headline">
            AI-Native SEO & <br />
            <span className="text-blue-600">Brand Intelligence</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kasparro is the first platform designed to help brands optimize their digital 
            presence for the AI-first search era. Win in a world of answers, not just links.
          </p>
          
          {/* THE BUTTONS (Fixed Wrapper Method) */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/app/dashboard" className="inline-block">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            
            <Link href="/app/architecture" className="inline-block">
              <Button variant="ghost" size="lg" className="text-slate-900">
                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image (Fixed High-Res) */}
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl border bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
              alt="AI Dashboard Interface"
              width={2432}
              height={1442}
              className="w-full rounded-md shadow-2xl ring-1 ring-slate-900/10"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}