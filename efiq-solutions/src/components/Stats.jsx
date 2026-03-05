import React from 'react'

const items = [
  { num: '40', label: 'Years of Experience', desc: 'Engineering radar systems for decades.' },
  { num: '360°', label: 'Coverage', desc: 'Full situational awareness integration.' },
  { num: '25+', label: 'Patents', desc: 'Innovations protecting our customers.' },
  { num: '35+', label: 'Countries', desc: 'Global deployments and support.' }
]

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {items.map((it, idx) => (
        <div className="bg-panel/50 border border-white/10 p-8 rounded-2xl hover:border-accent/40 hover:-translate-y-1 transition-all group" key={idx}>
          <div className="text-4xl font-black font-primary text-accent group-hover:scale-110 transition-transform origin-left">{it.num}</div>
          <div className="text-white font-bold mt-3 font-primary text-sm tracking-wide">{it.label}</div>
          <div className="text-muted text-xs mt-4 leading-relaxed font-secondary opacity-70">{it.desc}</div>
        </div>
      ))}
    </div>
  )
}
