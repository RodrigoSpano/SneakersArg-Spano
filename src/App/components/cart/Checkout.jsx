import { Button, Heading, Input, Stack, chakra } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config';
import { SiMetrodemadrid } from 'react-icons/si';

const Checkout = () => {

  const {cart, totalPrice, restoreCart} = useCartContext()

  const [orderId, setOrderId] = useState(null)
  const [values, setValues] = useState({
    name:'',
    email:'',
    address:'',

  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const order = {
      buyer: values,
      items: cart.map(({id,name,quantity,price})=>({id, name, quantity, price})),
      total: totalPrice()
    }
    
    const batch = writeBatch(db)
    const orderRef = collection(db, 'orders')
    const productsRef = collection(db, 'products')

    const q = query(productsRef, where(documentId(), 'in', cart.map((el)=> el.id)))

    const outOfStock = []
    const prods = await getDocs(q)

    prods.docs.forEach( (doc) => {
      const itemToUpdate = cart.find( (el) => el.id === doc.id )

      if((doc.data().stock - itemToUpdate.quantity) > 0){
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.quantity
        })
      }else {
        outOfStock.push(itemToUpdate)
      }
    } )

    if(outOfStock.length === 0){
      addDoc(orderRef, order)
      .then( (doc) => {
        batch.commit()
        setOrderId( doc.id )
        restoreCart()
      } )
    }else {
      console.log(outOfStock)
      alert('insufficient stock')
    }


  }

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  if(cart.length === 0) {
    return <Navigate to='/' />
  }

  return (
    <Stack h='100vh' alignItems='center' justifyContent='center'>
      <Stack w='container.lg' h='xl' borderRadius={20} bgColor='blue.300' p={10} >

      <Heading as='h2' textAlign='center' >Checkout Data</Heading>
      <chakra.form onSubmit={handleSubmit} display='flex' flexDirection='column' gap={5} >
        <Input 
          autoComplete='off'
          onChange={handleInput}
          value={values.name}
          name='name'
          placeholder='fullName'
          type={'text'}
        />
        <Input 
          autoComplete='off'
          onChange={handleInput}
          value={values.email}
          name='email'
          placeholder='example@example.com'
          type='email'
        />
        <Input 
          autoComplete='off'
          onChange={handleInput}
          value={values.address}
          name='address'
          type='text'
          placeholder='example 123'
        />
        <Button type='submit'>Send</Button>
      </chakra.form>

      </Stack>
    </Stack>
  )
}

export default Checkout;