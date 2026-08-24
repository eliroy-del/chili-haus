"use client";

import { SearchDialog } from "@/components/products/SearchDialog";
import { LinkButton } from "@/components/ui/LinkButton";
import { businessConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { whatsappOrderLink } from "@/lib/whatsapp";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/menu",
    label: "Menu",
    children: [
      { href: "/menu#freezer", label: "Freezer Friendly" },
      { href: "/menu#sauces", label: "Sauces & Shito" },
      { href: "/#meal-packages", label: "Meal Packages" },
    ],
  },
  { href: "/#why", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-dark/8 bg-cream/92 shadow-[0_10px_30px_-20px_rgba(28,20,16,0.45)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${businessConfig.name} home`}
          >
            <span className="relative size-10 overflow-hidden rounded-full bg-dark shadow-sm sm:size-11">
              <Image
                src="/images/logo/chili-haus-logo.jpg"
                alt=""
                fill
                sizes="44px"
                className="object-cover object-center scale-110"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-script text-2xl text-chili-red sm:text-[1.7rem]">
                Chili Haus
              </span>
              <span className="hidden text-[10px] font-medium tracking-[0.04em] text-muted sm:block">
                {businessConfig.tagline}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-dark/80 transition hover:bg-dark/5 hover:text-dark"
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    onClick={() => setMenuOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        menuOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full min-w-[13rem] pt-2 transition",
                      menuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-dark/10 bg-cream py-2 shadow-[0_16px_40px_-20px_rgba(28,20,16,0.5)]">
                      <Link
                        href={link.href}
                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-dark/5"
                        onClick={() => setMenuOpen(false)}
                      >
                        All Menu
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-dark/80 hover:bg-dark/5 hover:text-dark"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-dark/80 transition hover:bg-dark/5 hover:text-dark"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-dark/10 bg-white/70 text-dark transition hover:bg-white"
              aria-label="Search menu"
            >
              <Search className="size-4" />
            </button>

            <LinkButton
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Order
            </LinkButton>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-dark/10 bg-white/70 text-dark xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-50 xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-dark/50 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-cream shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-dark/8 px-4 py-4">
            <p className="font-script text-2xl text-chili-red">Chili Haus</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-dark/10"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="flex flex-col">
                  <button
                    type="button"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-dark hover:bg-dark/5"
                    aria-expanded={mobileMenuExpanded}
                    onClick={() => setMobileMenuExpanded((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform",
                        mobileMenuExpanded && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  {mobileMenuExpanded ? (
                    <div className="ml-3 flex flex-col border-l border-dark/10 pl-2">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-4 py-2.5 text-sm font-medium text-dark hover:bg-dark/5"
                      >
                        All Menu
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-4 py-2.5 text-sm text-dark/80 hover:bg-dark/5 hover:text-dark"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-dark hover:bg-dark/5"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="border-t border-dark/8 p-4">
            <LinkButton
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Order on WhatsApp
            </LinkButton>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
