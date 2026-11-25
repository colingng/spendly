import { useEffect, useState } from 'react'

type Status = 'checking' | 'connected' | 'offline'

export default function App() {
  const [status, setStatus] = useState<Status>('checking')

  // Runs once when the page loads: ask the backend if it's alive.
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status === 'ok' ? 'connected' : 'offline'))
      .catch(() => setStatus('offline'))
  }, [])

  const label = {
    checking: '⏳ Checking backend…',
    connected: '✅ Backend connected',
    offline: '❌ Backend offline — is it running?',
  }[status]

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Spendly</h1>
        <p className="mt-2 text-slate-500">Where did my money go?</p>
        <p className="mt-6 text-sm font-medium text-slate-700">{label}</p>
      </div>
    </main>
  )
}
