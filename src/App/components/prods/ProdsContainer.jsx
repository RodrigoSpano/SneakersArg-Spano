import { Spinner, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { requestAll } from '../../mock/request'
import ItemCard from '../ItemCard'

export default function ProdsContainer() {

  const [prods, setProds] = useState(null)
  const [load, setLoad] = useState(true)


  useEffect(() => {
    setLoad( true )

    requestAll()
    .then((data)=>{
      setProds( data )
    })
    .catch((err)=> console.log('Error', err))
    .finally(()=>{
      setLoad( false )
    })
  }, [])
  

  return (
    <Stack minH='100vh' w='container.xl' direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' p={10} >
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
