import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function RemoteMdxPage() {
  try {
    // Replace with the actual URL
    const res = await fetch('https://portfolio-by-hamed.vercel.app/')

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const markdown = await res.text()
    return <MDXRemote source={markdown} />
  } catch (error) {
    console.error('Error fetching MDX:', error)
    return <div>Error loading content: {error.message}</div> // Display an error message to the user
  }
}
