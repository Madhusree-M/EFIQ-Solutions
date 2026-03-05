import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 pointer-events-none"></div>
      <div className="container relative z-10 flex flex-col md:flex-row gap-10 items-center py-20">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-primary text-white leading-tight italic">
            Innovative Technology.<br></br>Tangible Results.<br></br>Real Impact.
          </h1>
          <p className="text-muted text-lg max-w-[560px] mb-8 font-secondary">
            Empowering the future through cutting-edge solutions and transparent innovation
          </p>
          <div className="flex gap-4">
            <a className="px-6 py-2.5 bg-accent text-gray-900 font-bold rounded-lg transition-transform hover:scale-105" href="#products">
              Explore products
            </a>
            <a className="px-6 py-2.5 bg-transparent border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors" href="#markets">
              Markets we serve
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
