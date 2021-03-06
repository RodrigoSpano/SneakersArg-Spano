import { Input, chakra, Box, Text } from '@chakra-ui/react'
import { collection, getDocs} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/config'

export const Search = () => {

  const [prods, setProds] = useState([])
  const [value, setValue] = useState('')

    
  useEffect(() => {

    const getItems = collection(db, 'products')

    getDocs(getItems)
    .then( (resp) => {
      const data = resp.docs.map( (el) => {
        return {
          id:el.id,
          ...el.data()
        }
      } )
      setProds( data )
    } )
    
  }, [])
  

  return (
    <>
      <chakra.form py={10} onSubmit={(e) => {e.preventDefault()}} >
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          autoComplete='off'
          name='search' 
          placeholder='search...' 
        />
          {
            value.length > 0
            && <Box borderBottom='1px solid gray' h='auto'>
                {
                  prods.filter( (el) =>  el.name.toLowerCase().includes(value) ).map( (res) => (
                    <Link to={`/sneakers/${res.id}`} key={res.id} >
                      <Text _hover={{bgColor: 'gray.100', cursor: 'pointer'}}>
                        {res.name}
                      </Text>
                    </Link>
                  ) )
                }
              </Box>
          }
      </chakra.form>
    </>
  )
}
