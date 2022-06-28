import { extendTheme } from "@chakra-ui/react";
import { BiBluetooth } from "react-icons/bi";
import './index.css'
const theme = extendTheme({
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Raleway, sans-serif',
  },
  components: {
    Button: {
      variants: {
        'na':{
          bgColor: 'none',
          fontSize: '3xl',
          color: 'gray.100',
          transition: 'all ease 0.5s',
          _hover: {
            transform: 'rotate(-90deg)',
            color:'black'
          }
        },
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
          fontSize:'14px',
          _hover:{
            transition: 'all ease 0.3s',
            bgColor: 'blue.400',
          }
        },
        'back': {
          color: '#000',
          transition: 'all linear 0.3s',
          _hover:{
            fontSize:'15px'
          }
        },
        'cart': {
          bgColor: '#000',
          color: '#fff',
          borderRadius: 'none',
          fontWeight: 'light',
          letterSpacing: '2',
          textTransform: 'uppercase',
          transition: 'all linear 0.3s',
          _hover:{
            bgColor: 'blue.200',
            color: '#000'
          }
        },
        'restore': {
          bgColor: '#fff',
          color: '#000',
          borderRadius: 'none',
          border: '1px solid black',
          fontWeight: 'light',
          letterSpacing: '2',
          textTransform: 'uppercase',
          transition: 'all linear 0.3s',
          _hover:{
            bgColor: 'blue.200',
            color: '#fff',
            border:'1px solid white'
          }
        },
        'inc': {
          borderRadius: 'none',
          size: 'xs',
          border: '1px solid black',
          fontSize:'24px',
          _hover: {
            bgColor: '#000',
            color: '#fff'
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
        },
        'nav':{
          fontSize: 'xl',
          transition: 'all linear 0.1s',
          fontWeight: 'bold',
          _hover:{
            color: 'blue.300',
            fontSize:'2xl'
          }
        }
      }
    }
  }
})

export default theme