import { Box, Button, Heading, Input } from '@chakra-ui/react';
import hero from '../assets/hero.png';

export function Banner() {

  return (
    <Box bgImage={hero} h='40vh' bgSize='cover' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <form justifyContent='center'>
        <Input placeholder='search..' _placeholder={{color:'white', letterSpacing:'5px'}} variant='flushed' htmlSize={20} w='auto' />
      </form>
    <Heading as='h1' variant='comic' mb={5} fontSize={{base:'xl',sm: '2xl',md:'4xl'}} textAlign='center' fontWeight='bold' letterSpacing={5} >your dream´s sneakers</Heading>
      <Button variant='nik'>See All</Button>
    </Box>
  )
}
