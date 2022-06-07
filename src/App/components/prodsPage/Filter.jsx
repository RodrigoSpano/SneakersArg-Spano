import { Box, Divider, Flex, Heading, Stack, Select } from '@chakra-ui/react'
import React from 'react'

export default function Filter() {
  return (
    <Stack bg='blue.200' direction='row' h='80px' w='100vw'>
      <Select placeholder='brands' fontWeight='bold' size='sm' w='100px'>
        <option value='nike'>nike</option>
        <option value='adidas'>adidas</option>
        <option value='new-balance'>new balance</option>
      </Select>
      <Select placeholder='size'></Select>
    </Stack>
    )
}
