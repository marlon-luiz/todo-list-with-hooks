import { useState } from 'react'
import _ from 'lodash'

export default initialState => {
  const [todos, setTodos] = useState(initialState)

  return {
    todos,
    setTodos
  }
}
