import { createFileRoute } from "@tanstack/react-router";
import { KenteRule } from "@/components/site/KenteRule";

// Church Program Branding - Faith Adventure
import faithAdventure1 from "@/assets/projects/Church Program Branding - Faith Adventure/1001988195.jpg";
import faithAdventure2 from "@/assets/projects/Church Program Branding - Faith Adventure/20260420_005634.jpg";
import faithAdventure3 from "@/assets/projects/Church Program Branding - Faith Adventure/20260422_101006.jpg";

// Church Program Branding - Sounds of Healing
import soundsOfHealing1 from "@/assets/projects/Church Program Branding - Sounds of Healing/1001938317.jpg";
import soundsOfHealing2 from "@/assets/projects/Church Program Branding - Sounds of Healing/1001939871.jpg";
import soundsOfHealing3 from "@/assets/projects/Church Program Branding - Sounds of Healing/1001939878.jpg";

// Flyer Designs for GLCICC
import glcicc1 from "@/assets/projects/Flyer Designs for GLCICC/20260113_102553.jpg";
import glcicc2 from "@/assets/projects/Flyer Designs for GLCICC/20260114_231624.jpg";

// Flyer Designs for Ladies Alive Global Institute
import ladiesAlive1 from "@/assets/projects/Flyer Designs for Ladies Alive Global Institute l/20260207_235015.jpg";
import ladiesAlive2 from "@/assets/projects/Flyer Designs for Ladies Alive Global Institute l/20260207_235121.jpg";
import ladiesAlive3 from "@/assets/projects/Flyer Designs for Ladies Alive Global Institute l/Vibes&Voices Gombe - Ladies Alive Flyer.jpg";

// Logo for Sha_zefa
import shaZefa1 from "@/assets/projects/Logo for Sha_zefa/20260422_115037.png";
import shaZefa2 from "@/assets/projects/Logo for Sha_zefa/20260422_115235.png";

// My Logo
import myLogo1 from "@/assets/projects/My Logo/20250117_172513.png";

// Northstar Academy Branding
import northstar1 from "@/assets/projects/Northstar Academy Branding/20260110_151745.png";
import northstar2 from "@/assets/projects/Northstar Academy Branding/20260120_152305.png";
import northstar3 from "@/assets/projects/Northstar Academy Branding/20260120_153303.png";

// School Campaign Designs
import schoolCampaign1 from "@/assets/projects/School Campaign Designs/20250925_192739.jpg";
import schoolCampaign2 from "@/assets/projects/School Campaign Designs/20250926_102800 (1).jpg";
import schoolCampaign3 from "@/assets/projects/School Campaign Designs/20250930_221221.jpg";

// Underscored Movie Premiere Branding
import underscored1 from "@/assets/projects/Underscored Movie Premiere Branding/Underscored (1).jpg";
import underscored2 from "@/assets/projects/Underscored Movie Premiere Branding/Underscored (2).jpg";
import underscored3 from "@/assets/projects/Underscored Movie Premiere Branding/Underscored (3).jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Veezuals" },
      { name: "description", content: "Showcase of brand identity, social media design, flyer design, and creative work by Veezuals." },
      { property: "og:title", content: "Gallery — Veezuals" },
      { property: "og:description", content: "View all design projects and creative work." },
    ],
  }),
  component: GalleryPage,
});

const galleryProjects = [
  {
    name: "Faith Adventure Branding",
    images: [faithAdventure1, faithAdventure2, faithAdventure3],
  },
  {
    name: "Sounds of Healing",
    images: [soundsOfHealing1, soundsOfHealing2, soundsOfHealing3],
  },
  {
    name: "GLCICC Flyer Designs",
    images: [glcicc1, glcicc2],
  },
  {
    name: "Ladies Alive Campaign",
    images: [ladiesAlive1, ladiesAlive2, ladiesAlive3],
  },
  {
    name: "Sha_zefa Logo",
    images: [shaZefa1, shaZefa2],
  },
  {
    name: "Personal Logo",
    images: [myLogo1],
  },
  {
    name: "Northstar Academy Branding",
    images: [northstar1, northstar2, northstar3],
  },
  {
    name: "School Campaign Designs",
    images: [schoolCampaign1, schoolCampaign2, schoolCampaign3],
  },
  {
    name: "Underscored Movie Premiere",
    images: [underscored1, underscored2, underscored3],
  },
];

function GalleryPage() {
  return (
    <>
      <section className="container-x py-24">
        <p className="eyebrow text-muted-foreground">Gallery</p>
        <h1 className="display-lg mt-6 max-w-4xl">All designs and creative work.</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A collection of brand identity, social media design, flyer design, and creative projects.
        </p>
      </section>

      <KenteRule className="mt-6" />

      <section className="container-x py-24">
        <div className="space-y-24">
          {galleryProjects.map((project) => (
            <div key={project.name}>
              <h2 className="text-2xl font-display mb-8">{project.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, idx) => (
                  <div key={idx} className="aspect-[4/5] bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={image} alt={`${project.name} - ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <KenteRule className="mt-6" />

      <section className="container-x py-24">
        <div className="border-t border-border pt-16">
          <p className="eyebrow text-muted-foreground">Ready to start?</p>
          <h2 className="display-lg mt-6 max-w-4xl">Have a project in mind?</h2>
          <a href="/contact" className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background text-sm hover:opacity-90">
            Get in touch →
          </a>
        </div>
      </section>

      <KenteRule className="mt-6" />
    </>
  );
}
