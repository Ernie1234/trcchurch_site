import {defineType, defineField} from 'sanity'
import {DocumentVideoIcon as icon} from '@sanity/icons'
export default defineType({
  name: 'liveVideo',
  title: 'Live Program',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title or caption of the live program or service.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Video Link | URL',
      type: 'string',
      description: 'Copy and paste the live video url here.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'programTheme',
      title: 'Live Program Theme',
      type: 'string',
      description: 'Copy and paste the live video url here.',
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date of the live program.',
    }),
  ],
})
