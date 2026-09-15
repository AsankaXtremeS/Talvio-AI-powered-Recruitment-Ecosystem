'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaGithub } from 'react-icons/fa6'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-zinc-100 bg-white py-12 text-zinc-600">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/#home" className="inline-flex items-center group">
              <span className="text-xl font-extrabold tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors">
                Talvio
              </span>
            </Link>
            <p className="text-xs text-zinc-500 text-center md:text-left">
              Intelligent matching for candidates and forward-thinking companies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Twitter / X"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <FaXTwitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <FaGithub className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all hover:bg-zinc-900 hover:text-white hover:border-zinc-900 cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-100 pt-6 text-xs text-zinc-400 gap-3">
          <p>© {new Date().getFullYear()} Talvio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-zinc-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer