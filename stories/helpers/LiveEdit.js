import React from 'react'
import styled, { css } from 'styled-components'
import * as polished from 'polished'

import { LiveProvider, LiveEditor} from 'react-live'

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
`

const StyledEditor = styled(LiveEditor)`
  font-size: 0.8rem;
  cursor: text;
  font-family: 'Source Code Pro', Monaco, Monospace,serif;
`

const LiveEdit = ({ noInline, code, scope }) => (
  <StyledProvider code={code} scope={scope}>
      <StyledEditor />
  </StyledProvider>
)

export default LiveEdit
