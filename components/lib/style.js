import styled from 'styled-components'

const FlexDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

export const RowDiv = FlexDiv.extend`
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
`

export const ColDiv = FlexDiv.extend`
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
`

export const ChildDiv = styled.div`
  align-self: ${props => props.align};
  flex-basis: ${props => props.basis};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
`
