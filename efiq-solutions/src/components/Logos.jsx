import React from 'react'

const logos = ['US Gov', 'Airbus', 'Thales', 'Diehl', 'Leonardo']

export default function Logos() {
  return (
    <section className="py-12 overflow-hidden border-y border-white/5">
      <div className="container">
        <div className="flex flex-wrap gap-12 items-center justify-center opacity-40 grayscale hover:opacity-80 transition-all duration-700">
          {logos.map((l, i) => (
            <div className="flex items-center justify-center p-2" key={i} aria-hidden>
              <div className="text-muted font-primary text-[10px] tracking-[0.3em] uppercase border border-white/10 px-4 py-2 rounded font-semibold whitespace-nowrap">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
