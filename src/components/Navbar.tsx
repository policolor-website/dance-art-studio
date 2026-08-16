"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/cursuri", label: "Cursuri" },
  { href: "/galerie", label: "Galerie" },
  { href: "/evenimente", label: "Evenimente" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const linkClass = (active: boolean) =>
    `text-sm font-medium tracking-wide no-underline transition-colors ${
      active ? "text-rose" : "text-cream hover:text-rose"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 border-b border-rose/20 bg-night/80 backdrop-blur-md"
          : "py-5 border-b border-transparent bg-night/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" onClick={closeMobile} className="no-underline flex items-center">
          <span className="font-display text-2xl font-bold text-cream">
            Dance Art <span className="text-rose">·</span> <span className="text-gradient-rose">Studio</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(pathname === link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/inscriere"
          className="hidden md:inline-block px-6 py-2.5 bg-rose text-night text-sm font-semibold tracking-wide no-underline transition-all hover:bg-rose-light"
        >
          Înscrie-te
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-night border-b border-border-dark shadow-2xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`py-3 text-base font-medium no-underline ${
                  pathname === link.href ? "text-rose" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/inscriere"
              onClick={closeMobile}
              className="mt-4 px-6 py-3 bg-rose text-night text-sm font-semibold tracking-wide no-underline text-center"
            >
              Înscrie-te acum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
