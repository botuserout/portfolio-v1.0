"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IDENTITY, NAV_LINKS } from "@/lib/constants";
import { gsap } from "gsap";
import { EASE } from "@/lib/animations";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // ── Scroll detection ──────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Entrance animation ─────────────────────────────────────────
  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: EASE.outQuart, delay: 0.2 }
    );
  }, []);

  // ── Mobile menu animation ──────────────────────────────────────
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(mobileMenuRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.4, ease: EASE.outQuart });
      gsap.fromTo(".mob-link", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: EASE.outQuart, delay: 0.15 });
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileMenuRef.current, { opacity: 0, pointerEvents: "none", duration: 0.25, ease: EASE.outQuart });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Main Nav Bar ── */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          isScrolled
            ? "bg-[#080808]/92 backdrop-blur-xl border-b border-[#C8FF3D]/20"
            : "bg-[#080808]/70 backdrop-blur-md border-b border-white/8"
        }`}
        style={{ opacity: 0 }} // GSAP animates this in
      >
        {/* Top accent line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8FF3D]/60 to-transparent" />

        <div className="container-main flex items-center justify-between h-16 sm:h-[72px]">

          {/* ── LEFT: Identity block ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            data-cursor="pointer"
            aria-label="Go to homepage"
          >
            {/* Status dot */}
            <span className="relative flex items-center justify-center w-7 h-7">
              <span className="absolute w-5 h-5 rounded-full bg-[#C8FF3D]/15 animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#C8FF3D]" />
            </span>

            {/* Name + title */}
            <div className="flex flex-col leading-tight">
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em" }}
                className="text-[11px] font-bold text-[#F4F4F0] uppercase tracking-[0.12em] group-hover:text-[#C8FF3D] transition-colors"
              >
                {IDENTITY.name}
              </span>
              <span
                style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}
                className="text-[9px] text-[#8A8A86] uppercase tracking-[0.1em] hidden sm:block"
              >
                {IDENTITY.title}
              </span>
            </div>

            {/* Location badge */}
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="hidden lg:flex items-center gap-1.5 text-[9px] text-[#6D6D69] uppercase tracking-widest border-l border-white/10 pl-3 ml-1"
            >
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" className="shrink-0">
                <circle cx="3.5" cy="3.5" r="3" stroke="#6D6D69" strokeWidth="1" />
                <circle cx="3.5" cy="3.5" r="1" fill="#C8FF3D" />
              </svg>
              {IDENTITY.location}
            </span>
          </Link>

          {/* ── CENTER: Divider (decorative, large screens) ── */}
          <div className="hidden xl:flex flex-1 items-center mx-8">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* ── RIGHT: Nav links + CTA ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor="pointer"
                style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}
                className="relative px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#8A8A86] hover:text-[#F4F4F0] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-3 right-3 h-[1px] bg-[#C8FF3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}

            {/* ── CTA button ── */}
            <a
              href="#contact"
              data-cursor="pointer"
              style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}
              className="ml-3 flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8FF3D]/40 text-[10px] uppercase tracking-[0.12em] text-[#C8FF3D] hover:bg-[#C8FF3D] hover:text-[#080808] transition-all duration-300 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Get in Touch
            </a>
          </nav>

          {/* ── MOBILE: Hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 text-[#F4F4F0] hover:text-[#C8FF3D] transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Bottom accent line */}
        <div
          className={`h-[1px] w-full transition-all duration-500 ${
            isScrolled
              ? "bg-gradient-to-r from-transparent via-[#C8FF3D]/30 to-transparent"
              : "bg-transparent"
          }`}
        />
      </header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#080808] z-[998] flex flex-col justify-between p-8 pt-24 opacity-0 pointer-events-none md:hidden"
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mob-link flex items-center gap-4 group"
            >
              <span className="w-4 h-[1px] bg-[#C8FF3D]/40 group-hover:w-8 transition-all duration-300" />
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-medium uppercase text-[#F4F4F0] group-hover:text-[#C8FF3D] transition-colors tracking-tight"
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: "'DM Mono', monospace" }} className="text-[10px] text-[#6D6D69] uppercase tracking-widest">{IDENTITY.location}</span>
            <span style={{ fontFamily: "'DM Mono', monospace" }} className="text-[10px] text-[#C8FF3D] uppercase tracking-widest">{IDENTITY.status}</span>
          </div>
          <a
            href={`mailto:${IDENTITY.email}`}
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] text-[#8A8A86] hover:text-[#C8FF3D] transition-colors uppercase tracking-widest"
          >
            {IDENTITY.email}
          </a>
        </div>
      </div>
    </>
  );
}
