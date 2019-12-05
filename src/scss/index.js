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

const getVariables = (name: string): Object => {
  var obj = SizeList.reduce((entry: Object, key: String): Object => {
    entry[key] = variablesSCSS[`${name}-${key}`];
    return entry;
  }, {});
  return obj;
};

export const variables = {
  breakpoints: getVariables('breakpoint'),
  sizes: getVariables('size'),
  lineHeights: getVariables('line-height'),
  fontSizes: getVariables('font-size')
};

export default variables;
