import { useState } from "react";
import Button from "../UI/Button";
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
                <Button
                    type="submit"
                    title="Add Todo"
                >
                    Add Todo
                </Button>
            </form>
        </div>
    );
}

export default TodoForm;
