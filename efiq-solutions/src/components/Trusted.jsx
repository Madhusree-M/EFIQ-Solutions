import React from 'react'

export default function Trusted() {
  return (
    <div className="py-8">
      <h3 className="text-lg font-primary text-white mb-6 uppercase tracking-tighter opacity-60">Trusted by the most innovative teams</h3>
      <div className="bg-panel border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-10 items-center overflow-hidden">
        <div className="w-full md:w-72 aspect-video bg-gradient-to-r from-white/5 to-white/10 rounded-lg flex items-center justify-center relative group overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-muted/10 font-black text-4xl font-primary italic">MEDIA</div>
        </div>
        <div className="flex flex-wrap gap-4">
          {['PUMA', 'Team', 'Client'].map(name => (
            <div className="bg-white/5 px-6 py-3 rounded-xl font-primary font-bold text-[10px] tracking-[0.2em] text-muted/60 hover:text-accent transition-colors border border-white/5" key={name}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
