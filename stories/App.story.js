import React from 'react'
import {storiesOf} from '@storybook/react'

import {FlexRow} from '../components'

const Box = ({num}) =>
  <div style={{backgroundColor: '#eee', padding: 20, margin: 10, fontSize: '16'}}>
    {num}
  </div>

storiesOf('Flbx', module).add('Row Wise', () =>
  <FlexRow>
    <Box num={1} />
    <Box num={2} />
    <Box num={3} />
  </FlexRow>
)
