import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-125 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

        <section className="relative flex min-h-screen items-center justify-center pt-32 pb-24 md:pt-44 md:pb-32">
          <Container className="relative z-10 w-full">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="block bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/15 font-bold leading-[0.8] tracking-tighter text-[clamp(96px,26vw,240px)]">
                404
              </span>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance md:text-xl">
                The URL you requested doesn&apos;t exist, was moved, or was
                never shipped. Even our agents couldn&apos;t find it.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-10 cursor-pointer rounded-md px-6 text-[15px] sm:h-12 sm:text-base"
                >
                  <Link href="/">
                    Back to home
                    <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5 sm:size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}