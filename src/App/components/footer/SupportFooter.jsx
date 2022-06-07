import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function SupportFooter() {
  return (
    <Box textAlign='left'>
      <Heading as='h2' color='gray.100' fontWeight='light' pb={5} fontSize={{base:'20px', md:'30px'}} >Support</Heading>
      <Link to={'/faq'}><Text variant='foot'>❔ Frequent questions</Text></Link>
      <Link to={'/return-policy'}><Text variant='foot'>📜Return policy</Text></Link>
      <Text variant='foot'> ✉ SneakersArg@gmail.com</Text>
      <Text variant='foot'>📞11 7732-9086</Text>
    </Box>
    )
}
