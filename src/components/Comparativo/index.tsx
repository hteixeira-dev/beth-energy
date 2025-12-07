"use client";

import React from "react";

export default function Comparativo() {
  return (
    <section
      id="comparativo"
      className="relative w-full bg-emerald-600 text-white pt-20 pb-24 sm:pt-24 sm:pb-28 md:pt-28 lg:pt-32"
    >
      {/* selo X entre sessões */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg">
        <img
          src="/comparativo/selo-x.png"
          alt="Selo Beth Energy"
          className="w-12 h-12 object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        {/* GRID PRINCIPAL */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* ESQUERDA – ANIMAÇÃO + (FRASE SÓ NO DESKTOP) */}
          <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 flex flex-col items-center md:items-start">
            {/* DIV DA ANIMAÇÃO – AUMENTADA */}
            <div
              className="
                w-[320px] sm:w-[360px] md:w-[380px] lg:w-[420px]
                h-[440px] sm:h-[460px] md:h-[480px] lg:h-[520px]
                bg-white rounded-3xl shadow-2xl flex items-center justify-center
              "
            >
              {/* animação da lata entra aqui */}
            </div>

            {/* FRASE – APENAS NO DESKTOP, MAIOR, CENTRALIZADA E UM POUCO MAIS À DIREITA */}
            <div className="hidden md:block mt-8 md:self-center md:translate-x-4">
              <div className="w-90 lg:w-100 h-35">
                <img
                  src="/comparativo/frase-taurina.png"
                  alt="Menos taurina, menos açúcar e mais impacto!"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* DIREITA – TÍTULOS + TABELA */}
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            {/* TÍTULOS – AUMENTADOS NO MOBILE */}
            <div>
              <h2 className="text-[26px] sm:text-[28px] md:text-3xl font-semibold leading-tight">
                Mais para você.
              </h2>
              <h3 className="text-[26px] sm:text-[28px] md:text-3xl font-semibold leading-tight mt-1">
                Veja a diferença.
              </h3>
            </div>

            {/* TABELA DESKTOP */}
            <div className="hidden md:block mt-6">
              <img
                src="/comparativo/tabela.png"
                alt="Tabela comparativa Beth x energético comum"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* TABELA MOBILE – MENOR, PROPORCIONAL, SEM DISTORÇÃO */}
            <div className="mt-8 md:hidden flex justify-center">
              <img
                src="/comparativo/tabela-mobile.png"
                alt="Tabela comparativa Beth x energético comum (mobile)"
                className="w-[78%] sm:w-[70%] h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
