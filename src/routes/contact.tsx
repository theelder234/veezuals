import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Veezuals" },
      { name: "description", content: "Book a design service with Veezuals. Brand identity, social, print, and editorial." },
      { property: "og:title", content: "Contact — Veezuals" },
      { property: "og:description", content: "Get in touch to book a creative project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-x py-24">
      <p className="eyebrow text-muted-foreground">Contact</p>
      <h1 className="display-xl mt-6 max-w-4xl">Let's build something that lasts.</h1>
      <div className="kente-rule mt-6" />

      <div className="mt-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow text-muted-foreground">Email</p>
            <a href="mailto:hello@victoriaedochie.com" className="block mt-3 font-display text-2xl md:text-3xl hover:opacity-70 transition">
              hello@victoriaedochie.com
            </a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Booking</p>
            <p className="mt-3 text-muted-foreground max-w-sm">
              Briefs are reviewed within 48 hours. A 70% non-refundable deposit secures your spot in the studio's schedule.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground text-muted-foreground">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground">Behance ↗</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground">LinkedIn ↗</a></li>
            </ul>
          </div>
        </div>

        <form
          className="lg:col-span-7 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`New brief — ${data.get("name")}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:hello@victoriaedochie.com?subject=${subject}&body=${body}`;
          }}
        >
          <Field label="Your name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="eyebrow text-muted-foreground block mb-3">Service of interest</label>
            <select
              name="service"
              className="w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-foreground"
            >
              <option className="bg-background">Social media design</option>
              <option className="bg-background">Flyer design</option>
              <option className="bg-background">Book interior design</option>
              <option className="bg-background">Brand presentation</option>
              <option className="bg-background">Creative decoration</option>
              <option className="bg-background">Something else</option>
            </select>
          </div>
          <div>
            <label className="eyebrow text-muted-foreground block mb-3">Tell me about your project</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-foreground resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background text-sm hover:opacity-90"
          >
            Send brief →
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-foreground"
      />
    </div>
  );
}
