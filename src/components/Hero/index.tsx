"use client";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 639px)").matches
      : true
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if ("addEventListener" in mq) {
      mq.addEventListener("change", handler);
    } else {
      mq.addListener(handler);
    }
    return () => {
      if ("removeEventListener" in mq) {
        mq.removeEventListener("change", handler);
      } else {
        mq.removeListener(handler);
      }
    };
  }, []);

  return (
    <section className="w-full bg-emerald-500 text-white overflow-x-hidden">
      <div className="pt-4 sm:pt-6 lg:pt-8" />

      {/* espaço da animação */}
      <div className="px-4">
        <div
          className="relative w-full h-[56vh] sm:h-[46vh] md:h-[48vh] lg:h-[50vh] bg-transparent"
          aria-hidden
        >
          {/* Animação aqui */}
        </div>
      </div>

      <div className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Parágrafo container */}
          <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
            {isMobile ? (
              // MOBILE: 3 linhas fixas
              <p
                className="m-0 text-center"
                style={{
                  color: "#ffffff",
                  maxWidth: "320px",
                  fontSize: "15px",
                  lineHeight: 1.18,
                  margin: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  Cada dose é mais do que energia: é propósito,
                </span>
                <span
                  style={{
                    display: "block",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  acreditamos que evangelizar também é viver com
                </span>
                <span
                  style={{
                    display: "block",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  intensidade. BETH é a melhor aposta de Deus
                </span>
              </p>
            ) : (
              // DESKTOP: 3/4 linhas, alinhado à esquerda, mais embaixo
              <p
                className="hidden sm:block text-left text-xl leading-snug text-white/95"
                style={{
                  maxWidth: "44rem",
                  margin: 0,
                }}
              >
                <span className="block mt-10 md:mt-16 lg:mt-20">
                  Cada dose é mais do que energia: é propósito, acreditamos
                </span>
                <span className="block">
                  que evangelizar também é viver com intensidade.
                </span>
                <span className="block">BETH é a melhor aposta de Deus</span>
              </p>
            )}
          </div>

          {/* Controls container */}
          <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-end">
            {isMobile ? (
              <button
                className="group bg-white text-black rounded-full px-6 py-3 flex items-center gap-4 transform transition-transform hover:-translate-y-1"
                aria-label="Deslize para baixo"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollBy({
                      top: window.innerHeight * 0.95,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black relative border-2 border-black">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 5v14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 12l7 7 7-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-black">Deslize para baixo</span>
              </button>
            ) : (
              <button
                className="hidden sm:flex items-center gap-4 bg-white text-black rounded-full px-6 py-3 mt-10 md:mt-16 lg:mt-20"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollBy({
                      top: window.innerHeight * 0.95,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label="Scrolle para baixo"
              >
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black relative border-2 border-black">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <rect
                      x="6"
                      y="3"
                      width="12"
                      height="18"
                      rx="6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 7v3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-black">Scrolle para baixo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
