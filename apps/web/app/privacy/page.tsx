import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy Policy - Stealth",
  description:
    "How Stealth collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, email address, and payment details when you create an account or make a purchase.",
      "We also collect information automatically, including usage data, device information, IP addresses, and cookies, to help us improve our service and personalize your experience.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to provide and maintain the service, process transactions, send you updates and notifications, and respond to your requests.",
      "We may also use aggregated, anonymized data to analyze trends, improve our platform, and develop new features. We never sell your personal information.",
    ],
  },
  {
    title: "3. Data Storage and Security",
    body: [
      "Your data is stored on secure servers with encryption in transit and at rest. We implement industry-standard safeguards to protect your information from unauthorized access.",
      "While we work hard to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but will promptly notify you of any breaches we become aware of.",
    ],
  },
  {
    title: "4. Sharing of Information",
    body: [
      "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating the platform, subject to confidentiality obligations.",
      "We may disclose information when required by law, or to protect our rights, safety, or property, or those of our users.",
    ],
  },
  {
    title: "5. Cookies and Tracking",
    body: [
      "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the service is used.",
      "You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of the platform.",
    ],
  },
  {
    title: "6. Your Rights and Choices",
    body: [
      "You have the right to access, correct, or delete your personal information at any time. You can do so from your account settings or by contacting us.",
      "You may also object to or restrict certain processing, and you have the right to data portability where applicable. We will honor valid requests within a reasonable timeframe.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain your personal information for as long as your account is active or as needed to provide you with our services and comply with legal obligations.",
      "When data is no longer required, we delete or anonymize it in secure fashion. You may request deletion of your account and associated data at any time.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "Our platform is not directed to children under 13, and we do not knowingly collect personal information from them.",
      "If we learn that we have collected data from a child under 13 without verifiable parental consent, we will promptly delete that information.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised effective date.",
      "Your continued use of the platform after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or our data practices, please contact us via the contact page or by emailing privacy@stealth.dev.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
                Last updated: August 11, 2026
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-24 relative">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.body.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-base leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}