import React from 'react'
import { useStore, useDispatch, setSize, restart } from '@store'
import { Panel } from './styled'
import { Select } from 'antd'
import { Button } from 'antd'
import { GameStatus } from '@store/types'

const { Option } = Select

const Options = () => {
  const { status, size, tries, found } = useStore()
  const dispatch = useDispatch()
  const disabled = status === GameStatus.starting
  const message =
    tries === 0
      ? 'Find All the pairs!'
      : `You found ${found} out of ${size} pairs with ${tries === 1 ? '1 try' : `${tries} tries`}.`
  return (
    <Panel>
      <b>Size</b>
      <Select
        defaultValue={size}
        onChange={(size) => {
          dispatch(setSize(size))
          dispatch(restart())
        }}
        disabled={disabled}
      >
        <Option value={6}>6 pairs</Option>
        <Option value={8}>8 pairs</Option>
        <Option value={10}>10 pairs</Option>
        <Option value={12}>12 pairs</Option>
        <Option value={15}>15 pairs</Option>
        <Option value={18}>18 pairs</Option>
        <Option value={21}>21 pairs</Option>
      </Select>
      <br />
      <Button type="primary" onClick={() => dispatch(restart())} disabled={disabled}>
        Restart
      </Button>
      <br />
      <br />
      <b>{found === size ? `Congratulations! ${message}` : message}</b>
    </Panel>
  )
}

export default Options
