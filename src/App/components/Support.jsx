import {  Stack, Box, Heading } from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import bgContact from '../assets/fondo-contact.jpg'
import { db } from '../firebase/config'
import { SupportForm } from './support/SupportForm'

export default function Support() {

  const handleContact = (contact) => { 
    const queries = {'message': contact}

    const contactRef = collection(db, 'contacts')
    addDoc(contactRef, queries)
  }


  return (
    <Stack minH='50vh' alignItems='center' justifyContent='center' bgColor='gray.100' pb={10} >
      <Box bgImage={bgContact} bgSize='cover' w={{base:'xs', md:'xl'}} borderRadius={10} p={5} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.8)' >
        <Heading as='h2' textAlign='center' >Contact us!</Heading>

          <SupportForm handleContact={handleContact} />
        
      </Box>
    </Stack>
  )
}
