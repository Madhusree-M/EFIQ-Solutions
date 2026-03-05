import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="text-2xl font-black font-primary text-white tracking-widest">EFIQ</div>
        <div className="text-muted font-secondary text-[10px] tracking-widest opacity-50 uppercase">© {new Date().getFullYear()} EFIQ Solutions — Precision in every pulse</div>
      </div>
    </footer>
  )
}
