import React from 'react'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6'>
      <nav className='mx-auto flex w-max max-w-3xl items-center justify-between px-1 md:container'>
        <div>
          <Link href='/' className='pr-6 font-serif text-2xl font-bold sm:pr-0'>
            NAXX
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='pl-6 sm:pl-0'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
