//@flow

import variablesSCSS from './exports.scss';

export const VariantList = [
  'default',
  'primary',
  'secondary',
  'dark',
  'info',
  'success',
  'warning',
  'error'
];

export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export const SizeList = ['xs', 'sm', 'md', 'lg', 'xl'];
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const getSizeVariables = (name: string): Object => {
  var obj = SizeList.reduce((entry: Object, key: String): Object => {
    entry[key] = variablesSCSS[`${name}-${key}`];
    return entry;
  }, {});
  return obj;
};

export const variables = {
  breakpoints: getSizeVariables('breakpoint'),
  sizes: getSizeVariables('size'),
  lineHeights: getSizeVariables('line-height'),
  fontSizes: getSizeVariables('font-size'),
  fontWeights: {},
  mainFont: variablesSCSS['main-font']
};

export default variables;
