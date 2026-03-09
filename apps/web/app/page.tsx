import Navbar from "../src/components/navbar";
import BentoGrid from "../src/components/bento-grid";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-[200vh]">
        <BentoGrid />
      </div>
    </>
  );
}
