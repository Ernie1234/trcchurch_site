import {defineType, defineField} from 'sanity'
import {ImageIcon as icon} from '@sanity/icons'
export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload an image or flyer for the program or service.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
