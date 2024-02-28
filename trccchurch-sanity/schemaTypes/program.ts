import {defineType, defineField} from 'sanity'
import {ProjectsIcon as icon} from '@sanity/icons'
export default defineType({
  name: 'programs',
  title: 'Programs',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title or caption of the program or service.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug of the program or service.',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Program Theme',
      type: 'string',
      description: 'The program theme of the program or service.',
    }),

    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'string',
      description:
        'Write information about the program or service when it is available, who people can contact',
    }),
    defineField({
      name: 'programUrl',
      title: 'Program link',
      type: 'url',
      description: 'The program link is available',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'What category does this pin belong to?',
      options: {
        list: ['MidWeek Service', 'Sunday Service', 'Program', 'Weekly Service'],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload an image or flyer for the program or service.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'guestMinister',
      title: 'Guest Minister',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Program Date and Time',
      type: 'datetime',
      description: 'Write about the program or service when it is available',
    }),
  ],
})
