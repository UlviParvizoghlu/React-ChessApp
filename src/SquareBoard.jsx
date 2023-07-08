import React from 'react'

const SquareBoard = ({brd}) => {
  const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`)
  return (
    <div>
      <img className='w-[50px]' src={pieceImage} alt="" />
    </div>
  )
}

export default SquareBoard