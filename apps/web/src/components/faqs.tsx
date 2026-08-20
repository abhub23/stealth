import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "ai",
    trigger: "What can the AI agents automate?",
    content:
      "Our agents handle roadmap planning, task prioritization, and cross-team coordination — so you can focus on building instead of managing.",
  },
  {
    value: "customize",
    trigger: "Can I customize agent behavior?",
    content:
      "Yes, each agent can be configured with custom instructions, tools, and workflows tailored to your needs.",
  },
  {
    value: "returns",
    trigger: "How do agents collaborate across teams?",
    content:
      "Agents share context, delegate tasks, and coordinate workflows across your entire team in real time.",
  },
  {
    value: "support",
    trigger: "How can I contact customer support?",
    content:
      "Reach us via email or live chat. We respond within 24 hours during business days.",
  },
  {
    value: "pricing",
    trigger: "How much does it cost?",
    content:
      "We offer a free tier to get started, with paid plans for teams and enterprise needs.",
  },
];

export default function FAQs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            FAQs
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about us.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className={cn(
                "border-0 bg-transparent rounded-none",
                index !== items.length - 1 && "border-b",
              )}
            >
              <AccordionTrigger className="text-base sm:text-lg">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
