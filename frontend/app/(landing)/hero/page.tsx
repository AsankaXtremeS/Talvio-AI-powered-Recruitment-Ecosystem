'use client'

import React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, ShieldCheck, Zap, Briefcase, ChevronRight } from 'lucide-react'

const stats = [
  { label: 'Talents Connected', value: '5,000+' },
  { label: 'Partner Companies', value: '300+' },
  { label: 'Match Accuracy', value: '98%' },
  { label: 'Faster Hiring', value: '40%' },
]

const highlights = [
  { icon: Zap, label: 'Smart AI Matching' },
  { icon: ShieldCheck, label: 'Verified Employers' },
  { icon: Briefcase, label: 'End-to-End Recruitment' },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white pt-28 pb-16"
    >
      {/* Subtle modern background gradient orbs - pure CSS, no images */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-indigo-100/60 via-blue-50/50 to-purple-100/40 blur-3xl rounded-full opacity-70" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-50/60 blur-3xl rounded-full opacity-60" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-50/60 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Top Minimal Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3.5 py-1.5 text-xs font-medium text-indigo-700 backdrop-blur-sm transition-all hover:bg-indigo-100/60">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
          <span>Next-Generation AI Recruitment</span>
          <ChevronRight className="h-3.5 w-3.5 text-indigo-400" />
        </div>

        {/* Main Headline */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl leading-[1.12]">
          Connecting Top Talent <br className="hidden sm:inline" />
          with{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Future-Ready Teams
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          An intelligent hiring ecosystem that seamlessly bridges ambitious job seekers with
          leading companies through automated matching, streamlined workflows, and precision evaluations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/register">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:shadow-md active:scale-[0.99]">
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </Link>
          <Link href="/#features">
            <button className="inline-flex items-center rounded-xl border border-zinc-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.99]">
              Explore Platform
            </button>
          </Link>
        </div>

        {/* Highlights Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-600">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/80 px-4 py-1.5 backdrop-blur-xs font-medium text-zinc-700 shadow-xs"
              >
                <Icon className="h-3.5 w-3.5 text-indigo-600" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>

        {/* Minimal Social Proof & Stats Bar */}
        <div className="mt-16 border-t border-zinc-200/80 pt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-zinc-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
