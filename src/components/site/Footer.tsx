import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-brand-panel">
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="eyebrow text-muted-foreground">Studio</p>
          <p className="mt-4 font-display text-2xl">Victoria Edochie</p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Helping brands look better, feel stronger, and connect deeper through design.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
            <li><Link to="/policies" className="hover:text-foreground text-muted-foreground">Policies</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Booking</p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 border border-foreground px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Start a project →
          </Link>
        </div>
      </div>
      <div className="container-x py-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Victoria Edochie. All rights reserved.</p>
        <p>Brand identity · Print · Editorial · Social</p>
      </div>
    </footer>
  );
}
