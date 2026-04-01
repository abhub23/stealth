import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { XIcon, GithubIcon, LinkedInIcon, MailIcon } from "./logos";

export default function Footer() {
  const linkStyles =
    "text-sm text-muted-foreground hover:text-foreground transition-all duration-300 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom pb-1 hover:bg-[length:100%_1px]";

  return (
    <footer className="relative border-t border-white/5 bg-background pt-20 pb-12 overflow-hidden selection:bg-primary/30">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column & CTA */}
          <div className="md:col-span-12 lg:col-span-5 text-left flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-8 group"
            >
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Stealth
              </span>
            </Link>

            {/* AI SaaS focused Mini CTA */}
            <div className="w-full max-w-sm mb-10">
              <h3 className="text-foreground font-medium mb-2 opacity-90">
                Ready to automate your workflow?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join 10,000+ modern teams using our AI-driven intelligence
                platform to ship code 10x faster.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="Email Address"
              >
                <MailIcon className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase text-opacity-90">
                Product
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className={linkStyles}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase text-opacity-90">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className={linkStyles}>
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Community Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase text-opacity-90">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className={linkStyles}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${linkStyles} !inline-flex items-center gap-1.5 group`}
                  >
                    Partners{" "}
                    <ArrowUpRight className="h-3 w-3 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground/80">
            © {new Date().getFullYear()} Stealth Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className={linkStyles}>
              Privacy Policy
            </Link>
            <Link href="#" className={linkStyles}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
