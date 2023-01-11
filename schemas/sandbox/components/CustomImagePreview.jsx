import React from 'react'
import {Card, Stack, Text, Flex} from '@sanity/ui'

export const CustomImagePreview = (props) => {
  const {title, url} = props

  return (
    <Flex align="center" justify="center" height="fill">
      <Card border padding={3}>
        <Stack space={3} marginBottom={3}>
          <img src={url} alt={title} style={{width: '100%'}} />
          <Text size={1} weight="bold">
            {title?.toUpperCase()}
          </Text>
        </Stack>
      </Card>
    </Flex>
  )
}
