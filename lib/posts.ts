import { readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getPostBySlug(slug: string) {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents = readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}
