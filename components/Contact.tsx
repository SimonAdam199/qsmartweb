"use client"
import { useState } from 'react'
import SectionIcon from './SectionIcon'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    const body: any = {}
    fd.forEach((v, k) => body[k] = v)

    try {
      // track submission
      // @ts-ignore
      if (typeof window !== 'undefined' && window.__qs_track) window.__qs_track('cta_submit', { location: 'contact' })

      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (res.ok) {
  setStatus('sent')
  // clear form inputs for clarity
  e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
  <div className="max-w-5xl p-8 mx-auto">
  <h2 className="text-3xl font-bold text-center text-white" id="contact"><span className="section-icon mr-3 inline-block align-middle"><SectionIcon name="contact" /></span>Contact us to explore automation</h2>

  <p className="text-lg text-white text-center mb-16 mt-6">Tell us about a process you want to improve — we&apos;ll show what&apos;s possible with AI-led automation, Temporal workflows, and enterprise Azure deployments and propose a pragmatic next step.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <aside className="order-last md:order-first p-6 rounded-lg bg-white/95 border border-slate-100">
            <h3 className="font-semibold text-slate-900">Contact info</h3>
          <p className="mt-2 text-slate-700">Let&apos;s make something awesome together!</p>

          <address className="not-italic mt-4 text-sm text-slate-700">
            <div className="text-slate-900">Q-smart s.r.o.</div>
            <div>Michal na Ostrove 503</div>
            <div>930 35 Michal na Ostrove</div>
            <div>Slovakia</div>
          </address>

          <div className="mt-4 text-sm text-slate-800 space-y-3">
            <div className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 5h4l2 5-2 2 4 4 2-2 5 2v4H3V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><a href="tel:+421911279629" className="text-slate-900">+421 911 279 629</a></div>
            <div className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><a href="mailto:info@q-smart.eu" className="text-slate-900">info@q-smart.eu</a></div>
            <div className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><a href="https://www.q-smart.eu/" className="text-slate-900" target="_blank" rel="noreferrer">www.q-smart.eu</a></div>
          </div>
        </aside>

        <div>
          {status === 'sent' ? (
            <div className="mt-2 p-4 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-800">
              Thank you — your message has been received. We&apos;ll review your details and reach out to discuss next steps (pilot, proof-of-concept, or deployment).
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="sr-only">Name</label>
          <input required name="name" placeholder="Your name" className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="sr-only">Company</label>
          <input required name="company" placeholder="Company" className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="sr-only">Work email</label>
          <input required type="email" name="email" placeholder="Work email" className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="sr-only">Role</label>
          <select required name="role" className="w-full border rounded-md px-3 py-2">
            <option value="">Your role</option>
            <option>Founder / CEO</option>
            <option>CTO / Head of Engineering</option>
            <option>Ops / Head of Operations</option>
            <option>VP Product / Growth</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="sr-only">Estimated annual impact</label>
          <select name="impact" className="w-full border rounded-md px-3 py-2">
            <option value="">Estimated annual impact</option>
            <option>Under $50k</option>
            <option>$50k–$250k</option>
            <option>$250k–$1M</option>
            <option>$1M+</option>
          </select>
        </div>

        <div>
          <label className="sr-only">Decision timeline</label>
          <select name="timeline" className="w-full border rounded-md px-3 py-2">
            <option value="">Decision timeline</option>
            <option>Within 30 days</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>6+ months</option>
          </select>
        </div>

        <div>
          <label className="sr-only">Brief description</label>
          <textarea name="notes" placeholder="Briefly describe the process or pain (what task, who spends time, and the impact)" className="w-full border rounded-md px-3 py-2" rows={4} />
        </div>

                <div className="flex flex-col items-start gap-3">
                  <button type="submit" disabled={status==='sending'} className="px-6 py-3 bg-accent text-white rounded-md">{status==='sending' ? 'Sending…' : 'Contact us'}</button>
                </div>
              </form>
          )}
        </div>

        
      </div>
    </div>
  )
}
