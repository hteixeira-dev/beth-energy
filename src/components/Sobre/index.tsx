"use client";

import React from "react";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white w-full pt-10 pb-12 mt-10 sm:pt-24 sm:pb-24 sm:mt-40 lg:mt-48"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* título */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-[0.12em] text-neutral-900 leading-snug">
            BETH NÃO É SÓ UM ENERGÉTICO.
            <br className="hidden sm:block" />
            <span className="sm:inline block">
              {" "}
              É PROPÓSITO EM FORMA DE LATA.
            </span>
          </h2>

          {/* texto scrolle – desktop only */}
          <p className="hidden sm:block mt-3 text-sm text-neutral-700">
            (Scrolle para baixo)
          </p>

          {/* espaço da animação */}
          <div className="mt-6 sm:mt-10 w-full flex items-center justify-center">
            <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
              {/* animação */}
            </div>
          </div>
        </div>

        {/* cards mobile */}
        <div className="mt-10 space-y-14 sm:hidden">
          {/* Card 1 */}
          <div className="relative">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-md w-48 text-center">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-white uppercase leading-snug">
                DE ONDE VEM
                <br />
                O NOME BETHEL?
              </span>
            </div>

            <div className="pt-10 pb-8 bg-emerald-600 rounded-2xl px-6 text-center shadow-lg min-h-[260px] flex items-center justify-center">
              <p className="text-sm font-semibold leading-relaxed text-white">
                O nome vem de Bethel, que significa &quot;casa de Deus&quot;: o
                lugar onde tudo começa, onde a presença d’Ele traz força, foco e
                direção.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-md w-48 text-center">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-white uppercase leading-snug">
                E O &quot;X&quot; NA
                <br />
                NOSSA LOGO?
              </span>
            </div>

            <div className="pt-10 pb-8 bg-emerald-600 rounded-2xl px-6 text-center shadow-lg min-h-[260px] flex items-center justify-center">
              <p className="text-sm font-semibold leading-relaxed text-white">
                Desde sempre, o X marcou aquilo que vale a pena, o ponto onde se
                guarda o que é precioso. Na nossa marca, ele mantém esse
                sentido: um lembrete sutil de que, para Deus, o verdadeiro valor
                sempre foi você.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-md w-48 text-center">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-white uppercase leading-snug">
                NOSSA BASE
                <br />
                BÍBLICA
              </span>
            </div>

            <div className="pt-10 pb-8 bg-emerald-600 rounded-2xl px-6 text-center shadow-lg min-h-[260px] flex items-center justify-center">
              <p className="text-sm font-semibold leading-relaxed text-white">
                &quot;Não fostes vós que me escolhestes, mas eu vos escolhi.&quot;{" "}
                – João 15:16
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
