"use client";

import React from "react";

const INSTAGRAM_URL = "https://www.instagram.com/bethenergydrink";

export default function Feed() {
  return (
    <section id="feed" className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">

        {/* CLUSTER SUPERIOR DE FOTOS */}
        <div className="relative h-[260px] sm:h-[280px] md:h-[260px]">

          <img
            src="/feed/IMG1.png"
            alt="Beth 1"
            className="absolute -left-6 top-6 sm:-left-4 sm:top-4 md:left-16 md:top-10
                       w-32 h-40 sm:w-40 sm:h-48 md:w-52 md:h-56
                       object-cover rotate-[-8deg]"
          />

          <img
            src="/feed/IMG2.png"
            alt="Beth 2"
            className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-8 md:top-12
                       w-28 h-32 sm:w-32 sm:h-36 md:w-40 md:h-44
                       object-cover rotate-[-14deg]"
          />

          <img
            src="/feed/IMG3.png"
            alt="Beth 3"
            className="absolute -right-6 top-10 sm:-right-4 sm:top-6 md:right-16 md:top-10
                       w-32 h-40 sm:w-40 sm:h-48 md:w-52 md:h-56
                       object-cover rotate-[10deg]"
          />
        </div>

        {/* HANDLE */}
        <div className="mt-4 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-emerald-800 uppercase">
            @BETHENERGYDRINK
          </p>
        </div>

        {/* TÍTULO */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-extrabold leading-tight text-emerald-700 uppercase">
            <span className="block">UMA DOSE DE</span>
            <span className="block">ENERGIA NO SEU</span>
            <span className="block">FEED.</span>
          </h2>
        </div>

        {/* BOTÕES */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 text-white transition hover:brightness-110"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-2 sm:px-8 sm:py-2.5 rounded-full bg-emerald-600 text-white text-sm sm:text-base font-semibold hover:brightness-110 transition"
          >
            ACESSAR
          </a>
        </div>

        {/* CLUSTER INFERIOR DE FOTOS */}
        <div className="relative mt-10 sm:mt-12 md:mt-14 h-[270px] sm:h-[300px] md:h-[260px]">

          <img
            src="/feed/IMG4.png"
            alt="Beth 4"
            className="absolute -left-8 bottom-4 sm:-left-4 sm:bottom-6 md:left-10 md:bottom-0
                       w-36 h-44 sm:w-40 sm:h-48 md:w-56 md:h-60
                       object-cover rotate-[-10deg]"
          />

          <img
            src="/feed/IMG5.png"
            alt="Beth 5"
            className="absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-8 md:bottom-2
                       w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-44
                       object-cover rotate-[6deg]"
          />

          <img
            src="/feed/IMG6.png"
            alt="Beth 6"
            className="absolute -right-8 bottom-0 sm:-right-4 sm:bottom-4 md:right-10 md:bottom-0
                       w-32 h-40 sm:w-40 sm:h-48 md:w-56 md:h-60
                       object-cover rotate-[10deg]"
          />
        </div>
      </div>
    </section>
  );
}
