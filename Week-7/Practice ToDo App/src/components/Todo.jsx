import '../css/todo.css'
import {TodoContext} from '../context/TodoContext';
function Todo({deleteTodo}){
    return <>
    <li className='todo-list'>
        <input type="checkbox" className='todo-checkbox'/>
        <label className='todo'>Task 1</label>
        <button onClick={deleteTodo} className='todo-btn'>X</button>
    </li>
    </>
}

export default Todo;