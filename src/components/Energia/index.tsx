"use client";

import React, { useState } from "react";

const videos = [
  { id: 0, src: "/videos/energia-01.mp4", alt: "Beth Energy vídeo 1" },
  { id: 1, src: "/videos/energia-02.mp4", alt: "Beth Energy vídeo 2" },
  { id: 2, src: "/videos/energia-03.mp4", alt: "Beth Energy vídeo 3" },
];

export default function Energia() {
  const [activeVideo, setActiveVideo] = useState<number>(1);

  const getZ = (index: number) => (index === activeVideo ? 30 : 20 + index);
  const scaleClass = (index: number) =>
    index === activeVideo ? "scale-105" : "scale-100";

  return (
    <section
      id="energia"
      className="w-full bg-white pt-32 pb-16 sm:pt-40 sm:pb-24 xl:pt-48"
      // quando quiser usar o fundo:
      // style={{
      //   backgroundImage: "url(/energia/fundo.png)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "top center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* TÍTULOS */}
        <div className="text-center flex flex-col items-center">
          {/* MOBILE/TABLET ATÉ <1280px: com quebras de linha */}
          <div className="xl:hidden">
            <h2 className="text-[20px] font-extrabold tracking-[0.16em] text-emerald-900 uppercase leading-tight">
              <span className="block">VOCÊ MERECE</span>
              <span className="block">MAIS ENERGIA.</span>
            </h2>

            <h3 className="mt-2 text-[20px] font-extrabold tracking-[0.16em] text-emerald-900 uppercase leading-tight">
              <span className="block">VOCÊ MERECE</span>
              <span className="block">O MELHOR:</span>
            </h3>
          </div>

          {/* DESKTOP >= 1280px: sem quebra dentro da frase */}
          <div className="hidden xl:block">
            <h2 className="text-2xl xl:text-[30px] font-extrabold tracking-[0.16em] text-emerald-900 uppercase leading-tight">
              VOCÊ MERECE MAIS ENERGIA.
            </h2>

            <h3 className="mt-2 text-2xl xl:text-[30px] font-extrabold tracking-[0.16em] text-emerald-900 uppercase leading-tight">
              VOCÊ MERECE O MELHOR:
            </h3>
          </div>

          <p className="mt-4 text-base sm:text-lg font-semibold tracking-[0.3em] text-emerald-600 uppercase">
            X BETH ENERGY X
          </p>
        </div>

        {/* ESPAÇO + LAYOUT: MOBILE COLUNA / DESKTOP DUAS COLUNAS (APENAS XL+) */}
        <div className="mt-12 xl:mt-20 flex flex-col xl:flex-row xl:items-start xl:gap-14">
          {/* COLUNA ESQUERDA – VÍDEOS */}
          <div className="w-full xl:w-[55%] flex justify-center xl:justify-start">
            {/* MOBILE / TABLET / IPAD AIR: stack de vídeos */}
            <div className="relative w-full max-w-xs h-[1040px] xl:hidden">
              {videos.map((video, index) => {
                const positions = [
                  // topo — um pouco mais afastado do meio
                  "top-0 left-4 rotate-[6deg]",
                  // meio
                  "top-56 right-0 rotate-[-4deg]",
                  // baixo — mais grudado no do meio
                  "bottom-12 left-8 rotate-[8deg]",
                ];

                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideo(index)}
                    className={`absolute ${positions[index]} w-[90%] h-[26rem] bg-white rounded-3xl shadow-2xl p-3 transition-all duration-300 ${scaleClass(
                      index
                    )}`}
                    style={{ zIndex: getZ(index) }}
                  >
                    <video
                      src={video.src}
                      className="w-full h-full rounded-2xl object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  </button>
                );
              })}
            </div>

            {/* DESKTOP >= 1280px: 3 vídeos sobrepostos à ESQUERDA */}
            <div className="hidden xl:block relative w-full h-[380px] xl:h-[430px]">
              {videos.map((video, index) => {
                const positions = [
                  // esquerda
                  "absolute left-0 bottom-10 rotate-[-12deg]",
                  // centro em destaque
                  "absolute left-40 bottom-6 rotate-[4deg]",
                  // mais à direita, ainda na metade esquerda
                  "absolute left-80 bottom-12 rotate-[10deg]",
                ];

                const sizes = [
                  "w-48 h-[19rem] xl:w-56 xl:h-[21rem]",
                  "w-56 h-[21rem] xl:w-64 xl:h-[23rem]",
                  "w-48 h-[19rem] xl:w-56 xl:h-[21rem]",
                ];

                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideo(index)}
                    className={`${positions[index]} ${sizes[index]} bg-white rounded-3xl shadow-2xl p-3 transition-all duration-300 ${scaleClass(
                      index
                    )}`}
                    style={{ zIndex: getZ(index) }}
                  >
                    <video
                      src={video.src}
                      className="w-full h-full rounded-2xl object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLUNA DIREITA – CONTEÚDO */}
          <div className="w-full xl:w-[45%] mt-12 xl:mt-0 flex flex-col">
            {/* imagem frase – MOBILE/TABLET/IPAD: logo após os vídeos */}
            <div className="xl:hidden mb-6">
              <div className="relative w-64 h-12 mx-auto">
                {/* imagem "Beth a melhor aposta de Deus" */}
                {/* <Image src="/energia/frase.png" alt="Beth a melhor aposta de Deus" fill className="object-contain" /> */}
              </div>
            </div>

            <h4 className="text-base sm:text-lg md:text-xl font-extrabold tracking-[0.12em] text-emerald-900 uppercase leading-snug">
              Criamos um energético que entrega performance sem exageros: sabor
              refinado, fórmula limpa e a dose ideal de cafeína para você se
              manter disposto, focado e equilibrado.
            </h4>

            <p className="mt-4 text-sm sm:text-[15px] md:text-base leading-relaxed text-emerald-900/80">
              Com menos cafeína que um energético comum, BETH oferece energia
              estável, sem picos artificiais nem quedas bruscas, unindo
              tecnologia nutricional e ingredientes selecionados.
            </p>

            <p className="mt-3 text-sm sm:text-[15px] md:text-base leading-relaxed text-emerald-900/80">
              É concentração, clareza e disposição na medida certa — uma
              experiência que começa na lata e se reflete na sua performance
              diária.
            </p>

            {/* botões + avaliações */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-700 text-emerald-700 text-lg font-semibold"
              >
                →
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-emerald-700 text-white text-xs sm:text-sm font-semibold tracking-wide"
              >
                ADQUIRA JÁ
              </button>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-emerald-800">
                <span className="text-base">★★★★★</span>
                <span className="font-semibold">5.0</span>
                <button
                  type="button"
                  className="underline decoration-emerald-700/70 decoration-1 underline-offset-2"
                >
                  3225 Avaliações
                </button>
              </div>
            </div>

            {/* imagem frase – DESKTOP >= 1280px: embaixo, à direita */}
            <div className="hidden xl:flex mt-8 justify-end">
              <div className="relative w-72 h-12">
                {/* <Image src="/energia/frase.png" alt="Beth a melhor aposta de Deus" fill className="object-contain" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
