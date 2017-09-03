import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select, text} from '@storybook/addon-knobs'

import {Box} from './helpers/box'
import FlxBx, {FlxEl} from '../components'
import {alignOptions, directionOptions, justifyOptions} from './helpers/options'

const stories = storiesOf('Flbx', module)

stories.addDecorator(withKnobs)

const otherStyles = {
  height: 350,
  border: '1px solid #eee'
}

stories.add('Children', () => {
  const direction = select('direction', directionOptions, 'row')
  const reverse = boolean('reverse', false)
  const justify = select('justify', justifyOptions, 'flex-start')
  const align = select('align', alignOptions, 'flex-start')
  const child1Align = select('child1 align', alignOptions, 'flex-start')
  const child2Align = select('child2 align', alignOptions, 'flex-start')
  const child3Align = select('child3 align', alignOptions, 'flex-start')
  const child4Align = select('child4 align', alignOptions, 'flex-start')
  const basis1 = text('child1 basis', 'auto')
  const basis2 = text('child2 basis', 'auto')
  const basis3 = text('child3 basis', 'auto')
  const basis4 = text('child4 basis', 'auto')
  const grow1 = text('child1 grow', '0')
  const grow2 = text('child2 grow', '0')
  const grow3 = text('child3 grow', '0')
  const grow4 = text('child4 grow', '0')
  const shrink1 = text('child1 shrink', '1')
  const shrink2 = text('child2 shrink', '1')
  const shrink3 = text('child3 shrink', '1')
  const shrink4 = text('child4 shrink', '1')
  return (
    <FlxBx direction={direction} reverse={reverse} justify={justify} align={align} style={otherStyles}>
      <FlxEl element={Box} num={1} align={child1Align} basis={basis1} grow={grow1} shrink={shrink1} />
      <FlxEl element={Box} num={2} align={child2Align} basis={basis2} grow={grow2} shrink={shrink2} />
      <FlxEl element={Box} num={3} align={child3Align} basis={basis3} grow={grow3} shrink={shrink3} />
      <FlxEl element={Box} num={4} align={child4Align} basis={basis4} grow={grow4} shrink={shrink4} />
    </FlxBx>
  )
})
