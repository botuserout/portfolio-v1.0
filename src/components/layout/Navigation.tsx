"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IDENTITY, NAV_LINKS } from "@/lib/constants";
import { gsap } from "gsap";
import { EASE } from "@/lib/animations";
import { PearlButton } from "@/components/ui/pearl-button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // ── Scroll detection & active section spy ───────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ["work", "about", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

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
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
        ease: EASE.outQuart,
      });
      gsap.fromTo(
        ".mob-link",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: EASE.outQuart, delay: 0.15 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.25,
        ease: EASE.outQuart,
      });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Main Header ── */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#080808]/92 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "py-6 sm:py-7 bg-gradient-to-b from-[#080808]/95 via-[#080808]/70 to-transparent backdrop-blur-md"
        }`}
        style={{ opacity: 0 }}
      >
        <div className="container-main flex items-center justify-between gap-6">

          {/* ── 1. LEFT: Identity / Brand ── */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group shrink-0"
            data-cursor="pointer"
            aria-label="Go to homepage"
          >
            {/* Status Beacon */}
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.05] border border-white/15 group-hover:border-[#C8FF3D]/50 transition-colors">
              <span className="absolute w-5 h-5 rounded-full bg-[#C8FF3D]/25 animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#C8FF3D] shadow-[0_0_10px_#C8FF3D]" />
            </span>

            {/* Name + Details */}
            <div className="flex flex-col gap-0.5">
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-sm sm:text-base font-bold text-[#F4F4F0] uppercase tracking-[0.16em] group-hover:text-[#C8FF3D] transition-colors"
              >
                {IDENTITY.name}
              </span>
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[11px] text-[#8A8A86] tracking-wider hidden sm:block"
              >
                {IDENTITY.location}
              </span>
            </div>
          </Link>

          {/* ── 2. CENTER: Large Floating Pill Navigation Dock with Generous Spacing ── */}
          <nav
            className="hidden md:flex items-center gap-2 lg:gap-3 bg-white/[0.06] hover:bg-white/[0.08] border border-white/15 rounded-full px-3.5 py-2 backdrop-blur-2xl transition-all duration-300 shadow-[0_4px_28px_rgba(0,0,0,0.45)]"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  data-cursor="pointer"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className={`relative px-4 lg:px-5 py-2 text-xs lg:text-[13px] uppercase tracking-[0.14em] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-[#080808] bg-[#C8FF3D] font-bold shadow-[0_0_16px_rgba(200,255,61,0.5)] scale-105"
                      : "text-[#A0A09C] hover:text-[#FFFFFF] hover:bg-white/[0.08]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* ── 3. RIGHT: CTA & Availability Status ── */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <PearlButton
              href="#contact"
              size="md"
              label="GET IN TOUCH"
              data-cursor="pointer"
            />
          </div>

          {/* ── MOBILE: Hamburger Toggle ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.06] border border-white/15 text-[#F4F4F0] hover:text-[#C8FF3D] hover:border-[#C8FF3D]/50 transition-colors"
            aria-label="Toggle Navigation"
          >
            <div className="flex flex-col gap-1.5 items-center justify-center w-5">
              <span
                className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#080808]/98 backdrop-blur-2xl z-[998] flex flex-col justify-between p-8 pt-28 opacity-0 pointer-events-none md:hidden"
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mob-link flex items-center gap-4 group py-2"
            >
              <span className="w-6 h-[1px] bg-[#C8FF3D]/40 group-hover:w-12 group-hover:bg-[#C8FF3D] transition-all duration-300" />
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-bold uppercase text-[#F4F4F0] group-hover:text-[#C8FF3D] transition-colors tracking-tight"
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
          <div className="flex justify-between items-center text-[10px] text-mono text-muted uppercase tracking-widest">
            <span>{IDENTITY.location}</span>
            <span className="text-[#C8FF3D]">{IDENTITY.status}</span>
          </div>
          <a
            href={`mailto:${IDENTITY.email}`}
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-xs text-[#8A8A86] hover:text-[#C8FF3D] transition-colors uppercase tracking-wider"
          >
            {IDENTITY.email}
          </a>
        </div>
      </div>
    </>
  );
}
