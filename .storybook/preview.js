import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import '../src/scss/index.scss';
import './docs.css';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
