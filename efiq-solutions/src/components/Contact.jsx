import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold font-primary text-white leading-tight underline decoration-accent decoration-4 underline-offset-8">Get in Touch with our Expertise</h3>
        <p className="text-muted font-secondary text-lg opacity-80">Reach out to discuss requirements, trials or custom integrations.</p>
        <ul className="space-y-4 font-secondary text-white/70">
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent" /> info@efiq-solutions.com</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent" /> +1 (555) 123-4567</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent" /> Worldwide support</li>
        </ul>
      </div>

      <aside className="bg-panel/50 p-8 rounded-3xl border border-white/10 shadow-xl shadow-black">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-primary font-bold uppercase tracking-widest text-muted">Name</label>
            <input placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-primary font-bold uppercase tracking-widest text-muted">Email</label>
            <input placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-primary font-bold uppercase tracking-widest text-muted">Message</label>
            <textarea placeholder="Tell us about your project" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors min-h-[120px]" />
          </div>
          <button className="w-full py-4 bg-accent text-gray-900 font-black font-primary tracking-widest uppercase rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-accent/20" type="submit">Send message</button>
        </form>
      </aside>
    </div>
  )
}
