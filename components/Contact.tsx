"use client"
import { useState } from 'react'

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
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-3xl p-8 text-center">
  <h2 className="text-3xl font-bold">Book a free automation audit</h2>

  <p className="mt-4 text-lg text-slate-700">A focused 30-minute executive audit that surfaces high-value automation opportunities and delivers a prioritized, executable plan with operational handover guidance.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
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

        <div className="flex flex-col items-center gap-3">
          <button type="submit" disabled={status==='sending' || status==='sent'} className="px-6 py-3 bg-accent text-white rounded-md">{status==='sent' ? 'Received — we will reach out' : 'Book free audit'}</button>
          <a className="text-sm text-slate-600" href="https://calendly.com/your-company/automation-audit" target="_blank" rel="noreferrer">Or book instantly (calendar)</a>
        </div>
      </form>

      <p className="mt-4 text-sm text-slate-500">Prefer email? Reach us at hello@q-smart.com — we only reply to qualified inquiries.</p>
    </div>
  )
}
