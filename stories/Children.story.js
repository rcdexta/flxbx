import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select, text} from '@storybook/addon-knobs'
import LiveEdit from './helpers/LiveEdit'

import {Box} from './helpers/box'
import FlxBx, {FlxEl} from '../components'
import {alignOptions, directionOptions, justifyOptions} from './helpers/options'

const stories = storiesOf('Flbx', module)

stories.addDecorator(withKnobs)

const otherStyles = {
  height: 350,
  border: '1px solid #eee'
}

const code = (props, c1Props, c2Props, c3Props, c4Props) => `<FlxBx direction='${props.direction}' reverse='${props.reverse}' justify='${props.justify}' align='${props.justify}' style={height: 350}>
  <FlxEl element={Box} num={1} align='${c1Props.align}' basis='${c1Props.basis}' grow='${c1Props.grow}' shrink='${c1Props.shrink}' />
  <FlxEl element={Box} num={2} align='${c2Props.align}' basis='${c2Props.basis}' grow='${c2Props.grow}' shrink='${c2Props.shrink}' />
  <FlxEl element={Box} num={3} align='${c3Props.align}' basis='${c3Props.basis}' grow='${c3Props.grow}' shrink='${c3Props.shrink}' />
  <FlxEl element={Box} num={4} align='${c4Props.align}' basis='${c4Props.basis}' grow='${c4Props.grow}' shrink='${c4Props.shrink}' />
</FlxBx>
`

stories.add('FlxEl styling', () => {
  const direction = select('direction', directionOptions, 'row')
  const reverse = boolean('reverse', false)
  const justify = select('justify', justifyOptions, 'flex-start')
  const align = select('align', alignOptions, 'flex-start')
  const props = {direction, reverse, justify, align}

  const child1Align = select('child1 align', alignOptions, 'flex-start')
  const basis1 = text('child1 basis', 'auto')
  const grow1 = text('child1 grow', '0')
  const shrink1 = text('child1 shrink', '1')

  const child2Align = select('child2 align', alignOptions, 'flex-start')
  const basis2 = text('child2 basis', 'auto')
  const grow2 = text('child2 grow', '0')
  const shrink2 = text('child2 shrink', '1')

  const child3Align = select('child3 align', alignOptions, 'flex-start')
  const basis3 = text('child3 basis', 'auto')
  const grow3 = text('child3 grow', '0')
  const shrink3 = text('child3 shrink', '1')

  const child4Align = select('child4 align', alignOptions, 'flex-start')
  const basis4 = text('child4 basis', 'auto')
  const grow4 = text('child4 grow', '0')
  const shrink4 = text('child4 shrink', '1')

  const child1Props = {align: child1Align, basis: basis1, grow: grow1, shrink: shrink1}
  const child2Props = {align: child2Align, basis: basis2, grow: grow2, shrink: shrink2}
  const child3Props = {align: child3Align, basis: basis3, grow: grow3, shrink: shrink3}
  const child4Props = {align: child4Align, basis: basis4, grow: grow4, shrink: shrink4}
  return (
    <div>
      <h3>FlxEl Child Wrapper</h3>
      <p><strong>FlxEl</strong> can be used to override flex properties for child elements inside <strong>FlxBx</strong></p>
      <FlxBx {...props} style={otherStyles}>
        <FlxEl element={Box} num={1} {...child1Props} />
        <FlxEl element={Box} num={2} {...child2Props} />
        <FlxEl element={Box} num={3} {...child3Props} />
        <FlxEl element={Box} num={4} {...child4Props} />
      </FlxBx>
      <br />
      <h4>Source code:</h4>
      <LiveEdit code={code(props, child1Props, child2Props, child3Props, child4Props)} />
      <p>
        Play with the knobs to the right to tune the prop values to get the desired layout. Prop values of individual child elements can be changed using the respective knobs!
      </p>
    </div>
  )
})
