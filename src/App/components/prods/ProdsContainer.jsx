import { Spinner, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useParams } from 'react-router-dom'

export default function ProdsContainer() {

  const [prods, setProds] = useState(null)
  const [load, setLoad] = useState(true)

  const { brand, price } = useParams()


  useEffect(() => {
    setLoad( true )


    const productsRef = collection(db, 'products')
    const q1 = brand ? query(productsRef, where('brand', '==', brand)) : productsRef 

    getDocs(q1)
    .then((resp) => {
      
      const newItems = resp.docs.map( (el) => {
        return {
          id: el.id,
          ...el.data()
        }
      })
      setProds( newItems )
    })
    .finally(() =>  setLoad( false ))


  }, [brand])

  useEffect(()=> {
    const productsRef = collection(db, 'products')
    const q2 = price ? query(productsRef, where('price', '<=', Number(price))) : productsRef

    getDocs(q2)
    .then((resp) => {
      const newItems = resp.docs.map( (el) => {
        return {
          id: el.id,
          ...el.data()
        }
      } )
      setProds( newItems )
    })
    .finally(()=> setLoad( false ))

  }, [price])

  

  return (
    <Stack minH='100vh' w='container.xl' direction='row' flexWrap='wrap' justifyContent='center' p={10} userSelect='none' >
      {
        load
        ? <Spinner size='xl'/>
        : prods.map((el) => (
          <ItemCard 
            img={el.img}
            name={el.name}
            price={el.price}
            id={el.id}
            key={el.id}
          />
        ))
      }
    </Stack>
  )
}
