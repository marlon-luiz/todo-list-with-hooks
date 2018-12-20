import { useState } from 'react'

export default initialState => {
  const [value, setValue] = useState(initialState)

  return {
    value,
    reset() {
      setValue(initialState)
    },
    setValue
  }
}
