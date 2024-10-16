import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectsComp({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid-col-1 grid gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='groupe relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='bg-muted h-72 w-full overflow-hidden sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition'
                />
              </div>
            )}
            <div className='bg-background/70 absolute inset-[1px] rounded-lg'></div>
            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-6'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='text-muted-foreground line-clamp-1 text-sm'>
                {project.summary}
              </p>
              <p className='text-muted-foreground text-xs font-light'>
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
