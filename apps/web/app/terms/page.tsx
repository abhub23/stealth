import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms of Service - Stealth",
  description:
    "The terms and conditions that govern your use of Stealth's AI-powered development platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Stealth platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access the platform.",
      "These Terms apply to all visitors, users, and others who access the service. We may update these Terms from time to time, and it is your responsibility to review them periodically.",
    ],
  },
  {
    title: "2. Use of the Service",
    body: [
      "Stealth grants you a limited, non-exclusive, non-transferable license to use the platform for your internal business purposes in accordance with these Terms.",
      "You agree not to misuse, reverse engineer, or attempt to extract the source code of the service, nor use it to build a competitive product. You are responsible for all activity that occurs under your account.",
    ],
  },
  {
    title: "3. User Accounts",
    body: [
      "To access certain features, you must create an account. You are responsible for safeguarding your credentials and for any activity that occurs under your account.",
      "You must provide accurate and complete information when creating your account, and you agree to update it to keep it accurate. You may not create accounts for others without their consent.",
    ],
  },
  {
    title: "4. Acceptable Use",
    body: [
      "You agree not to use the platform to: violate any laws; infringe the rights of others; transmit malware or harmful code; attempt to gain unauthorized access to systems; or interfere with the operation of the service.",
      "We reserve the right to suspend or terminate accounts that engage in abusive or unlawful behavior, without prior notice where required by law.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "The Stealth platform, including its software, design, logos, and documentation, is owned by Stealth Inc. and protected by intellectual property laws. You retain ownership of the code and content you create using the platform.",
      "Nothing in these Terms grants you any rights to Stealth's trademarks or branding. Your use of the service does not transfer any ownership rights to you.",
    ],
  },
  {
    title: "6. Payment and Subscriptions",
    body: [
      "Paid features are billed in advance on a recurring basis unless otherwise stated at checkout. All fees are non-refundable except where required by law.",
      "We may modify pricing or introduce new fees with reasonable notice. Continued use of the service after a pricing change constitutes acceptance of the new pricing.",
    ],
  },
  {
    title: "7. Termination",
    body: [
      "You may stop using the platform and delete your account at any time. We may suspend or terminate your access if you breach these Terms.",
      "Upon termination, your right to use the service ceases immediately. Provisions of these Terms that by their nature should survive termination will remain in effect.",
    ],
  },
  {
    title: "8. Disclaimers and Limitation of Liability",
    body: [
      "The service is provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.",
      "To the maximum extent permitted by law, Stealth shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the service.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These Terms are governed by the laws of the jurisdiction in which Stealth Inc. is incorporated, without regard to its conflict of law provisions.",
      "Any disputes arising from these Terms will be resolved in the competent courts of that jurisdiction. You agree to submit to the personal jurisdiction of those courts.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "If you have questions about these Terms, please reach out to us via the contact page or by emailing support@stealth.dev.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-125 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Terms of Service
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