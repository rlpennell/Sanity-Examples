export const media = {
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (Rule) => Rule.required().max(250),
      description: 'This is used for SEO and accessibility',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      url: 'image.asset.url',
      media: 'image',
    },
  },
}
