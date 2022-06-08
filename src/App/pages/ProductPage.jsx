import { Spinner, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/productpage/ItemDetail'
import { requestAll } from '../mock/request'

const ProductPage = () => {

  const [item, setItem] = useState(null)
  const [load, setLoad] = useState(true)

  const { itemId } = useParams()

  useEffect(()=>{
    setLoad( true )

    requestAll()
    .then((resp)=>{
      setItem( resp.find((el)=> el.id === Number(itemId)) )
    })
    .catch(err=> console.log('error', err))
    .finally(()=>{
      setLoad( false )
    })
  }, [])

  return (
    <Stack  minH='100vh' justifyContent='center' alignItems='center'>
      {
        load
        ? <Spinner />
        : <ItemDetail item={item}/>
      }
    </Stack>
  )
}

export default ProductPage;