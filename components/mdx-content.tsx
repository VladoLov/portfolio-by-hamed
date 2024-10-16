import { MDXProps } from 'mdx/types'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import Counter from './counter'
import { MDXComponents } from 'mdx/types'

interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {
  children?: React.ReactNode
}

const Code: React.FC<CodeProps> = ({ children, ...props }) => {
  const codeHTML = typeof children === 'string' ? highlight(children) : ''
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components: MDXComponents = {
  code: Code,
  Counter
}

interface MDXContentProps extends Omit<MDXProps, 'components'> {
  source: MDXRemoteSerializeResult | string
  components?: MDXComponents
}

export default function MDXContent({
  source,
  components: userComponents,
  ...props
}: MDXContentProps) {
  return (
    <MDXRemote
      {...props}
      source={source}
      components={{ ...components, ...(userComponents || {}) }}
    />
  )
}
