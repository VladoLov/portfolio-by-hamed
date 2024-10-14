import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const navigationLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: faFacebook // Use the imported icon directly
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: faInstagram // Use the imported icon directly
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: faLinkedin // Use the imported icon directly
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com',
    icon: faGithub // Use the imported icon directly
  }
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigationLinks.map(item => (
              <Link
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ marginRight: '8px' }}
                />
              </Link>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-muted-foreground text-center text-xs leading-5'>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
