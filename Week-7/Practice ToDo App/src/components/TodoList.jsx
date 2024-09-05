import Todo from "./Todo";

function TodoList() {   


    return <>
    <div className="todo-list">
    <ul>
        <Todo text="Buy Milk" completed={false} />
        <Todo text="Learn React" completed={true} />
        <Todo text="Make Dinner" completed={false} />
    </ul>
    </div>
    </>
}
export default TodoList;