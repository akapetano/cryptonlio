import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

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
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  })
);

export default theme;
