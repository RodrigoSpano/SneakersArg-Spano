import { Button, Input, Stack, Textarea, Box, chakra } from '@chakra-ui/react'
import React from 'react'

export default function SupportPage() {


  return (
    <Stack h='100vh' w='100vw' justifyContent='center' alignItems='center' >

        <Box bg='orange.200' w='lg' minH='md' p={5}>
          <chakra.form display='flex' flexDirection='column' gap={5}>
            <Input 
              name='name'
              placeholder='your name'
            />
            <Input
              name='mail' 
              placeholder='your e-mail'
            />
            <Textarea name='text'
              placeholder='text area'
            />
            <Button type='submit'>Send</Button>
        </chakra.form>
        </Box>
      
    </Stack>
  )
}
