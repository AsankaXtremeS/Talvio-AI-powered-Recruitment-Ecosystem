'use client'

import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { CheckCircle2, ArrowRight, Users as UsersIcon, Building2, Quote } from 'lucide-react'

const seekerBenefits = [
  'Intelligent skill & interest job recommendations',
  'Real-time application status and stage tracking',
  'Automated interview feedback and status updates',
  'Integrated AI resume enhancements',
]

const employerBenefits = [
  'Automated candidate ranking and shortlisting',
  'Direct messaging and instant interview scheduling',
  'Automated batch interview outcome emails',
  'Verified pipeline of top university talent',
]

export const UsersSection = () => {
  return (
    <section id="users" className="relative w-full bg-white py-24 border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-xs font-medium text-indigo-700">
            <UsersIcon className="h-3.5 w-3.5 text-indigo-600" />
            <span>Dual Solutions</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Built for Job Seekers &amp;{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Ambitious Teams
            </span>
          </h2>

          <p className="mt-3 text-base text-zinc-600">
            Tailored capabilities built to remove hiring friction on both sides of the recruitment equation.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Job Seekers */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-zinc-50/40 p-8 sm:p-10 shadow-xs transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100/80 px-3.5 py-1 text-xs font-semibold text-blue-700">
                <UsersIcon className="h-3.5 w-3.5" />
                <span>For Job Seekers</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900">
                Launch &amp; Advance Your Career
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Discover curated opportunities, stand out with AI-backed profiles, and receive transparent updates throughout your hiring journey.
              </p>

              <ul className="mt-8 space-y-3.5">
                {seekerBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-200/60">
              <Link href="/register">
                <button className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-zinc-800 active:scale-[0.99]">
                  <span>Sign up as Jobseeker</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2: Employers */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-zinc-50/40 p-8 sm:p-10 shadow-xs transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100/80 px-3.5 py-1 text-xs font-semibold text-indigo-700">
                <Building2 className="h-3.5 w-3.5" />
                <span>For Employers</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900">
                Hire Qualified Talent, Faster
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Automate repetitive screening, manage candidate pipelines effortlessly, and connect directly with high-potential candidates.
              </p>

              <ul className="mt-8 space-y-3.5">
                {employerBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-200/60">
              <Link href="/register/employer">
                <button className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-indigo-700 active:scale-[0.99]">
                  <span>Sign up as Employer</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Minimalist Testimonial Strip */}
        <div className="mt-14 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <Quote className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium italic text-zinc-700">
                  &ldquo;Talvio cut our preliminary screening time by 40%. We found the ideal engineering interns within a single week.&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-900">Sarah Jenkins</span>
                  <span className="text-xs text-zinc-400">•</span>
                  <span className="text-xs text-zinc-500">Tech Recruiter, Novatech</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 md:border-l md:border-zinc-200/80 md:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Quote className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium italic text-zinc-700">
                  &ldquo;The AI suggestions matched my skill profile with relevant job openings that other platforms completely missed.&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-900">Alex Fernando</span>
                  <span className="text-xs text-zinc-400">•</span>
                  <span className="text-xs text-zinc-500">Junior Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const UsersPage = () => {
  redirect('/#users')
}

export default UsersPage
