import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#121214',
      '100': '#a8a8b3',
      '50': '#e1e1e6',
    },
    green: {
      '500': '#04d361',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.100',
      },
    },
  },
});
