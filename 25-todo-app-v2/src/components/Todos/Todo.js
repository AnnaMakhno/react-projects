import styles from "./Todo.module.css";
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, removeTodo, toggleTodo }) {
    return (
        <div
            className={
                todo.isComplited
                    ? `${styles.todo} ${styles.complitedTodo}`
                    : `${styles.todo}  `
            }
        >
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line
                onClick={() => removeTodo(todo.id)}
                className={styles.deleteIcon}
            />
            <FaCheck
                onClick={() => {
                    toggleTodo(todo.id);
                }}
                className={styles.checkIcon}
            />
        </div>
    );
}

export default Todo;
