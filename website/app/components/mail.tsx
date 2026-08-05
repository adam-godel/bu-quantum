"use client"
import { useState } from 'react'

export default function Mail() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch('https://buquantum.us20.list-manage.com/subscribe/post-json?u=ab22d3f87769ab5d6dc245196&id=03ca622910&c=?', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    EMAIL: email,
                    NAME: name,
                    b_ab22d3f87769ab5d6dc245196_03ca622910: '',
                }),
            })
            
            setStatus('success')
            setEmail('')
            setName('')
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <div className="card max-w-md mt-12 p-7 w-full">
            <h2 className="section-title mb-6">Join our mailing list</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="email" className="eyebrow block mb-2">
                        Email address <span className="accent">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="field"
                        placeholder="quantum@entanglement.com"
                    />
                </div>

                <div>
                    <label htmlFor="name" className="eyebrow block mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="field"
                        placeholder="David Deutsch"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
                </button>

                {status === 'success' && (
                    <p className="text-sm text-center text-muted">Thanks for subscribing.</p>
                )}
                {status === 'error' && (
                    <p className="text-sm text-center accent">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    )
}