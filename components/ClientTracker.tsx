'use client'

import { useCallback } from 'react'

export default function ClientTracker() {
  const sendEvent = useCallback(async (type: string, payload: any = {}) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, payload })
      })
    } catch (e) {
      // swallow errors silently
    }
  }, [])

  // expose a simple global for inline handlers
  // @ts-ignore
  if (typeof window !== 'undefined') window.__qs_track = sendEvent

  return null
}
