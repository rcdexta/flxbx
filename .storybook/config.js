import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories');
}

setOptions({
  name: 'Flxbx',
  url: 'https://github.com/rcdexta/flxbx',
  downPanelInRight: true
})

configure(loadStories, module);
