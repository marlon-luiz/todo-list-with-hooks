import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

import App from './App'

library.add(faTrash)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
