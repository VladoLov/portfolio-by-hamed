import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className='pb-24 pt-40'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center'>
        <div className='mx-auto max-w-max'>
          <p className='text-muted-foreground text-4xl font-bold tracking-tight'>
            404
          </p>
          <div className='sm:ml-6'>
            <div className='sm:border-1 sm:border-gray-200 sm:pl-6'>
              <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                Page not found
              </h1>
              <p className='text-muted-foreground mt-1 text-base'>
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className='sm:border-1 mt-10 flex space-x-3 sm:border-transparent'>
              <Link
                href='/'
                className='text-muted-foreground inline-flex items-center gap-3'
              >
                <ArrowLeftIcon className='h-5 w-5' />
                <span>Go back home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}