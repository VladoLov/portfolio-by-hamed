import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function RemoteMdxPage() {
  try {
    const res = await fetch(
      'https://portfolio-by-hamed.vercel.app/api/markdown'
    ) // Update the endpoint as needed

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const markdown = await res.text()
    return <MDXRemote source={markdown} />
  } catch (error) {
    console.error('Error fetching MDX:', error)

    // Type assertion to assume error is of type Error
    const errorMessage =
      (error as Error).message || 'An unknown error occurred.'

    return <div>Error loading content: {errorMessage}</div> // Display an error message to the user
  }
}
