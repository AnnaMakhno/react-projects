import Todo from "./Todo";
import style from "./TodoList.module.css";

function TodoList({ todos, removeTodo }) {
    return (
        <div className={style.todoListContainer}>
            {!todos.length ? (
                <h2>Todo list is empty</h2>
            ) : (
                todos.map((todo, index) => (
                    <Todo
                        key={index}
                        text={todo}
                        removeTodo={removeTodo}
                        index={index}
                    />
                ))
            )}
        </div>
    );
}

export default TodoList;
