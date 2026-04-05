'use client'

import { FormEvent, useState } from 'react'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setMessage('Thanks for joining!')
      setEmail('')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Failed to join waitlist. Please try again.')
      console.error('Submission error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success' || !email}
          className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-primary/20 active:scale-95"
        >
          {status === 'loading' && 'Joining...'}
          {status === 'success' && '✓ Joined'}
          {(status === 'idle' || status === 'error') && 'Join the waitlist'}
        </button>
      </div>

      {message && (
        <p className={`text-sm font-medium ${status === 'success' ? 'text-green-600' : 'text-red-500 animate-pulse'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
