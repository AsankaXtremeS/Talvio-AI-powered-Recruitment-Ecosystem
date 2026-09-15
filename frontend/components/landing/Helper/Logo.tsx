import React from 'react'
import Link from 'next/link'

const Navlogo = () => {
  return (
    <Link href="/#home" className="inline-flex items-center group">
      <span className="text-2xl font-extrabold tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors">
        Talvio
      </span>
    </Link>
  )
}

export default Navlogo