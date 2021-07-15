import {createSlice, PayloadAction} from '@reduxjs/toolkit'

let count = 0;

interface todoState {
  todo: {
    id: number,
    todo: string,
    completed: boolean,
    deleted: boolean
  }[];   
}

const initialState = { todo: [{
  id: 0,
  todo: '',
  completed: false,
  deleted: false
}] } as todoState;

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action:PayloadAction<string>) {
      
      state.todo.push({id: count++, todo: action.payload, completed: false, deleted: false})
    },
    toggleTodo(state, action:PayloadAction<number>) {
      const todo = state.todo.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export default todoSlice