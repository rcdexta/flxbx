import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { RowDiv, ColDiv } from './style'

class FlxBx extends Component {

  directionDiv = () => {
    return this.props.direction === 'row' ? RowDiv : ColDiv
  }

  render () {
    const Element = this.directionDiv()
    return <Element {...this.props}>
      {this.props.children}
    </Element>
  }
}

FlxBx.propTypes = {
  direction: PropTypes.string,
  reverse: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string
}
FlxBx.defaultProps = {
  direction: 'row',
  reverse: false,
  justify: 'flex-start',
  align: 'flex-start'
}

export default FlxBx
