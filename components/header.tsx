import React from 'react'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 py-6'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            NAXX
          </Link>
        </div>
        <ul className='text-muted-foreground flex items-center gap-6 text-sm font-light'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Contact</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
