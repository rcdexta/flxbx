import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ChildDiv} from './style';

class FlxEl extends Component {

  render () {
    const {element, align, basis, grow, shrink, flex, ...childProps} = this.props
    const Node = element
    const elProps = {align, basis, grow, shrink, flex}
    return (
        <ChildDiv {...elProps}>
          <Node {...childProps}/>
        </ChildDiv>
    );
  }
}

FlxEl.propTypes = {
  element: PropTypes.func,
  align: PropTypes.string,
  basis: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string
}

FlxEl.defaultProps = {
  element: 'div',
  align: 'auto',
  basis: 'auto',
  grow: 0,
  shrink: 1
}

export default FlxEl
