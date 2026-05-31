import { createFileRoute } from "@tanstack/react-router";
import { KenteRule } from "@/components/site/KenteRule";

const imageModules = import.meta.glob("../assets/projects/**/*.{jpg,jpeg,png}", {
  as: "url",
  eager: true,
});

const galleryProjects = Object.entries(imageModules)
  .map(([filePath, url]) => {
    const relativePath = filePath.replace("../assets/projects/", "");
    const segments = relativePath.split("/");
    const folder = segments.length > 1 ? segments[0] : "Other Projects";
    const fileName = segments[segments.length - 1];
    return { folder, fileName, url: url as string };
  })
  .sort((a, b) => {
    if (a.folder !== b.folder) return a.folder.localeCompare(b.folder, undefined, { numeric: true });
    return a.fileName.localeCompare(b.fileName, undefined, { numeric: true });
  })
  .reduce((acc, file) => {
    const section = acc.find((item) => item.name === file.folder);
    if (section) {
      section.images.push(file.url);
    } else {
      acc.push({ name: file.folder, images: [file.url] });
    }
    return acc;
  }, [] as { name: string; images: string[] }[]);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Veezuals" },
      { name: "description", content: "Showcase of brand identity, social media design, flyer design, and creative work by Veezuals." },
      { property: "og:title", content: "Gallery — Veezuals" },
      { property: "og:description", content: "View all design projects and creative work." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="container-x py-24">
        <p className="eyebrow text-muted-foreground">Gallery</p>
        <h1 className="display-lg mt-6 max-w-4xl">All <em className="text-blue-900">designs </em> and
          <br />creative <em className="text-blue-900">work. </em></h1>
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

      {/* <KenteRule className="mt-6" /> */}

      <section className="container-x py-24">
        <div className="border-t border-border pt-16">
          <p className="eyebrow text-muted-foreground">Ready to start?</p>
          <h2 className="display-lg mt-6 max-w-4xl">Have a <em className="text-blue-500">project</em>
            <br /> in <em className="text-blue-500">mind?</em></h2>
          <a href="/contact" className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background text-sm hover:opacity-90">
            Get in touch →
          </a>
        </div>
      </section>
    </>
  );
}
