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
          borderColor: 'brand.500',
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
    ringColor: 'brand.500',
  },
};

const theme = extendTheme(
  {
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
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: 'none',
            ...brandRing,
            color: mode('white', 'gray.800')(props),
            backgroundColor: mode('brand.500', 'brand.200')(props),

            _hover: {
              backgroundColor: mode('brand.600', 'brand.300'),
            },

            _active: {
              backgroundColor: mode('brand.700', 'brand.400'),
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
