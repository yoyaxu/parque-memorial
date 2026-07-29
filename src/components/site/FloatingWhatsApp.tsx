"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbanos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.05 31.314l6.156-1.966A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.824 32 16S24.826 0 16.004 0zm9.32 22.604c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.726-7.96-7.034-.224-.308-1.9-2.528-1.9-4.822 0-2.294 1.21-3.42 1.674-3.898.364-.372.966-.542 1.532-.542.186 0 .354.01.504.05.442.14 1.45.532 1.852 1.864.224.742.262 1.42.196 1.952-.07.554.082.93.376 1.132.294.21.658.176.96-.04.45-.318 1.142-1.32 1.45-1.81.214-.348.126-.74-.176-1.04-.3-.294-.722-.348-1.04-.176-.176.094-.388.06-.532-.082-.144-.146-.176-.36-.06-.532.276-.46.864-1.34 1.476-1.79.61-.45 1.396-.6 2.182-.43.786.176 1.476.65 1.94 1.336.466.686.66 1.526.542 2.354-.118.828-.542 1.566-1.196 2.082-.348.276-.4.79-.124 1.138.276.348.79.4 1.138.124.954-.754 1.594-1.81 1.79-2.966.196-1.156-.064-2.326-.736-3.296-.672-.97-1.65-1.626-2.78-1.872-1.13-.246-2.29-.054-3.296.55-.998.6-1.74 1.55-2.084 2.666-.176.566-.07 1.182.276 1.65.346.466.892.746 1.482.746.346 0 .682-.094.976-.276z" />
      </svg>
      <span
        className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold"
        aria-hidden="true"
      >
        1
      </span>
    </a>
  );
}
