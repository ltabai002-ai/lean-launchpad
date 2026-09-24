import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Common Ground — Independent Design Studio" },
      { name: "description", content: "Thoughtful digital design for people building useful things." },
      { property: "og:title", content: "Common Ground — Independent Design Studio" },
      { property: "og:description", content: "Thoughtful digital design for people building useful things." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const services = [
    ["01", "Identity", "Clear visual systems made to last."],
    ["02", "Digital", "Focused websites that feel natural to use."],
    ["03", "Direction", "A practical path from idea to launch."],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background px-5 sm:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-border py-5">
        <a href="#top" className="font-display text-xl font-semibold text-foreground">Common Ground</a>
        <span className="hidden text-sm text-muted-foreground sm:block">Independent design studio</span>
        <Button asChild variant="ghost" size="sm">
          <a href="mailto:" aria-label="Start a conversation">Let’s talk <ArrowUpRight /></a>
        </Button>
      </nav>

      <section id="top" className="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-between py-12 sm:py-20">
        <p className="animate-rise text-sm font-medium uppercase text-primary">Available for select projects · 2026</p>
        <div className="animate-rise max-w-5xl py-16 sm:py-20">
          <h1 className="font-display text-5xl leading-[0.98] font-normal text-foreground sm:text-7xl lg:text-8xl">
            Good work begins<br />on common ground.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">
            We shape thoughtful brands and digital experiences for people building useful things.
          </p>
        </div>
        <a href="#work" className="flex w-fit items-center gap-2 text-sm font-medium text-foreground">
          What we do <ArrowDownRight className="size-4" />
        </a>
      </section>

      <section id="work" className="mx-auto max-w-6xl border-t border-border py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl sm:text-4xl">Small by design.<br />Broad in practice.</h2>
          <div>
            {services.map(([number, title, text]) => (
              <article key={number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7 sm:grid-cols-[4rem_1fr_1fr]">
                <span className="text-xs text-muted-foreground">{number}</span>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="col-start-2 text-sm leading-6 text-muted-foreground sm:col-start-auto">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <p>Common Ground © 2026</p>
        <a href="mailto:" className="font-display text-3xl text-foreground sm:text-4xl">Make something useful <ArrowUpRight className="inline size-6" /></a>
      </footer>
    </main>
  );
}
