'use client'
import React, { useState } from 'react'

const InputComp = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ recipientEmail: email }),
            });

            if (response.ok) {
                alert('You will be notified soon!');
            } else {
                alert('Failed to send notification. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again later.');
        } finally {
            setEmail("")
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <input disabled={loading} className="footer_input disabled:bg-red-500" placeholder="Your email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </form>
    )
}

export default InputComp
