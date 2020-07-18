import React from 'react'
import { useStore, useDispatch } from '@store'
import { CardBox, Box, Image } from './styled'
import { tryCard } from '@services'
import { GameStatus } from '@store/types'

type Props = {
  id: string
  span: number
  height: string
}

const Card = ({ id, span, height }: Props) => {
  const { status, cards, currentPair } = useStore()
  const dispatch = useDispatch()
  if (!cards[id]) return null
  const { value, turned, visible } = cards[id]
  return (
    <CardBox span={span} height={height}>
      {visible ? (
        <Box
          onClick={() => {
            const canTry = turned && status === GameStatus.try
            canTry && tryCard(dispatch, id, value, currentPair)
          }}
        >
          <Image hidden={turned} src={`https://picsum.photos/id/${value}/200/200`} />
        </Box>
      ) : null}
    </CardBox>
  )
}

export default Card
