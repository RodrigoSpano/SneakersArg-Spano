import { extendTheme } from "@chakra-ui/react";
import './index.css'
const theme = extendTheme({
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Raleway, sans-serif',
  },
  components: {
    Button: {
      variants: {
        'nik': {
          color: 'white',
          border: '1px solid white',
          transition: 'all ease 0.5s',
          _hover: {
            color: 'blue.300',
            bgColor: 'gray.200',
          }
        },
        'sk' : {
          color: 'black',
          bgColor: 'blue.200',
          _hover:{
            transition: 'all ease 0.3s',
            bgColor: 'blue.400',
          }
        }
      }
    },
    Heading: {
      variants:{
        'comic': {
          color: 'orange.300',
          textShadow: '2px 2px 2px #258FAA, 2px 4px 2px #44CECB',
        }
      }
    },
    Text:{
      variants: {
        'foot': {
          color: 'gray.300',
          _hover: {
            color: 'blue.300'
          }
        }
      }
    }
  }
})

export default theme