import { Input, Button, chakra, Textarea, Text, Flex, Badge } from '@chakra-ui/react';
import { Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const suppScheme = Yup.object().shape({
  email: Yup.string()
          .email('invalid email address')
          .required('this field is required'),
  text: Yup.string().required('this field is required').min(30).max(400)
})


export const SupportForm = (props) => {

  const [success, setSuccess] = useState(false)

  return (
    <Formik
      initialValues={{
        email:'',
        issue:'',
        text:'',
      }}
      validationSchema={suppScheme}
      onSubmit={(values, {resetForm}) => {
        props.handleContact(values)
        setSuccess(true)
        setTimeout(() =>{
          setSuccess( false )
          resetForm();
        }, 5000)
      }}
    >
    {(formik) => (
      <chakra.form onSubmit={formik.handleSubmit}  p={5} display='flex' flexDirection='column' gap={3} color='gray.100' >
        <Flex direction='column'>
          <chakra.label fontWeight={{base:'bold', md:'light'}} >Email</chakra.label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            name='email'
            type='email'
            placeholder='name@holder.com'
            _placeholder={{color:'gray.800'}}
            fontWeight='bold'
            fontSize={{base:'14px', md:'16px'}}
            autoComplete='off'
            color='black'
          />
          {formik.errors.email && formik.touched ? <Text fontWeight='700' color='red.600'>{formik.errors.email}</Text> : null }
        </Flex>
          
        <Flex direction='column'>
          <chakra.label >Issue (optional)</chakra.label>
          <Input 
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            name='issue'
            type='text'
            placeholder='issue...'
            _placeholder={{color:'gray.800'}}
            fontWeight='bold'
            fontSize={{base:'14px', md:'16px'}}
            autoComplete='off'
            color='black'
          />
        </Flex>

        <Flex direction='column'>
          <Textarea 
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            name='text'
            placeholder='text area...'
            _placeholder={{color:'gray.800'}}
            fontWeight='bold'
            fontSize={{base:'14px', md:'16px'}}
            autoComplete='off'
            color='black'
          />
          {formik.errors.text && formik.touched ? <Text fontWeight='bold' color='red.600'>{formik.errors.text}</Text> : null }
        </Flex>
        <Button type='submit' bg='white' borderRadius='none' border='1px solid gray' color='#000' w={{base:'100px', md: '200px'}} 
        _hover={{bg:'black', color:'white', transition:'all ease 0.4s'}} alignSelf='center'
        >Send</Button>
        {success ? <Badge colorScheme='green' w='180px' textAlign='center' alignSelf='center' fontSize='sm'>Sent Successfully</Badge> : null}
      </chakra.form>
    )}
  </Formik>
  )
}
