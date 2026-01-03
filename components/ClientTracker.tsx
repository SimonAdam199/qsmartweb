'use client'

import { useCallback, useEffect } from 'react'

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

  useEffect(() => {
    // expose a simple global for inline handlers after mount
    // @ts-ignore
    window.__qs_track = sendEvent
    return () => {
      // clean up global on unmount
      // @ts-ignore
      try { delete (window as any).__qs_track } catch (e) {}
    }
  }, [sendEvent])

  return null
}
