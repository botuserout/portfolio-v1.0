"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IDENTITY, NAV_LINKS } from "@/lib/constants";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { gsap } from "gsap";
import { EASE } from "@/lib/animations";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactBtnRef = useMagneticEffect(10);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        ".mobile-nav-link",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: EASE.outQuart,
          delay: 0.1,
        }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: EASE.outQuart,
      });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#080808]/80 backdrop-blur-md border-b border-white/10"
            : "py-6 sm:py-8 bg-transparent"
        }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-label text-text hover:text-accent transition-colors"
            data-cursor="pointer"
          >
            <span className="w-2.5 h-2.5 bg-accent rounded-full group-hover:scale-125 transition-transform" />
            <span className="font-bold tracking-widest uppercase">
              {IDENTITY.name}
            </span>
            <span className="hidden md:inline-block text-muted text-[10px] ml-2 border border-white/10 px-2 py-0.5 rounded-full font-mono">
              {IDENTITY.handle}
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-label hover-underline transition-colors hover:text-accent"
                data-cursor="pointer"
              >
                {link.label}
              </a>
            ))}

            {/* Magnetic Contact CTA Button */}
            <a
              ref={contactBtnRef as unknown as React.RefObject<HTMLAnchorElement>}
              href="#contact"
              className="magnetic inline-flex items-center gap-2 border border-white/20 bg-surface px-4 py-2 rounded-full text-label hover:border-accent hover:text-accent transition-colors"
              data-cursor="pointer"
            >
              <span>GET IN TOUCH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-text hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            data-cursor="pointer"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#080808] z-[998] flex flex-col justify-between p-8 pt-28 opacity-0 pointer-events-none md:hidden"
      >
        <div className="flex flex-col gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-display-md text-text hover:text-accent transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between items-end">
          <div className="flex flex-col gap-1 text-mono text-muted text-xs">
            <span>{IDENTITY.location}</span>
            <span>{IDENTITY.status}</span>
          </div>
          <a
            href={`mailto:${IDENTITY.email}`}
            className="text-mono text-accent text-xs hover:underline"
          >
            {IDENTITY.email}
          </a>
        </div>
      </div>
    </>
  );
}
