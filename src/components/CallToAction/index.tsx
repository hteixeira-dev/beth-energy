"use client";

import React from "react";

export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="w-full bg-emerald-600 text-white pt-20 pb-24 sm:pt-24 sm:pb-28 md:pt-28 lg:pt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* TÍTULOS */}
        <div className="text-center flex flex-col items-center">
          {/* MOBILE */}
          <div className="md:hidden">
            <h2 className="text-[28px] sm:text-[32px] font-extrabold tracking-[0.16em] uppercase leading-tight">
              <span className="block">VOCÊ MERECE</span>
              <span className="block">MAIS ENERGIA.</span>
            </h2>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
            <h2
              className="
                text-[36px] lg:text-[44px]
                font-extrabold uppercase leading-tight
                tracking-[0.12em]
                whitespace-nowrap inline-block
              "
            >
              VOCÊ MERECE MAIS ENERGIA.
            </h2>
            <h3
              className="
                mt-2
                text-[36px] lg:text-[44px]
                font-extrabold uppercase leading-tight
                tracking-[0.12em]
                whitespace-nowrap inline-block
              "
            >
              VOCÊ MERECE O MELHOR:
            </h3>
          </div>

          {/* X BETH ENERGY X */}
          <p
            className="
              mt-6
              text-[28px] sm:text-[32px]
              md:text-[36px] lg:text-[44px]
              font-extrabold uppercase
              tracking-[0.25em]
              md:tracking-[0.05em]
              whitespace-nowrap inline-block
            "
          >
            X <span className="text-black">BETH ENERGY</span> X
          </p>
        </div>

        {/* BOTÕES */}
        <div className="mt-8 flex items-center justify-center gap-5">
          {/* botão seta */}
          <button
            type="button"
            className="
              flex items-center justify-center
              w-12 h-12 sm:w-14 sm:h-14
              rounded-full bg-white text-black text-xl
              shadow-md cursor-pointer
              transition-colors duration-300 hover:bg-neutral-100
            "
          >
            →
          </button>

          {/* botão ADQUIRA JÁ */}
          <button
            type="button"
            className="
              px-9 py-3 sm:px-10 sm:py-3.5
              rounded-full bg-white text-black
              text-base sm:text-lg font-semibold
              shadow-md cursor-pointer
              transition-colors duration-300 hover:bg-neutral-100
            "
          >
            ADQUIRA JÁ
          </button>
        </div>

        {/* ESPAÇO PARA ANIMAÇÃO / IMAGEM */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <div
            className="
              w-full
              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px]
              flex items-center justify-center
            "
          >
            {/* futura animação / imagem das latas */}
          </div>
        </div>
      </div>
    </section>
  );
}
