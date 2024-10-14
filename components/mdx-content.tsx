import { MDXProps } from 'mdx/types'
import { highlight } from 'sugar-high'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Counter from './counter'

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter
}

export default function MDXContent(props: JSX.IntrinsicAttributes & MDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
