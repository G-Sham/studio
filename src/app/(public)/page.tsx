import { Hero } from '@/components/public/hero';
import { WhyAiSeo } from '@/components/public/why-ai-seo';
import { CoreModules } from '@/components/public/core-modules';
import { HowItWorks } from '@/components/public/how-it-works';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyAiSeo />
      <CoreModules />
      <HowItWorks />
    </>
  );
}
