import BusinessCardCalculator from "./_components/calculator";
import FeatureCards from "./_components/feature-card";
import FloatingNav from "./_components/floating-nav";
import Hero from "./_components/hero";
import MultiStepForm from "./_components/multi-step-form";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">


        <FloatingNav />
        <Hero />
        <FeatureCards />
        <BusinessCardCalculator />
        <MultiStepForm />



      </main>

    </div>
  );
}
