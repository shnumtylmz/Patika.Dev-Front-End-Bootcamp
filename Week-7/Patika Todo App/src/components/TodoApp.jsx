import React from 'react';
import TodoProvider from '../Context/TodoContext';
import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';

const TodoApp = () => {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <section className="main">
          <TodoList />
        </section>
        <Footer />
      </section>
    </TodoProvider>
  );
};

export default TodoApp;
