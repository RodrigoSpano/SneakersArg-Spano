import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config';
import { CheckoutForm } from './CheckoutForm';
import { CartResume } from './CartResume';

const Checkout = () => {

  const {cart, totalPrice, restoreCart} = useCartContext()

  const [orderId, setOrderId] = useState(null)


  const handleOrder = async (values) => {
    const order = {
      buyer: values,
      items: cart.map(({id,name,quantity, size, price})=>({id, name, quantity, size, price})),
      total: totalPrice(),
      date: new Date()
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
    }
  }

  if(orderId) {
    return(
      <Stack h='70vh' alignItems='center' justifyContent='center'>
          <Stack borderRadius={20} p={10} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.3)'>
            <Heading>Thanks for trust us!</Heading>
            <Text>this is your order ID : <strong>{orderId}</strong></Text>
            <Link to={'/'}>
              <Button color='blue.300' _hover={{color: 'blue.600'}}>⬅go home</Button>
            </Link>
          </Stack>
      </Stack>
    )
  }

  if(cart.length === 0) {
    return <Navigate to='/' />
  }

  return (
    <Stack h='100vh' alignItems='center' justifyContent='center' direction={{base:'column', md:'row'}} userSelect='none'>
      <Stack w={{base:'xs', sm:'md', md:'xl'}} minH='xl' borderRadius={10} bgColor='gray.800' p={10} >

      <Heading as='h2' color='gray.100' textAlign='center' >Checkout Data</Heading>
      <CheckoutForm handleOrder={handleOrder} />
      </Stack>
      {cart.length > 0 ? <CartResume /> : null}
    </Stack>
  )
}

export default Checkout;