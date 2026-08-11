import Link from "next/link";
import { XIcon, GithubIcon, LinkedInIcon, MailIcon } from "./logos";

export default function Footer() {
  const linkStyles =
    "text-sm text-muted-foreground hover:text-foreground transition-all duration-300 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom pb-1 hover:bg-[length:100%_1px]";

  return (
    <footer className="relative border-t border-white/5 bg-background pt-20 overflow-hidden selection:bg-primary/30">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-0 lg:flex lg:items-start">
          {/* Brand Column & CTA */}
          <div className="md:col-span-12 text-left flex flex-col items-start">
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
                Join teams using our AI-driven intelligence<br />
                platform to ship code 10x faster.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="https://x.com/abdullah_twt23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Email Address"
              >
                <MailIcon className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-16 lg:grid-cols-2 lg:ml-auto">
            <div className="lg:-ml-12">
              <h3 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase text-opacity-90">
                Product
              </h3>
              <ul className="space-y-2">
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
              </ul>
            </div>

            <div className="lg:ml-auto">
              <h3 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase text-opacity-90">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className={linkStyles}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={linkStyles}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkStyles}>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 md:mt-16 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-6">
          <p className="text-sm text-muted-foreground/80">
            © {new Date().getFullYear()} Stealth Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* Giant fading wordmark */}
      <div
        aria-hidden="true"
        className="relative pointer-events-none select-none mt-4"
      >
        <span className="block text-center text-[clamp(100px,22vw,360px)] font-bold leading-[0.85] tracking-tight text-muted-foreground/35 [mask-image:linear-gradient(to_top,black_40%,transparent_100%)]">
          Stealth
        </span>
      </div>
    </footer>
  );
}
