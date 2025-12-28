import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const leadsFile = path.join(dataDir, 'leads.json')

async function ensureDataDir() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  if (!fs.existsSync(leadsFile)) fs.writeFileSync(leadsFile, '[]')
}

export async function POST(req: Request) {
  await ensureDataDir()
  try {
    const body = await req.json()
    const existing = JSON.parse(fs.readFileSync(leadsFile, 'utf8') || '[]')
    const item = { id: Date.now(), createdAt: new Date().toISOString(), ...body }
    existing.push(item)
    fs.writeFileSync(leadsFile, JSON.stringify(existing, null, 2))
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
