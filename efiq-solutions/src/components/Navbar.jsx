import React from 'react'

export default function Header() {
  return (
    <header className="m-4 px-20 py-6 bg-gray-900 sticky flex justify-between items-center top-0 z-40 backdrop-blur-md border-b border-white/5">
      <div className="text-2xl font-black tracking-widest text-white font-primary italic underline decoration-accent decoration-2 underline-offset-8">EFIQ Solutions</div>
      <div className="flex items-center gap-8">
        <a href="#products" className="text-gray-300 font-secondary text-sm font-medium transition-colors hover:text-accent">Solutions</a>
        <a href="#products" className="text-gray-300 font-secondary text-sm font-medium transition-colors hover:text-accent">Products</a>
        <a href="#markets" className="text-gray-300 font-secondary text-sm font-medium transition-colors hover:text-accent">Success Stories</a>
        <a href="#markets" className="text-gray-300 font-secondary text-sm font-medium transition-colors hover:text-accent">Insights</a>
        <a href="#markets" className="text-gray-300 font-secondary text-sm font-medium transition-colors hover:text-accent">Company</a>
      </div>
      <a href="#contact" className=" px-5 py-2 text-xs font-bold font-primary tracking-widest border border-accent/20 rounded-md bg-accent text-black text-gray-900 transition-all">TALK TO EXPERT</a>
    </header>
  )
}
