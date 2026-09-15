'use client'

import React from 'react'
import { redirect } from 'next/navigation'
import ContactForm from './contactForm'
import { Mail, Phone, MapPin, MessageSquare, Headphones, Building2 } from 'lucide-react'

const supportChannels = [
  {
    icon: Headphones,
    title: 'Customer Support',
    description: '24/7 dedicated assistance for students and job seekers navigating the platform.',
  },
  {
    icon: Building2,
    title: 'Employer Inquiries',
    description: 'Custom solutions, bulk hiring pipelines, and campus talent partnership options.',
  },
  {
    icon: MessageSquare,
    title: 'General Inquiries & Feedback',
    description: 'Share recommendations, explore integrations, or reach out to our core team.',
  },
]

export const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-white py-24 border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Info & Categories */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-xs font-medium text-indigo-700">
                <Mail className="h-3.5 w-3.5 text-indigo-600" />
                <span>Contact Us</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Get in Touch with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h2>

              <p className="mt-3 text-base text-zinc-600 leading-relaxed max-w-lg">
                Have questions about our AI matching, company onboarding, or candidate features? We are always happy to help.
              </p>

              {/* Direct Info Pills */}
              <div className="mt-8 flex flex-col gap-3.5">
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium">info@talvio.io</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">+94 123 456 789</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Support Categories */}
            <div className="mt-12 space-y-4 pt-8 border-t border-zinc-100">
              {supportChannels.map((cat, idx) => {
                const Icon = cat.icon
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                        {cat.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-zinc-500 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactPage = () => {
  redirect('/#contact')
}

export default ContactPage
