import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/veezuals-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/policies", label: "Policies" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/10 border-b border-border">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center font-display text-sm tracking-tight">
          <img src={logo} alt="Veezuals logo" className="h-20 w-auto object-contain" />
          <span className="emizen-regular text-2xl font-bold -ml-5">Veezuals</span>
          {/* <span className="text-muted-foreground hidden sm:inline">— Brand Designer</span> */}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[#64aee0] hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-sm uppercase tracking-widest"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border container-x py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-2xl font-display"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
