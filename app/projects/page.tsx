import ProjectsComp from '@/components/projects'
import { getProjects } from '@/lib/projects'
import React from 'react'

export default async function Projects() {
  const projects = await getProjects()
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <ProjectsComp projects={projects} />
      </div>
    </section>
  )
}
