import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select} from '@storybook/addon-knobs'
import LiveEdit from './helpers/LiveEdit'

import {Box} from './helpers/box'
import FlxBx from '../components'
import {alignOptions, directionOptions, justifyOptions} from './helpers/options'

const stories = storiesOf('Flbx', module)

stories.addDecorator(withKnobs)

const otherStyles = {
  height: 350,
  border: '1px solid #eee'
}

const code = props => `<FlxBx direction='${props.direction}' reverse='${props.reverse}' justify='${props.justify}' align='${props.justify}' style={height: 350}>
  <Box num={1} />
  <Box num={2} />
  <Box num={3} />
  <Box num={4} />
</FlxBx>
`

stories.add('FlxBx Container', () => {
  const direction = select('direction', directionOptions, 'row')
  const reverse = boolean('reverse', false)
  const justify = select('justify', justifyOptions, 'flex-start')
  const align = select('align', alignOptions, 'flex-start')
  const props = {direction, reverse, justify, align}
  return (
    <div>
      <h3>FlxBx Container</h3>
      <p>You can use <strong>FlxBx</strong> to define a parent container for your flex elements</p>
      <FlxBx {...props} style={otherStyles}>
        <Box num={1} />
        <Box num={2} />
        <Box num={3} />
        <Box num={4} />
      </FlxBx>
      <br />
      <h4>Source code:</h4>
      <LiveEdit code={code(props)} />
      <p>
        Play with the knobs to the right to tune the prop values to get the desired layout. The prop values in the code
        will be updated appropriately!
      </p>
      <p><i>Note: Box is a sample component to illustrate positioning and layout and is not part of the library</i></p>
    </div>
  )
})
