"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navlogo from '@/components/landing/Helper/Logo'
import { NAV_LINKS } from '@/constant/constant'

const Nav = () => {
  const [navBg, setNavBg] = useState(false)
  const [activeHash, setActiveHash] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => {
      const top = window.scrollY || document.documentElement.scrollTop || 0
      setNavBg(top > 20)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      setActiveHash(hash)
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navBg
          ? 'bg-white/85 backdrop-blur-md border-b border-zinc-200/80 py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO WORDMARK */}
        <Navlogo />

        {/* NAVLINKS */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-zinc-200/60 bg-zinc-50/70 p-1 backdrop-blur-xs">
          {NAV_LINKS.map((link) => {
            const sectionHash = link.url.split('#')[1] || 'home'
            const isActive = pathname === '/' && activeHash === sectionHash

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setActiveHash(sectionHash)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-indigo-600 bg-white shadow-2xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="px-4 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors">
              Log in
            </button>
          </Link>
          <Link href="/register">
            <button className="rounded-xl bg-zinc-900 px-4.5 py-2 text-sm font-medium text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-95">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Nav