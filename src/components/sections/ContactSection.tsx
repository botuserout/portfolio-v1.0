"use client";

import { useState } from "react";
import { IDENTITY, SECTION_IDS, SOCIAL_LINKS } from "@/lib/constants";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { PearlButton } from "@/components/ui/pearl-button";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyBtnRef = useMagneticEffect(12);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id={SECTION_IDS.contact}
      className="w-full section-padding bg-[#080808] relative z-10 border-t border-white/10"
    >
      <div className="container-main flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-label border-b border-white/10 pb-6">
          <span>08</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>CONTACT & COLLABORATION</span>
        </div>

        {/* Call to Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8 flex flex-col gap-6">
            <span className="text-mono text-xs text-accent uppercase tracking-widest">
              [ {IDENTITY.status} ]
            </span>
            <h2 className="text-display-xl font-bold uppercase text-text leading-tight">
              HAVE AN IDEA OR ROLE? <br />
              <span className="text-accent">LET&apos;S TALK.</span>
            </h2>
            <p className="text-body-lg text-muted max-w-xl">
              I am actively looking for full-stack engineering, AI/ML development,
              or product roles. Feel free to reach out via email or connect on social channels.
            </p>
          </div>

          {/* Interactive Copy & Direct Email Buttons */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4">
            <button
              ref={copyBtnRef as unknown as React.RefObject<HTMLButtonElement>}
              onClick={handleCopyEmail}
              className="magnetic group w-full sm:w-auto bg-surface border border-white/20 hover:border-accent p-6 sm:p-8 rounded-xl flex flex-col gap-2 transition-all duration-300 text-left"
              data-cursor="pointer"
            >
              <span className="text-mono text-xs text-muted group-hover:text-accent transition-colors">
                {copied ? "SUCCESS ✓" : "CLICK TO COPY EMAIL"}
              </span>
              <span className="text-display-md font-bold text-text group-hover:text-accent transition-colors">
                {copied ? "COPIED TO CLIPBOARD!" : IDENTITY.email}
              </span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <PearlButton
                href={`mailto:${IDENTITY.email}`}
                size="md"
                label="DIRECT EMAIL"
                data-cursor="pointer"
              />
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-12 gap-6">
          <div className="flex flex-wrap gap-8 text-mono text-xs">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : "_self"}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="text-muted hover:text-accent hover-underline transition-colors uppercase"
                data-cursor="pointer"
              >
                {social.label} {social.external ? "↗" : ""}
              </a>
            ))}
          </div>

          <div className="text-mono text-xs text-dim">
            <span>PHONE: {IDENTITY.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
