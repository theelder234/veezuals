import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/victoria-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Victoria Edochie" },
      { name: "description", content: "Brand designer with 5 years of experience and 20+ satisfied clients across identity, social, and editorial." },
      { property: "og:title", content: "About — Victoria Edochie" },
      { property: "og:description", content: "Five years of design practice across identity, social, print and editorial." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-x py-24">
      <p className="eyebrow text-muted-foreground">About</p>
      <h1 className="display-xl mt-6 max-w-5xl">
        A designer obsessed with the quiet details that make brands unforgettable.
      </h1>

      <div className="mt-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <img src={portrait} alt="Victoria Edochie" loading="lazy" width={1024} height={1024} className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-base text-muted-foreground leading-relaxed">
          <p className="text-foreground text-lg">
            Victoria Edochie is an independent brand designer helping brands look better, feel stronger, and connect deeper through considered visual systems.
          </p>
          <p>
            Her practice spans brand identity, social media design, editorial and book interiors, presentation design, and creative decoration — a deliberately broad range that lets every project speak in its truest visual voice.
          </p>
          <p>
            With five years of focused practice and over twenty satisfied clients, her work is rooted in restraint: minimal where it counts, expressive where it matters.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
            <div>
              <p className="display-xl !text-5xl text-foreground">05</p>
              <p className="eyebrow mt-2">Years of experience</p>
            </div>
            <div>
              <p className="display-xl !text-5xl text-foreground">20+</p>
              <p className="eyebrow mt-2">Satisfied clients</p>
            </div>
          </div>

          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 border border-foreground text-sm text-foreground hover:bg-foreground hover:text-background transition">
            Work with Victoria →
          </Link>
        </div>
      </div>
    </section>
  );
}
