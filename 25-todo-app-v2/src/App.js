import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodosActions";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    function addTodoHandler(todoText) {
        const newTodo = {
            text: todoText,
            isComplited: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    }

    function removeTodoHandler(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function toggleTodoHandler(id) {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isComplited: !todo.isComplited }
                    : { ...todo };
            }),
        );
    }

    function resetTodosHandler() {
        setTodos([]);
    }

    function removeComplitedTodosHandler() {
        setTodos(todos.filter((todo) => !todo.isComplited));
    }

    const complitedTodosCalc = todos.filter((todo) => todo.isComplited).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodoActions
                    complitedTodosExist={!!complitedTodosCalc}
                    resetTodos={resetTodosHandler}
                    removeComplitedTodos={removeComplitedTodosHandler}
                />
            )}
            <TodoList
                todos={todos}
                removeTodo={removeTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
            {complitedTodosCalc > 0 && (
                <h2>{`You have complited ${complitedTodosCalc}
                    ${complitedTodosCalc > 1 ? "todos" : "todo"}`}</h2>
            )}
        </div>
    );
}

export default App;
