"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { COUNTRY_CODES, CountryCode } from '@/constant/countryCodes'
import { CheckCircle2, ChevronDown, Send } from 'lucide-react'

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+94',
    phone: '',
    message: '',
  })
  const [showDropdown, setShowDropdown] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white p-7 sm:p-9 shadow-md shadow-zinc-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-zinc-900">
          Send Us a Message
        </h3>
        <p className="mt-1 text-xs text-zinc-500">
          Fill out the form below and we will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1">
              First name
            </label>
            <input
              name="firstName"
              required
              value={form.firstName}
              onChange={handleChange}
              placeholder="e.g. Jane"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1">
              Last name
            </label>
            <input
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              placeholder="e.g. Doe"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-zinc-700 mb-1">
            Email address
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-colors"
          />
        </div>

        {/* Phone with Country Code */}
        <div>
          <label className="block text-xs font-medium text-zinc-700 mb-1">
            Phone number
          </label>
          <div className="flex rounded-xl border border-zinc-200 bg-zinc-50/50 focus-within:border-indigo-500 focus-within:bg-white transition-colors">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown((v) => !v)}
                className="flex items-center gap-1.5 border-r border-zinc-200 px-3 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100/70 rounded-l-xl transition-colors"
              >
                <span>{form.countryCode}</span>
                <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 z-50 mt-1 max-h-48 w-48 overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1 shadow-lg">
                  {COUNTRY_CODES.map((c: CountryCode) => (
                    <button
                      key={`${c.name}-${c.code}`}
                      type="button"
                      onClick={() => {
                        setForm((f) => ({ ...f, countryCode: c.code }))
                        setShowDropdown(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors ${
                        form.countryCode === c.code
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-zinc-700 hover:bg-zinc-50'
                      }`}
                    >
                      <span>{c.name}</span>
                      <span className="text-zinc-400">{c.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="77 123 4567"
              className="w-full bg-transparent px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-medium text-zinc-700">
              Your message
            </label>
            <span className="text-[11px] text-zinc-400">
              {form.message.length}/200
            </span>
          </div>
          <textarea
            name="message"
            required
            maxLength={200}
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-colors"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitted}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-[0.99] disabled:opacity-75 cursor-pointer"
        >
          {submitted ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Message Sent Successfully!</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-zinc-400">
          By contacting us, you agree to our{' '}
          <Link href="/terms-of-service" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  )
}

export default ContactForm