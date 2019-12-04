import { configure } from '@storybook/react';
import '../src/scss/index.scss';
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /story\.js$/), module);
