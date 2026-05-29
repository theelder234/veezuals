import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/victoria-portrait.jpg";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veezuals — Brand Designer" },
      { name: "description", content: "Brand designer helping brands look better, feel stronger, and connect deeper through design." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Social Media Design", d: "Scroll-stopping content systems built for consistency." },
  { n: "02", t: "Flyer Design", d: "Print-ready event, promo, and campaign flyers." },
  { n: "03", t: "Book Interior Design", d: "Readable, refined layouts that respect the manuscript." },
  { n: "04", t: "Brand Presentation Design", d: "Pitch decks and brand books that command the room." },
  { n: "05", t: "Creative Decorations", d: "Considered visual environments for moments that matter." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-12 md:pt-24 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-muted-foreground">Brand Designer · Est. 2020</p>
            <h1 className="display-lg mt-6">
              Design that makes brands <em className="not-italic text-muted-foreground">look better,</em> feel stronger, and connect deeper.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <p className="text-base text-muted-foreground max-w-sm">
              I'm Veezuals — an independent brand designer working across identity, print, social, and editorial. Quiet craft, loud results.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 bg-foreground text-background text-sm hover:opacity-90 transition">
                Book a project
              </Link>
              <Link to="/services" className="px-5 py-3 border border-foreground text-sm hover:bg-foreground hover:text-background transition">
                View services
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-card">
            <img src={portrait} alt="Veezuals portrait" className="w-full h-full object-cover" width={1024} height={1024} />
          </div>
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div className="border border-border p-6">
              <p className="display-xl !text-6xl">05</p>
              <p className="eyebrow mt-3 text-muted-foreground">Years of practice</p>
            </div>
            <div className="border border-border p-6">
              <p className="display-xl !text-6xl">20+</p>
              <p className="eyebrow mt-3 text-muted-foreground">Satisfied clients</p>
            </div>
            <div className="border border-border p-6">
              <p className="display-xl !text-6xl">∞</p>
              <p className="eyebrow mt-3 text-muted-foreground">Brand stories told</p>
            </div>
          </div>
        </div>
      </section>
      <div className="kente-rule mt-6" />

      <Marquee items={["Brand Identity", "Social Design", "Editorial", "Print", "Decks", "Decoration"]} />

      {/* SERVICES PREVIEW */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow text-[#07090A]/80">What I do</p>
            <h2 className="display-xl !text-5xl md:!text-6xl mt-4">Services</h2>
          </div>
          <Link to="/services" className="text-sm underline underline-offset-4 hover:opacity-70">All services →</Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.n} className="grid grid-cols-12 gap-4 py-8 group hover:bg-card/50 transition px-2">
              <span className="col-span-2 md:col-span-1 text-muted-foreground text-sm">{s.n}</span>
              <span className="col-span-10 md:col-span-5 font-display text-2xl md:text-3xl">{s.t}</span>
              <span className="col-start-3 md:col-start-7 col-span-10 md:col-span-6 text-muted-foreground text-sm md:text-base">{s.d}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="kente-rule mt-6" />

      {/* SELECTED WORK PLACEHOLDER */}
      <section className="container-x py-24">
        <p className="eyebrow text-muted-foreground">Selected work</p>
        <h2 className="display-xl !text-5xl md:!text-6xl mt-4 mb-12">Coming soon.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/5] bg-card border border-border flex items-end p-6">
              <div>
                <p className="eyebrow text-muted-foreground">Case 0{i}</p>
                <p className="font-display text-xl mt-2">A new project arrives soon.</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-8 max-w-md">
          Best projects and client testimonials will be compiled and published here shortly.
        </p>
      </section>

      {/* CTA */}
      <section className="container-x py-32">
        <div className="border-t border-border pt-16">
          <p className="eyebrow text-muted-foreground">Booking design service</p>
          <h2 className="display-xl mt-6 max-w-4xl">Have a brand worth building? Let's talk.</h2>
          <div className="kente-rule mt-6" />
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background text-sm hover:opacity-90">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
