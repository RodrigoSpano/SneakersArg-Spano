import { Spinner, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/productpage/ItemDetail'
// import { requestAll } from '../mock/request'
import { doc, getDoc, query, where} from 'firebase/firestore'
import { db } from '../firebase/config'



const ProductPage = () => {

  const [item, setItem] = useState(null)
  const [load, setLoad] = useState(true)

  const { itemId } = useParams()

  useEffect(()=>{
    setLoad( true )

    const docRef = doc(db, 'products', itemId)
    getDoc(docRef)
    .then((resp) => {
      setItem({ id:resp.id, ...resp.data() })
    })
    .finally(()=> setLoad(false))


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