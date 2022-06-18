import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/hero.png';

export function Banner() {

  const navigate = useNavigate()
  const handleProducts = () => {
    navigate('/sneakers')
  }

  return (
    <Box bgImage={hero} h='40vh' bgSize='cover' display='flex' flexDirection='column' justifyContent='center' alignItems='center' userSelect='none'>
    <Heading as='h1' variant='comic' mb={5} fontSize={{base:'xl',sm: '2xl',md:'4xl'}} textAlign='center' fontWeight='bold' letterSpacing={5} >your dream´s sneakers</Heading>
      <Button onClick={handleProducts} variant='nik'>See All</Button>
    </Box>
  )
}
