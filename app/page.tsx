import Intro from '@/components/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = `
    ### This is markdown heading
  `

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        {/* <h1 className='text-3xl font-bold'>Portfolio</h1> */}
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}
