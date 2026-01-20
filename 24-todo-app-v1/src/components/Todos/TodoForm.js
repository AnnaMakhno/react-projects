import { useState } from "react";

import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
    const [todoText, setTodoText] = useState("");

    function onSubmitHandler(e) {
        e.preventDefault();
        addTodo(todoText);
        setTodoText("");
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Enter a new todo"
                    onChange={(e) => setTodoText(e.target.value)}
                    value={todoText}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
