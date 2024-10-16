import { getProjects } from '@/lib/projects'
import React from 'react'
import ProjectsComp from './projects'
import Link from 'next/link'

export default async function RecentProjects() {
  const projects = await getProjects(2)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent project</h2>
        <ProjectsComp projects={projects} />

        <Link
          href='/projects'
          className='text-muted-foreground mt-8 inline-flex items-center gap-2'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}
