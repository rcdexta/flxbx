import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select} from '@storybook/addon-knobs'

import {Box} from './helpers/box'
import FlxBx from '../components'
import {alignOptions, directionOptions, justifyOptions} from './helpers/options'

const stories = storiesOf('Flbx', module)

stories.addDecorator(withKnobs)

const otherStyles = {
  height: 350,
  border: '1px solid #eee'
}

stories.add('Parent', () => {
  const direction = select('direction', directionOptions, 'row')
  const reverse = boolean('reverse', false)
  const justify = select('justify', justifyOptions, 'flex-start')
  const align = select('align', alignOptions, 'flex-start')
  return (
    <FlxBx direction={direction} reverse={reverse} justify={justify} align={align} style={otherStyles}>
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
      <Box num={4} />
    </FlxBx>
  )
})
