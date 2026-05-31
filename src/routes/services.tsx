import { createFileRoute, Link } from "@tanstack/react-router";
import { KenteRule } from "@/components/site/KenteRule";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Veezuals" },
      { name: "description", content: "Social media design, flyer design, book interiors, brand presentations, and creative decorations." },
      { property: "og:title", content: "Services — Veezuals" },
      { property: "og:description", content: "A full creative service for brands that want to look better and connect deeper." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    t: "Social Media Design",
    d: "Templates, post systems and campaign visuals built to stay consistent across every grid and story.",
    deliverables: ["Feed systems", "Story templates", "Launch campaigns"],
  },
  {
    n: "02",
    t: "Flyer Design",
    d: "Print- and screen-ready flyers for events, promotions, and announcements with typographic clarity.",
    deliverables: ["Event flyers", "Promo posters", "Digital invites"],
  },
  {
    n: "03",
    t: "Book Interior Design",
    d: "Considered interior layouts that respect the manuscript while making reading effortless.",
    deliverables: ["Page layouts", "Typography setting", "Print-ready files"],
  },
  {
    n: "04",
    t: "Brand Presentation Design",
    d: "Pitch decks and brand books that translate strategy into a story your audience will follow.",
    deliverables: ["Pitch decks", "Brand books", "Investor decks"],
  },
  {
    n: "05",
    t: "Creative Decorations",
    d: "Visual direction for events, spaces, and installations — bringing brand into the physical world.",
    deliverables: ["Event styling", "Spatial direction", "Print collateral"],
  },
];

function ServicesPage() {
  return (
    <section className="container-x py-24 bg-[#64AEE0]">
      <p className="eyebrow text-light">Services</p>
      <h1 className="display-lg mt-6 max-w-4xl">A full <em className="text-[#07090A]">creative service,</em> <br />
      one quiet  <em className="text-[#07090A]">point of contact. </em></h1>
      {/* <KenteRule className="mt-6" /> */}

      <div className="mt-20 space-y-px bg-border">
        {services.map((s) => (
          <article key={s.n} className="bg-[#DAF2FE] text-[#07090A] p-8 md:p-12 grid md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-3">
              <p className="text-muted-foreground text-sm">{s.n}</p>
              <h2 className="font-display text-2xl md:text-3xl mt-2">{s.t}</h2>
            </div>
            <p className="md:col-span-5 text-muted-foreground leading-relaxed">{s.d}</p>
            <ul className="md:col-span-4 space-y-2 text-sm">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#64AEE0] rounded-full shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-12 flex flex-col md:flex-row justify-between gap-8">
        <p className="font-display text-3xl md:text-4xl max-w-xl">
          Not sure which service fits? Tell me about the project, I'll guide you.
        </p>
        <Link to="/contact" className="self-start px-6 py-4 bg-foreground text-background text-sm hover:opacity-90">
          Start a project →
        </Link>
      </div>
    </section>
  );
}
