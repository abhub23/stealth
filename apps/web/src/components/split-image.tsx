import { ScrollSplitCard } from "@/components/ui/scroll-split-card";

export function SplitCard() {
  return (
    <ScrollSplitCard
      imageSrc="/scene.jpg"
      cards={[
        {
          title: "Going Zero to One",
          description:
            "If you've navigating a new business... breaking into a new market.",
          bgColor: "#e2e2e2",
          textColor: "#111111",
        },
        {
          title: "Scaling from One to N",
          description: "If you've achieved Product/Market Fit...",
          bgColor: "#1a5bcf",
          textColor: "#ffffff",
        },
        {
          title: "Need Quick Solutions",
          description: "If you know exactly what you want and need...",
          bgColor: "#1c1c1c",
          textColor: "#ffffff",
        },
      ]}
    />
  );
}
