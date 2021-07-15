import "./styles.css";
import {useSelector, useDispatch} from 'react-redux'
import todoSlice from './redux/reducer'
import {useState} from 'react'

const {addTodo, deleteTodo} = todoSlice.actions;

export default function App() {
  const todo = useSelector(state => state.todo)
  const dispatch = useDispatch()

  console.log(todo)
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <h2>Todo</h2>
      {todo.map(item => <p>{item.todo}</p>)}
      <form>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={() => dispatch(addTodo(input))}>Submit</button>
      </form>
    </div>
  );
}
