import {useCurrentUser} from 'sanity'

export function RolesBasedArrayInput(props) {
  const {schemaType, renderDefault} = props
  const {role} = useCurrentUser()

  const allowedTypes =
    role != 'administrator'
      ? schemaType.of.filter((type) => !['careerBlock'].includes(type.name))
      : schemaType.of

  return renderDefault({
    ...props,
    schemaType: {...schemaType, of: allowedTypes},
  })
}
