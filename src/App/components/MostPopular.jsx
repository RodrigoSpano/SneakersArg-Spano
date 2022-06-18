import { Box, Heading, Spinner, Stack } from '@chakra-ui/react'
import React, { useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'



export default function MostPopular() {

  const [popular, setPopular] = useState([])
  const [load, setLoad] = useState( true )

  useEffect(() => {
    setLoad( true )

    const products = collection(db, 'products')
    const q = query(products, where('popular','==', true) )

    getDocs(q)
    .then((resp) => {
      const newPopular = resp.docs.map( (el) => {
        return {
          id: el.id,
          ...el.data()
        }
      })
      setPopular( newPopular )
    })
    .finally(()=> setLoad(false))
    


  }, [])

  return (
    <Stack minH='60vh' bg='gray.100' pt={10} userSelect='none'>
      <Heading textAlign='center' letterSpacing={1} fontWeight='light'>Most Popular Products</Heading>
      <Box w='100vw' h='md' m={5} display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
        
        {
          load ?
          <Spinner m='auto'/>:
          popular.map(el => (
            <ItemCard 
              name={el.name}
              price={el.price}
              img={el.img}
              key={el.id}
              id={el.id}
            />
          ))
        }
        
      </Box>
    </Stack>
  )
}
