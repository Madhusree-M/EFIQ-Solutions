import React from 'react'

const markets = [
  'Defence',
  'Maritime',
  'Aviation',
  'Critical Infrastructure',
  'Industrial',
  'Security'
]

export default function Markets() {
  return (
    <div id="markets" className="py-8">
      <h2 className="text-3xl font-bold font-primary text-white mb-4">Markets we serve</h2>
      <p className="text-muted font-secondary text-sm mb-10 max-w-2xl opacity-70">We deliver tailored radar solutions across multiple markets — combining rugged hardware with modern signal processing.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {markets.map((m, i) => (
          <div className="flex items-center gap-4 bg-panel/30 border border-white/5 p-4 rounded-xl hover:bg-panel transition-colors" key={i}>
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-primary font-bold text-accent text-sm">{m[0]}</div>
            <div className="text-white font-secondary font-semibold text-sm">{m}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
