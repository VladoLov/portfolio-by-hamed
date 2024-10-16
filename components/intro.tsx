import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-16 sm:flex-row'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey , I&apos;m Vlado</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a web developer based in Bosnia and Herzegovina passionate
          about learning new technologies{' '}
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src='/author/profile.jpg'
          alt='Vladislav Lovric'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
