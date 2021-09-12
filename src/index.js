import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: "'Rubik', sans-serif",
        backgroundColor: 'hsl(226, 43%, 10%)',
      },
    }),
  },
  colors: {
    purple: {
      800: 'hsl(235, 45%, 61%)',
      900: 'hsl(235, 46%, 20%)',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
