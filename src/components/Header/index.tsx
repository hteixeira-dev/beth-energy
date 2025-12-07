'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full z-50">
      {/* mobile */}
      <div className="flex items-center justify-between px-4 py-5 sm:hidden">
        <div className="flex-1 text-center">
          <Link href="/" aria-label="Logo" className="inline-block">
            <img
              src="/header/logo.png"
              alt="Beth Logo"
              className="w-12 h-12 object-contain block mx-auto mt-1"
            />
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="ml-auto"
        >
          {/* Hamburger SVG — 4 barras com larguras diferentes (ref: uploaded image) */}
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2.5" y="3"  width="19" height="1.8" rx="0.9" fill="currentColor" />
            <rect x="5"   y="8.2" width="14" height="1.8" rx="0.9" fill="currentColor" />
            <rect x="2.5" y="13.4" width="19" height="1.8" rx="0.9" fill="currentColor" />
            <rect x="5"   y="18.6" width="14" height="1.8" rx="0.9" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" aria-label="Logo" className="flex items-center gap-4">
            <img src="/header/logo.png" alt="Beth Logo" className="w-14 h-14 object-contain ml-6" />
          </Link>

          {/* traço longo */}
          <div className="h-px bg-white/30 flex-grow mx-8" />
        </div>

        <nav className="flex items-center gap-8 text-sm text-white/90 pr-8">
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/sobre" className="hover:underline">SOBRE</Link>
          <Link href="/depoimentos" className="hover:underline">DEPOIMENTOS</Link>
          <Link href="/carrinho" className="hover:underline">CARRINHO</Link>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-64 bg-white p-6 shadow-lg">
            <button aria-label="Fechar" onClick={() => setOpen(false)} className="mb-6">
              <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <nav className="flex flex-col gap-4 text-slate-800">
              <Link href="/" onClick={() => setOpen(false)} className="py-2">HOME</Link>
              <Link href="/sobre" onClick={() => setOpen(false)} className="py-2">SOBRE</Link>
              <Link href="/depoimentos" onClick={() => setOpen(false)} className="py-2">DEPOIMENTOS</Link>
              <Link href="/carrinho" onClick={() => setOpen(false)} className="py-2">CARRINHO</Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
