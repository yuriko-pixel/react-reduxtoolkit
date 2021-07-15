import {createSlice} from '@reduxjs/toolkit'

let count = 0;

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: []
  },
  reducers: {
    addTodo(state, action) {
      // console.log(action.payload);
      // state.todo.push({ id, text, completed: false })
      state.todo.push({todo: action.payload})
    },
    toggleTodo(state, action) {
      const todo = state.todo.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export default todoSlice