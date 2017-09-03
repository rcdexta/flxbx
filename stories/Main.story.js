import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select} from '@storybook/addon-knobs'

import {Box} from './helpers/box'
import FlxBx from '../components'

const stories = storiesOf('Flbx', module)

stories.addDecorator(withKnobs)

const justifyOptions = {
  center: 'center',
  start: 'start',
  end: 'end',
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  left: 'left',
  right: 'right',
  baseline: 'baseline',
  'first baseline': 'first baseline',
  'last baseline': 'last baseline',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
  stretch: 'stretch',
  'safe center': 'safe center',
  'unsafe center': 'unsafe center'
}

const alignOptions = {
  normal: 'normal',
  stretch: 'stretch',
  center: 'center',
  start: 'start',
  end: 'end',
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  'self-start': 'self-start',
  'self-end': 'self-end',
  left: 'left',
  right: 'right',
  'first baseline': 'first baseline',
  'last baseline': 'last baseline',
  'safe center': 'safe center',
  'unsafe center': 'unsafe center'
}

const directionOptions = {
  row: 'row',
  column: 'column'
}

const otherStyles = {
  height: 350,
  border: '1px solid #eee'
}

stories.add('Playground', () => {
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
