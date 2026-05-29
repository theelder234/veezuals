import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Creative Service Guidelines — Victoria Edochie" },
      { name: "description", content: "Payment, revision, timeline, delivery, cancellation, and usage policies for working with Victoria Edochie." },
      { property: "og:title", content: "Creative Service Guidelines — Victoria Edochie" },
      { property: "og:description", content: "How we work together: payment, revisions, timelines, delivery, and usage rights." },
    ],
  }),
  component: PoliciesPage,
});

const sections = [
  {
    n: "01",
    t: "Payment Policy",
    body: [
      "A non-refundable 70% upfront payment is required before any design work begins.",
      "The remaining 30% balance must be completed before the final files are delivered.",
      "No final design files will be sent until full payment has been received.",
    ],
  },
  {
    n: "02",
    t: "Revision Policy",
    body: [
      "Clients are entitled to up to four (4) free revisions within the scope of the agreed project.",
      "Any additional revisions beyond the four included will attract an extra charge of 15% of the initial project fee per revision phase.",
      "Major changes to the original concept, brief, or direction after approval will be treated as a new project and billed separately.",
    ],
  },
  {
    n: "03",
    t: "Project Timeline",
    body: [
      "Project timelines begin once the upfront payment has been made and all required project materials and content have been submitted.",
      "Delays in sending content, feedback, or approvals may affect the delivery timeline.",
    ],
  },
  {
    n: "04",
    t: "Client Responsibilities",
    body: [
      "Clients are expected to provide agreed content, clear instructions, necessary images, logos and files on time within the contract.",
      "The designer is not responsible for errors in content supplied by the client after approval.",
    ],
  },
  {
    n: "05",
    t: "File Delivery",
    body: [
      "Final delivery will be sent in the agreed format only.",
      "Editable source files (PSD, AI, etc.) may attract an additional fee unless previously agreed.",
    ],
  },
  {
    n: "06",
    t: "Cancellation & Refunds",
    body: [
      "The upfront covers time, planning, and creative direction, and is therefore non-refundable once work has commenced.",
      "If a project is cancelled midway by the client, work completed up to that stage remains billable.",
    ],
  },
  {
    n: "07",
    t: "Usage Rights",
    body: [
      "The designer reserves the right to display completed work in portfolios and promotional materials unless otherwise agreed confidential.",
      "Clients may not sell, alter, or claim ownership of draft concepts that were not approved or finalised.",
    ],
  },
  {
    n: "08",
    t: "Communication Policy",
    body: [
      "All project discussions, approvals, and revision requests should be communicated clearly through the agreed communication channel.",
      "Respectful and professional communication are expected from both parties throughout the project duration.",
    ],
  },
];

function PoliciesPage() {
  return (
    <section className="container-x py-24">
      <p className="eyebrow text-muted-foreground">Creative Service Guidelines</p>
      <h1 className="display-xl mt-6 max-w-4xl">How we work together.</h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        These guidelines protect both the client and the studio, keeping every project on a clear, respectful, and creative path from brief to delivery.
      </p>

      <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
        {sections.map((s) => (
          <article key={s.n} className="bg-background p-8 md:p-10">
            <div className="flex items-baseline gap-4">
              <span className="text-muted-foreground text-sm">{s.n}</span>
              <h2 className="font-display text-2xl">{s.t}</h2>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              {s.body.map((b, i) => (
                <li key={i} className="border-l border-border pl-4">{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
