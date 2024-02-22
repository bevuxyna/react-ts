import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./types";

function App() {
    const [ todoList, setTodoList ] = useState<Todo[]>([]);
    const todoAddHandler = (text: string) => {
        setTodoList([{ id: Math.random().toString(), text: text }]);
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todoList} />
        </div>
    );
}

export default App;
