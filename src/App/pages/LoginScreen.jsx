import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

export const LoginScreen = () => {

  const {login} = useAuthContext()

  const [values, setValues] = useState({
    email:'',
    password:'',
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    login(values)
  }

  return (
    <Stack h='100vh' bgColor='blue.200' justifyContent='center' alignItems='center'>
      <Stack bgColor='#000'  w='sm' borderRadius={10} alignItems='center' p={10}>
        <Heading as='h2' fontWeight='bold' textAlign='left' color='#fff' >login</Heading>

        <form onSubmit={handleSubmit}>
          <Input onChange={handleInputChange} name={'email'} type="email" value={values.email} placeholder="Email de usuario" color='white' _placeholder={{color: 'white'}} my={2} />
          <Input onChange={handleInputChange} name={'password'} type="password" value={values.password} placeholder="Password" _placeholder={{color: 'white'}} my={2} />
          <Button type='submit'>Continue</Button>
        </form>

      </Stack>
    </Stack>
  )
}
