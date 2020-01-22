import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';
import { scss } from '../dist';
import { css } from 'styled-components';
console.log(themes.dark);
export default create({
  base: 'light',

  colorPrimary: scss.colors.primary,
  colorSecondary: scss.colors.primary,

  // UI
  appBg: scss.colors.lndarkgrey,
  appContentBg: scss.colors.lnwhite,
  appBorderColor: scss.colors.lndarkgrey,
  appBorderRadius: 0,

  // Typography
  fontBase: '"Quicksand", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: scss.colors.lnblack,
  textInverseColor: scss.colors.lnblack,

  // Toolbar default and active colors
  barTextColor: scss.colors.lnblack,
  barSelectedColor: scss.colors.lnblack,
  barBg: scss.colors.lnlightgrey,

  // Form colors
  inputBg: scss.colors.lnwhite,
  inputBorder: scss.colors.lnlightgrey,
  inputTextColor: scss.colors.lnblack,
  inputBorderRadius: 0,

  brandTitle: 'LNDev React UI',
  brandUrl: 'http://lndev.co.uk',
  brandImage: 'http://www.next-wordpress.com/images/lndev_logo_white.svg'
});
