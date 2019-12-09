//@flow

import variablesSCSS from './exports.scss';

export const VariantList = [
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error'
];

export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export const SizeList = ['xs', 'sm', 'md', 'lg', 'xl'];

export const FontWeightList = ['light', 'regular', 'bold'];

export const ColorList = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'quinary',
  'default',
  'success',
  'info',
  'warning',
  'error'
];

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const getVariables = (name: String, list: []): Object => {
  var obj = list.reduce((entry: Object, key: String): Object => {
    entry[key] = variablesSCSS[`${name}-${key}`];
    return entry;
  }, {});
  return obj;
};

export const variables = {
  breakpoints: getVariables('breakpoint', SizeList),
  fontFamilies: { main: variablesSCSS['main-font'] },
  fontSizes: getVariables('font-size', SizeList),
  fontWeights: getVariables('font-weight', FontWeightList),
  colors: getVariables('color', ColorList)
};

export default variables;
