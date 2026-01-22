import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";

function TodoActions({
    complitedTodosExist,
    resetTodos,
    removeComplitedTodos,
}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button
                onClick={() => {
                    resetTodos();
                }}
                title="Reset Todos"
            >
                <RiRefreshLine />
            </Button>
            <Button
                disabled={!complitedTodosExist}
                onClick={() => {
                    removeComplitedTodos();
                }}
                title="Clear Complited Todos"
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodoActions;
