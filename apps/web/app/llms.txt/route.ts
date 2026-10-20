const App_Url = "https://stealth.abdullahtech.dev";

export const dynamic = "force-static";

export function GET() {
  const content = [
    "# Stealth",
    "",
    "> Stealth is a battle tested AI assistant designed and developed to help devs",
    "> manage and review their PRs efficiently. It uses AI agents to turn complex",
    "> workflows into clear, actionable insights so teams can make better decisions",
    "> faster.",
    "",
    "## Pages",
    "",
    `- [Home](${App_Url}/): Product features, capabilities, and FAQs.`,
    `- [About](${App_Url}/about): The mission behind Stealth — empowering developers with autonomous AI agents.`,
    `- [Pricing](${App_Url}/pricing): Plans and pricing.`,
    `- [Privacy Policy](${App_Url}/privacy): How Stealth handles your data.`,
    `- [Terms of Service](${App_Url}/terms): Terms of using Stealth.`,
    "",
    "## Account",
    "",
    `- [Sign in](${App_Url}/signin): Sign in to an existing account.`,
    `- [Sign up](${App_Url}/signup): Create a new account.`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
