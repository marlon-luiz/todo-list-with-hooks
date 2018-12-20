import React from 'react'
import styled from 'styled-components'

import useValue from './hooks/useValue'

export default ({ saveTodo }) => {
  const { value, reset, setValue } = useValue('')

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()

        saveTodo(value)
        reset()
      }}>
      <Input value={value} onChange={e => setValue(e.target.value)} />
    </Form>
  )
}

const Form = styled.form`
  padding: 15px;
`

const Input = styled.input`
  padding: 4px 6px;
  font-size: 1rem;
  border: 1px #ccc solid;
  border-radius: 3px;
  width: 100%;
`
