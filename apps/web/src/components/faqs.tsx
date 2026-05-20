import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "shipping",
    trigger: "What are your shipping options?",
    content:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
  },
  {
    value: "returns",
    trigger: "What is your return policy?",
    content:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    value: "support",
    trigger: "How can I contact customer support?",
    content:
      "Reach us via email, live chat, or phone. We respond within 24 hours during business days.",
  },
]

export default function FAQs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about our platform.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="max-w-2xl mx-auto"
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-lg">{item.trigger}</AccordionTrigger>
              <AccordionContent className="text-lg">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
