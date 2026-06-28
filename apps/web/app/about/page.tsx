import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/text";
import { Sparkles, Shield, Terminal, Zap } from "lucide-react";

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI, constantly evolving our platform to stay ahead of the curve.",
    icon: Sparkles,
  },
  {
    title: "Privacy by Design",
    description: "Your data is yours. We build security and privacy into every layer of our architecture.",
    icon: Shield,
  },
  {
    title: "Developer Obsessed",
    description: "Every feature we ship is crafted with developers in mind — clean APIs, seamless DX, and zero friction.",
    icon: Terminal,
  },
  {
    title: "Radical Transparency",
    description: "No hidden pricing, no black-box algorithms. We believe in honest, open communication with our users.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
          {/* Modern mesh gradient background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />
          
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
                ✨ Building the future of AI
              </div>
              <Heading as="h1" className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-balance">
                Building the future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">AI-powered development</span>
              </Heading>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
                Stealth is on a mission to empower every developer with autonomous AI agents
                that handle the boring stuff — so you can focus on what matters.
              </p>
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-white/[0.02] border-y border-white/[0.05]" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <Subheading className="mb-4 text-primary">Our Story</Subheading>
                <Heading as="h2" className="mb-6 text-3xl md:text-4xl text-balance">
                  From a simple idea to a platform used by thousands
                </Heading>
              </div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Stealth started in 2024 with a simple observation: developers spend too much
                  time on repetitive tasks and not enough time building. We set out to create
                  AI agents that could handle the grunt work — testing, deployment, monitoring —
                  so teams could move faster and ship better software.
                </p>
                <p>
                  We're backed by top-tier investors and a community of passionate developers
                  who believe that the future of software development is autonomous, collaborative,
                  and human-centric.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <Subheading className="mb-4 text-primary">Our Values</Subheading>
              <Heading as="h2" className="text-3xl md:text-5xl">What drives us every day</Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group relative overflow-hidden border border-white/10 rounded-2xl p-8 bg-background hover:bg-white/[0.02] transition-all duration-300"
                  >
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section >
          <Container>
            <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent blur-2xl" />
              
              <div className="relative z-10">
                <Heading as="h2" className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">
                  Ready to get started?
                </Heading>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-balance">
                  Join thousands of developers who are already shipping faster with Stealth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-foreground text-background h-12 px-8 text-sm font-semibold hover:bg-foreground/90 transition-all hover:scale-105 duration-200"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent text-foreground h-12 px-8 text-sm font-medium hover:bg-white/5 transition-all duration-200"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}