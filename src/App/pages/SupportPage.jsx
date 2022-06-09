import { Button, Input, Stack, Textarea, Box, Heading, FormControl } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgContact from '../assets/fondo-contact.jpg'

export default function SupportPage() {

  const [values, setValue] = useState({
    name:'',
    mail:'',
    text:''
  })
  
  const handleInput = (e) => {
    
    setValue({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  const isError = Input === ''

  return (
    <Stack minH='80vh' maxH='100vh' w='100vw' justifyContent='center' alignItems='center' p={5} >
        <Button onClick={handleBack} alignSelf='flex-start' ml={5} mt={10} variant='back' w='50px' fontSize='12px' textTransform='uppercase'>⬅ back</Button>


      <Heading as='h2' fontSize={{base:'20px',md:'40px'}} fontWeight='light' textTransform='uppercase'>Contact with us!</Heading>

        <Box w={{base:'sm',md:'lg'}} minH='md' p={5} borderRadius={10} boxShadow='0px 0px 22px -3px rgba(0,0,0,1)' opacity='80%' bgImage={bgContact} bgSize='cover' >
          <FormControl isRequired isInvalid={isError} display='flex' flexDirection='column' gap={5} onSubmit={handleSubmit} alignItems='center' w={{base:'xs', md:'md'}} >
            <Input 
              variant='flushed'
              onChange={handleInput}
              value={values.name}
              name='name'
              color='black'
              fontWeight='bold'
              placeholder='your name'
              _placeholder={{color:'gray.200', textTransform: 'uppercase'}}
            />
            <Input
              variant='flushed'
              onChange={handleInput}
              value={values.mail}
              name='mail' 
              color='black'
              fontWeight='bold'
              placeholder='your e-mail'
              _placeholder={{color:'gray.200', textTransform: 'uppercase'}}
            />
            <Textarea 
              onChange={handleInput}
              value={values.text}
              name='text'
              color='black'
              fontWeight='bold'
              placeholder='write....'
              _placeholder={{color:'gray.200', textTransform: 'uppercase'}}
              minH='xs'
            />
            <Button w='100px' border='1px solid gray' color='black' fontWeight='bold' fontSize='x-large' bg='none'  type='submit'>SEND</Button>
        </FormControl>
        </Box>
      
    </Stack>
  )
}
