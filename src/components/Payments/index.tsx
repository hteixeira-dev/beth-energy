"use client";
import React from "react";

const PAYMENT_URL = "#";

const payments = [
  { id: "amex", src: "/pagamentos/amex.png", alt: "American Express" },
  { id: "mastercard", src: "/pagamentos/mastercard.png", alt: "Mastercard" },
  { id: "gpay", src: "/pagamentos/gpay.png", alt: "Google Pay" },
  { id: "applepay", src: "/pagamentos/applepay.png", alt: "Apple Pay" },
  { id: "paypal", src: "/pagamentos/paypal.png", alt: "PayPal" },
  { id: "visa", src: "/pagamentos/visa.png", alt: "Visa" },
  { id: "elo", src: "/pagamentos/elo.png", alt: "Elo" },
];

export default function Payments() {
  return (
    <section
      id="pagamentos"
      className="w-full bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        
        {/* TÍTULO */}
        <div className="text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-tight text-emerald-700">
            <span className="block">Não fique só na</span>
            <span className="block">vontade, nós aceitamos:</span>
          </h2>
        </div>

        {/* BOTÕES */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={PAYMENT_URL}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-600 text-white text-lg shadow-md transition-colors duration-200 hover:brightness-110"
          >
            →
          </a>

          <a
            href={PAYMENT_URL}
            className="px-7 py-2 sm:px-8 sm:py-2.5 rounded-full bg-emerald-600 text-white text-sm sm:text-base font-semibold shadow-md transition-colors duration-200 hover:brightness-110"
          >
            ADQUIRA JÁ
          </a>
        </div>

        {/* MOBILE — COBRINHA */}
        <div className="mt-10 md:hidden flex flex-col items-center gap-8">
          {payments.map((payment, index) => {
            const offset = index % 2 === 0 ? "-translate-x-6" : "translate-x-6";

            return (
              <div
                key={payment.id}
                className={`w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden ${offset}`}
              >
                <img
                  src={payment.src}
                  alt={payment.alt}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* DESKTOP — COLAR EM V COM IMAGEM RETA */}
        <div className="hidden md:block mt-14">
          <div className="flex items-center justify-between gap-10">

            {payments.map((payment, index) => {
              // movimento vertical em V
              const yOffsets = [
                "-translate-y-24",
                "-translate-y-12",
                "-translate-y-6",
                "translate-y-10",
                "-translate-y-6",
                "-translate-y-12",
                "-translate-y-24",
              ];

              // inclinação leve apenas no posicionamento da wrapper
              const rotations = [
                "-rotate-[24deg]",
                "-rotate-[12deg]",
                "-rotate-[6deg]",
                "rotate-0",
                "rotate-[6deg]",
                "rotate-[12deg]",
                "rotate-[24deg]",
              ];

              return (
                <div
                  key={payment.id}
                  className={`${yOffsets[index]} ${rotations[index]} flex items-center justify-center`}
                >
                  {/* bolinha branca fixa e reta */}
                  <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src={payment.src}
                      alt={payment.alt}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
