import React from 'react'
import Palette from './palette'

export const Box = ({num}) => {
  const bgColor = Palette.color()
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 20,
        margin: 10,
        fontSize: 16,
        border: '1px solid #33cccc'
      }}
    >
      {num}
    </div>
  )
}
