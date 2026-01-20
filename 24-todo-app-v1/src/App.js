import "./App.css";
import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    function addTodoHandler(todoText) {
        setTodos([...todos, todoText]);
    }

    function removeTodoHandler(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList
                todos={todos}
                removeTodo={removeTodoHandler}
            />
        </div>
    );
}

export default App;
