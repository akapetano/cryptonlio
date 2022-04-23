import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.800',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.200',
  },
};

const theme = extendTheme(
  {
    styles: {
      global: (props: any) => ({
        'body::-webkit-scrollbar': {
          width: '1em',
        },
        'body::-webkit-scrollbar-track': {
          boxShadow: mode(
            'inset 0 0 6px rgba(0, 0, 0, 0.3)',
            'inset 0 0 6px rgba(255, 255, 255, 0.3)'
          )(props),
        },

        'body::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: mode('brand.200', 'brand.100')(props),
          outline: '1px solid green',
        },
      }),
    },
    colors: {
      brand: {
        50: '#60AD65',
        100: '#50A156',
        200: '#419547',
        300: '#3B8740',
        400: '#347839',
        500: '#2E6A32',
        600: '#285C2B',
        700: '#214D25',
        800: '#1B3F1E',
        900: '#153117',
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      IconButton: {
        variants: {
          primary: (props: any) => ({
            backgroundColor: mode('brand.200', 'brand.100')(props),
            color: mode('white', 'gray.800')(props),
            ...brandRing,
            transition: 'background-color .3s ease',
            _hover: {
              backgroundColor: mode('brand.300', 'brand.50')(props),
            },
          }),
        },
      },
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: 'md',
            ...brandRing,
            color: mode('white', 'gray.800')(props),
            backgroundColor: mode('brand.200', 'brand.100')(props),

            _hover: {
              backgroundColor: mode('brand.300', 'brand.50')(props),
            },

            _active: {
              backgroundColor: mode('brand.300', 'brand.50')(props),
            },
          }),
          secondary: (props: any) => ({
            rounded: 'md',
            ...brandRing,
            color: mode('gray.800', 'gray.300')(props),
            backgroundColor: 'transparent',

            _hover: {
              color: mode('brand.300', 'brand.50')(props),
            },

            _active: {
              color: mode('brand.300', 'brand.50')(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            _focus: {
              borderRadius: 'none',
              ...brandRing,
            },
          },
        },
      },
    },
    breakpoints,
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input'],
  })
);

export default theme;
