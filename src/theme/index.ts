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

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.200',
  },
};

const inputSelectStyles = {
  variants: {
    filled: (props: any) => ({
      field: {
        rounded: 'xl',
        _placeholder: { color: mode('gray.400', 'gray.500')(props) },
        _focus: {
          borderColor: mode('brand.600', 'brand.200')(props),
        },
        _active: {
          borderColor: 'none',
        },
      },
    }),
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const theme = extendTheme(
  {
    styles: {
      global: (props: any) => ({
        '::-webkit-scrollbar': {
          width: '0.8em',
        },
        '::-webkit-scrollbar-track': {
          boxShadow: mode(
            'inset 0 0 6px rgba(0, 0, 0, 0.3)',
            'inset 0 0 6px rgba(255, 255, 255, 0.3)'
          )(props),
        },

        '::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: mode('brand.200', 'brand.100')(props),
          boxShadow: mode(
            'inset 0 0 12px rgba(21, 49, 23, 0.6)',
            'inset 0 0 12px rgba(21, 49, 23, 1)'
          )(props),
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
      heading: `Rubik, ${base.fonts?.heading}`,
      body: `Noto Sans, ${base.fonts?.body}`,
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
      Link: {
        baseStyle: (props: any) => ({
          color: mode('brand.200', 'brand.50')(props),
          _hover: {
            color: mode('brand.300', 'brand.100')(props),
          },
          ...brandRing,
        }),
      },
      Badge: {
        variants: {
          primary: (props: any) => ({
            backgroundColor: mode('gray.600', 'gray.400')(props),
            color: mode('gray.100', 'gray.800')(props),
            borderRadius: '10px',
            padding: '0.3rem 0.5rem',
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
            color: mode('brand.200', 'brand.100')(props),
            backgroundColor: 'transparent',
            border: '2px solid',

            _hover: {
              color: mode('white', 'gray.800')(props),
              backgroundColor: mode('brand.200', 'brand.100')(props),
              borderColor: mode('brand.200', 'brand.100')(props),
            },

            _active: {
              color: mode('brand.300', 'brand.50')(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles, ...brandRing },
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
      Radio: {
        variants: {
          primary: {
            colorScheme: 'brand',
            ...brandRing,
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
