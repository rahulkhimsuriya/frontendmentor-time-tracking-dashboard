import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
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
