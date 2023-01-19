export const sandbox = {
  name: 'sandbox',
  title: 'Sandbox',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Sandbox',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          validation: Rule =>
            Rule.custom((value, { parent }) => {
              return parent?.asset && value ? true : 'Alt text is required';
            }),
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'array',
      type: 'array',
      of: [
        {
          name: 'object',
          type: 'object',
          fields: [
            {
              name: 'ref',
              type: 'reference',
              to: [{ type: 'inputs' }],
              initialValue: async (value, context) => {
                console.log(context);

                return {};
              },
            },
          ],
        },
      ],
    },
  ],
};
