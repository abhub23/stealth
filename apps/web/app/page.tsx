import Navbar from "../src/components/navbar";
import BentoGrid from "../src/components/bento-grid";
import CTA from "../src/components/cta";
import FAQs from "../src/components/faqs";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-[200vh]">
        <CTA />
        <BentoGrid />
      </div>
      <FAQs />
      <Footer />
    </>
  );
}
