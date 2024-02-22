import React from 'react';
import TodoList from "./components/TodoList";

function App() {
    const todoList = [{id: 't1', text: 'Finish the course'}]
    return (
        <div className="App">
            <TodoList items={todoList} />
        </div>
    );
}

export default App;
