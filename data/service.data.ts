import { v4 as uuidv4 } from 'uuid'

export interface serviceMenuDocument {
  _id: string
  name: string
  description: string
  slug: string
}

export const serviceMenuData = [
  {
    id: uuidv4(),
    title: 'MERN Stack Development Services',
    description: 'We can help you to develop your website using MERN Stack',
    slug: 'mern-stack-development-services',
  },
  {
    id: uuidv4(),
    title: 'Frontity Website Development',
    description: 'Create lightning fast websites using WordPress and React.',
    slug: 'frontity-website-development',
  },

  {
    id: uuidv4(),
    title: 'Convert Design to Pixel Perfect Code',
    description:
      'We can help you to convert your design to pixel perfect code.',
    slug: 'convert-design-to-code',
  },
  {
    id: uuidv4(),
    title: 'WordPress Website Development',
    description: 'We can help you to develop your website using MERN Stack',
    slug: 'wordpress-website-development',
  },
]
