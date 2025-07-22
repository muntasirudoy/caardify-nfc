import AnimatedCard from "../../components/layouts";
import Banner from "./home/_components/banner/banner";
import { DesignTimeline } from "./home/_components/design/design";
import Faq from "./home/_components/faq/faq";
import { HowItWorks } from "./home/_components/how-works/how-it-works";
import ProductsSection from "./home/_components/products/products";
// import { Templates } from "./home/_components/templates/templates";

export default async function Page() {
  return (
    <>
      <AnimatedCard>
        <Banner />
        <ProductsSection />
        <DesignTimeline />
        <HowItWorks />
        <Faq />
      </AnimatedCard>
    </>
  );
}
