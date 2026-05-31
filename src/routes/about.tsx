import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/ceo.png";
import { KenteRule } from "@/components/site/KenteRule";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Veezuals" },
      { name: "description", content: "Brand designer with 5 years of experience and 20+ satisfied clients across identity, social, and editorial." },
      { property: "og:title", content: "About — Veezuals" },
      { property: "og:description", content: "Five years of design practice across identity, social, print and editorial." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-x py-24 bg-[#07090A] text-[#EDF8FE]">
      <p className="eyebrow text-muted-foreground">About</p>
      <h1 className="display-lg mt-6 max-w-5xl">
        A designer <em className="text-[#C1E7F9]"> obsessed with </em> 
        the <br />
         details <em className="text-[#C1E7F9]">that makes</em> brands <em className="text-[#C1E7F9]"> unforgettable.</em>
      </h1>

      <div className="mt-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <img src={portrait} alt="Veezuals" loading="lazy" width={1024} height={1024} className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-base text-muted-foreground leading-relaxed">
          <p className="text-foreground text-lg">
            Victoria Edochie is the Founder and CEO of Veezuals, she's a brand designer
            that helps brands look better, feel stronger, and connect deeper through considered visual systems.
          </p>
          <p>
            Her practice spans brand identity, 
            social media design, 
            editorial and book interiors,
             presentation design, 
             and creative decoration. 
             A deliberately broad range that lets 
             every project speak in its truest visual voice.
          </p>
          <p>
            With five years of focused practice and over twenty satisfied clients, her work is rooted in restraint. Its minimal where it counts and expressive where it matters.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
            <div>
              <p className="display-lg !text-5xl text-foreground count-animation">05</p>
              <p className="eyebrow mt-2">Years of experience</p>
            </div>
            <div>
              <p className="display-lg !text-5xl text-foreground count-animation">20+</p>
              <p className="eyebrow mt-2">Satisfied clients</p>
            </div>
          </div>

          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 border border-foreground text-sm text-foreground hover:bg-foreground hover:text-background transition">
            <span className="emizen-regular">Work with Veezuals</span> →
          </Link>
        </div>
      </div>
      {/* <KenteRule className="mt-6" /> */}
    </section>
  );
}
