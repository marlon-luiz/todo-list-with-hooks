import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import TodoForm from './todos/Form'
import TodoListItem from './todos/ListItem'

import List from './ui/List'

import useTodos from './todos/hooks/useTodos'

export default props => {
  const { todos, setTodos } = useTodos(['Teste 1', 'Teste 2', 'Teste 3'])

  return (
    <>
      <Title>Teste</Title>
      <TodoForm
        saveTodo={todo => {
          const trimmedTodo = todo.trim()

          if (trimmedTodo.length !== 0) {
            setTodos([...todos, trimmedTodo])
          }
        }}
      />
      <List list={todos}>
        {(todo, todoIndex) => (
          <TodoListItem
            todo={todo}
            removeTodo={() => {
              const newTodos = _.filter(
                todos,
                (todo, index) => index !== todoIndex
              )
              setTodos(newTodos)
            }}
          />
        )}
      </List>
    </>
  )
}

const Title = styled.h1`
  padding: 15px 0;
  text-align: center;
`
