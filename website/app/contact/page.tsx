"use client"
import { useState } from 'react'

export default function Contact() {
    {/* all for mailing list */}
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
        <div className="lg:h-[calc(100vh-288px)] flex flex-col items-center justify-center text-center mb-8">
            <h1 className="text-4xl font-bold">curious?</h1>
            <p className="text-2xl m-4">if you'd like to reach out, please feel free to send us an email. <br /> if you're interested in hearing more from us, join our mailing list and follow our socials!</p>

            
            {/* mailchimp form */}
            <div className="max-w-md mx-auto mt-8 p-6 rounded-lg border-2 border-red-500 shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">join our mailing list!</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            email address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                            placeholder="quantum@entanglement.com"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                            placeholder="david deutsch"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-2 px-4 bg-red-800 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {status === 'submitting' ? 'subscribing...' : 'subscribe'}
                    </button>
                    
                    {status === 'success' && (
                        <p className="text-blue-400 text-sm text-center">thanks for subscribing!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-400 text-sm text-center">something went wrong. please try again.</p>
                    )}
                </form>
            </div>
            
        </div>
    )
}
