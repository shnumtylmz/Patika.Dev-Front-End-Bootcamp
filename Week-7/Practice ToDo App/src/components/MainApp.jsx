import { TodoProvider } from "../context/TodoContext";
import Header from "./Header";
import TodoList from "./TodoList";

function MainApp() {
  return (
    <>
      <TodoProvider>
        <h1 className="title">todos</h1>
        <div className="main">
          <Header />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  );
}

export default MainApp;
