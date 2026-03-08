import Navbar from "./navbar";
import BentoGrid from "./bento-grid";

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
