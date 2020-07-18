import React from 'react'
import { Row } from 'antd'
import Card from '@components/Card'
import { useGame } from '@services'

const Cards = () => {
  const { height, rows, cols } = useGame()
  return (
    <>
      {Array(rows)
        .fill('')
        .map((_, rowIndex) => (
          <Row key={rowIndex}>
            {Array(cols)
              .fill('')
              .map((_, colIndex) => {
                const id = String(rowIndex * cols + colIndex)
                const span = Math.floor(24 / cols)
                return <Card id={id} height={height} span={span} key={colIndex} />
              })}
          </Row>
        ))}
    </>
  )
}

export default Cards
