export const resolveActions = (prev, {schemaType}) => {
  return ['inputs', 'sandbox'].includes(schemaType)
    ? prev.filter((action) => !['delete', 'duplicate'].includes(action.action))
    : prev
}
