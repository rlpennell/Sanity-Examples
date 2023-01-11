import {Swatch, RolesBasedArrayInput, AsyncSelect, CustomImagePreview} from './components'
import {pageBlocks} from './componentDependencies/pageBlocks'
import {Boilerplate} from './components/Boilerplate'

export const inputs = {
  name: 'inputs',
  type: 'document',
  title: 'Inputs',
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'inputs',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'boilerplate',
      type: 'string',
      initialValue: 'Inputs',
      components: {
        input: Boilerplate,
      },
      readOnly: true,
    },
    {
      title: 'Image with Palette Swatch',
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Colour palette',
          name: 'colorPalette',
          type: 'string',
          components: {
            input: Swatch,
          },
          options: {
            list: [
              {title: 'Dominant', value: 'dominant'},
              {title: 'Vibrant', value: 'vibrant'},
              {title: 'Light Vibrant', value: 'lightVibrant'},
              {title: 'Dark Vibrant', value: 'darkVibrant'},
              {title: 'Muted', value: 'muted'},
              {title: 'Light Muted', value: 'lightMuted'},
              {title: 'Dark Muted', value: 'darkMuted'},
              {title: 'Custom', value: 'custom'},
            ],
          },
        },
      ],
    },
    {
      title: 'Roles Based Array',
      name: 'rolesBasedArray',
      type: 'array',
      of: pageBlocks.map((block) => ({type: block.name, title: block.title})),
      components: {
        input: RolesBasedArrayInput,
      },
    },
    {
      name: 'asyncList',
      title: 'Async List',
      type: 'string',
      options: {
        list: [],
        url: 'https://catfact.ninja/breeds',
        formatResponse: (json) =>
          json.data.map(({breed}) => ({
            title: breed,
            value: breed.toLowerCase().split(' ').join('-'),
          })),
      },
      components: {
        input: AsyncSelect,
      },
    },
    {
      name: 'customImagePreview',
      title: 'Custom Image Preview',
      type: 'reference',
      to: [{type: 'media', components: {preview: CustomImagePreview}}],
    },
  ],
}
