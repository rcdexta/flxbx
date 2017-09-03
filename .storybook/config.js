import {configure, addDecorator} from '@storybook/react'
import React from 'react'
import {setOptions} from '@storybook/addon-options'


function loadStories() {
  require('../stories')
}

setOptions({
  name: 'FlxBx',
  url: 'https://github.com/rcdexta/flxbx',
  downPanelInRight: true
})

const styles = {
  fontFamily: 'Roboto',
  fontSize: 14
};
const ContainerDecorator = (storyFn) => (
    <div style={styles}>
      { storyFn() }
    </div>
);
addDecorator(ContainerDecorator);

configure(loadStories, module)
