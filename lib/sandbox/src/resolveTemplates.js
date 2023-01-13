export const resolveTemplates = (prev, context) =>
  prev.filter((template) => !['inputs', 'sandbox'].includes(template.id))
