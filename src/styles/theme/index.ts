import { shade } from 'polished';
export const colors = {
  background10: '#F0F0F5',
  placeholder10: '#A8A8B3',

  black10: '#000',
  black20: '#3A3A3A',
  black30: '#3D3D4A',
  black40: '#A3A8B3',
  white10: '#FFF',
  white20: '#CBCDB6',
  green10: '#04D361',
  green20: shade(0.2, '#04D361'),

  error10: '#C53030',
};

const defaultFontStyle = {
  fontWeight: 300,
  fontSize: 16,
};

export const fontStyles = {
  default: {
    ...defaultFontStyle,
  },
  title: {
    ...defaultFontStyle,
    fontSize: 48,
  },
};

export const grid = {
  breakpoints: {
    xs: 500,
    sm: 736,
    md: 980,
    lg: 1200,
  },
  row: {
    padding: 5,
  },
  col: {
    padding: 5,
  },
  container: {
    padding: 5,
    maxWidth: {
      xs: 500,
      sm: 736,
      md: 980,
      lg: 1200,
    },
  },
};

export const mediaQueries = {
  xs: `(max-width: ${grid.breakpoints.xs}px)`,
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
  md: `(max-width: ${grid.breakpoints.md}px)`,
  lg: `(max-width: ${grid.breakpoints.lg}px)`,
};

export default { colors, grid, mediaQueries, fontStyles };
