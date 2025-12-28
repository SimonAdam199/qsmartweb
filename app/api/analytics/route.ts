import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const analyticsFile = path.join(dataDir, 'analytics.json')

async function ensureData() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  if (!fs.existsSync(analyticsFile)) fs.writeFileSync(analyticsFile, '[]')
}

export async function POST(req: Request) {
  await ensureData()
  try {
    const body = await req.json()
    const existing = JSON.parse(fs.readFileSync(analyticsFile, 'utf8') || '[]')
    const ev = { id: Date.now(), createdAt: new Date().toISOString(), ...body }
    existing.push(ev)
    fs.writeFileSync(analyticsFile, JSON.stringify(existing, null, 2))
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
