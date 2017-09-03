import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories');
}

setOptions({
  name: 'FlxBx',
  url: 'https://github.com/rcdexta/flxbx',
  downPanelInRight: true
})

configure(loadStories, module);
