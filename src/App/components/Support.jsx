import { Button, Input, Stack, Textarea, Box, Heading, chakra } from '@chakra-ui/react'
import React, { useState } from 'react'
import bgContact from '../assets/fondo-contact.jpg'

export default function Support() {

  const [value, setValue] = useState({
    userName: '',
    issue:'',
    text:''
  })

  const handleInputs = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Stack minH='50vh' alignItems='center' justifyContent='center' bgColor='gray.100' pb={10} >
      <Box bgImage={bgContact} bgSize='cover' w={{base:'xs', md:'xl'}} borderRadius={10} p={5} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.8)' >
        <Heading as='h2' textAlign='center' >Contact us!</Heading>

        <chakra.form onSubmit={handleSubmit} p={5} display='flex' flexDirection='column' gap={3} alignItems='center' >
          <Input
            onChange={handleInputs}
            name='userName'
            value={value.name}
            placeholder='name...'
            _placeholder={{color:'white'}}
            fontWeight='bolder'
            autoComplete='off'
          />
          <Input 
            onChange={handleInputs}
            name='issue'
            value={value.name}
            placeholder='issue...'
            _placeholder={{color:'white'}}
            fontWeight='bolder'
            autoComplete='off'
          />
          <Textarea 
            onChange={handleInputs}
            name='text'
            value={value.name}
            placeholder='text area...'
            _placeholder={{color:'white'}}
            fontWeight='bolder'
            autoComplete='off'
          />
          <Button type='submit' bg='white' borderRadius='none' border='1px solid gray' color='#000' w={{base:'100px', md: '200px'}} 
          _hover={{bg:'black', color:'white', transition:'all ease 0.4s'}}
          >Send</Button>
        </chakra.form>
      </Box>
    </Stack>
  )
}
