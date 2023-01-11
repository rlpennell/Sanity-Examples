const cta = {
  name: 'cta',
  title: 'Call to action',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
  ],
}

const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
  ],
}

const body = {
  name: 'body',
  title: 'Body',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
  ],
}

const careerBlock = {
  name: 'careerBlock',
  title: 'Career Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
  ],
}

export const pageBlocks = [cta, careerBlock, hero, body]
