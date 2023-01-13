// CustomStringInput.tsx
import React, {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'

export const Boilerplate = (props) => {
  const {
    value,
    changed,
    elementProps,
    focused,
    id,
    level,
    onChange,
    path,
    presence,
    readOnly,
    renderDefault,
    schemaType,
    validation,
    validationError,
  } = props

  const handleChange = useCallback(
    (event) => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
    [onChange]
  )
  return (
    <Stack space={3}>
      {renderDefault(props)}
      <Text size={1}>Characters: {value?.length || 0}</Text>
    </Stack>
  )
}
