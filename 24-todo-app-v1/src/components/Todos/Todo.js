import styles from "./Todo.module.css";
import { RiTodoFill } from "react-icons/ri";

function Todo({ text, index, removeTodo }) {
    return (
        <div
            className={styles.todo}
            onDoubleClick={() => removeTodo(index)}
        >
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{text}</div>
        </div>
    );
}

export default Todo;
