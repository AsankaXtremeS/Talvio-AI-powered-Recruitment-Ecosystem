'use client'

import React from 'react'
import { redirect } from 'next/navigation'
import { Sparkles, Route, MailCheck, Compass, FileText, ArrowUpRight } from 'lucide-react'

type FeatureCard = {
  title: string
  description: string
  icon: React.ElementType
  tag: string
}

const features: FeatureCard[] = [
  {
    title: 'AI Smart Matching',
    description: 'Intelligently connects candidate skills, projects, and ambitions with precise job requirements.',
    icon: Sparkles,
    tag: 'Intelligence',
  },
  {
    title: 'End-to-End Hiring Pipeline',
    description: 'Manage applications, shortlist stages, live status updates, and documents in one fluid workspace.',
    icon: Route,
    tag: 'Workflow',
  },
  {
    title: 'Automated Interview Feedback',
    description: 'Generate and send instant, professional selection or rejection updates without manual overhead.',
    icon: MailCheck,
    tag: 'Automation',
  },
  {
    title: 'Personalized Career Discovery',
    description: 'Students receive curated internships and junior roles matched directly to their profile strength.',
    icon: Compass,
    tag: 'Jobseekers',
  },
  {
    title: 'AI Resume & Cover Letter Suite',
    description: 'Fine-tune resumes, highlight key strengths, and tailor cover letters with embedded AI assistance.',
    icon: FileText,
    tag: 'AI Tools',
  },
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative w-full bg-white py-24 border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Platform Features</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Everything You Need for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Frictionless Hiring
            </span>
          </h2>

          <p className="mt-3 text-base text-zinc-600">
            Powerful yet simple tools designed to empower candidates and accelerate hiring decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const FeaturesPage = () => {
  redirect('/#features')
}

export default FeaturesPage
