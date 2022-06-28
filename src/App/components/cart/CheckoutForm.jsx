import { Formik } from 'formik'
import { Button, chakra, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import * as Yup from 'yup'


  const checkoutSchema = Yup.object().shape({
    address: Yup.string()
                .min(6)
                .max(30)
                .required('this field is required')
  });


export const CheckoutForm = (props) => {
  return (
    <Formik
      initialValues={{
        name:'',
        email:'',
        repeat:'',
        address:'',
        cardNumber:'',
      }}
      validationSchema={checkoutSchema}
      validate={(values) => {
        let errors = {}

        if(!values.name){
          errors.name = 'invalid name'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
          errors.name = 'only letters and spaces allowed'
        }

        if(!values.email){
          errors.email = 'invalid email'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
          errors.email = 'Email can only contain letters, numbers, periods, hyphens, and underscores.'
        }

        if(!values.repeat){
          errors.repeat = 'do not match'
        } else if(values.repeat != values.email) {
          errors.repeat = 'emails do not match'
        }

        if(!values.cardNumber){
          errors.cardNumber = 'invalid number'
        } else if(!/^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/.test(values.cardNumber)){
          errors.cardNumber = 'invalid card number'
        }
        return errors;
      }}
      onSubmit={(values, {resetForm}) => {
        props.handleOrder(values)
        resetForm()
      } }
    >
      {(formik) => (
        <chakra.form onSubmit={formik.handleSubmit} color='gray.100' display='flex' flexDirection='column' gap={5} >

        <Flex direction='column'>
          <label>Name</label>
          <Input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" type='text' id='name' placeholder="Rodolf Claus" />
          {formik.touched && formik.errors.name && <Text color='red'>{formik.errors.name}</Text>}
        </Flex>

        <Flex direction='column'>
          <label>Email</label>
          <Input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" type='email' placeholder='rodolf@claus.nor'/>
          {formik.touched && formik.errors.email && <Text color='red'>{formik.errors.email}</Text>}
        </Flex>

        <Flex direction='column'>
          <label>Repeat Email</label>
          <Input value={formik.values.repeat} onChange={formik.handleChange} onBlur={formik.handleBlur} name="repeat" type='password' placeholder='rodolf@claus.nor'/>
          {formik.touched && formik.errors.repeat && <Text color='red'>{formik.errors.repeat}</Text>}
        </Flex>

        <Flex direction='column'>
          <label>Address</label>
          <Input value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} name='address' type='text' placeholder='Nort Pole 123' />
          {formik.touched && formik.errors.address && <Text color='red'>{formik.errors.address}</Text>}
        </Flex>

        <Flex direction='column'>
          <label>Card Number</label>
          <Input value={formik.values.cardNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} name='cardNumber' type='text' placeholder='4540 1111 1111 2222'/>
          {formik.touched && formik.errors.cardNumber && <Text color='red'>{formik.errors.cardNumber}</Text>}
        </Flex>

          <Button type='submit' color='gray.800'>send</Button>
        </chakra.form>
      ) }
    </Formik>
  )
}
