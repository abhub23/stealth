import Navbar from "../src/components/navbar";
import BentoGrid from "../src/components/bento-grid";
import CTA from "../src/components/cta";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-[200vh]">
        <CTA />
        <BentoGrid />
      </div>
      <Footer />
    </>
  );
}
