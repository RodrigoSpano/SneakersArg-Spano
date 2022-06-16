import { Spinner, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { requestAll } from '../../mock/request'
import ItemCard from '../ItemCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

export default function ProdsContainer() {

  const [prods, setProds] = useState(null)
  const [load, setLoad] = useState(true)


  useEffect(() => {
    setLoad( true )


    const productsRef = collection(db, 'products')
    // const q = query(productsRef, where('price',"<=", 250)) //con un limit(2) declaro el limite de resultados

    getDocs(productsRef)
    .then((resp) => {
      // setProds( resp.docs.map( (el) => el.data() ) )
      // const newItems = resp.docs.map( (el) => el.data() )
      const newItems = resp.docs.map( (el) => {
        return {
          id: el.id,
          ...el.data()
        }
      })
      setProds( newItems)
    })
    .finally(() =>  setLoad( false ))


  }, [])
  

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
