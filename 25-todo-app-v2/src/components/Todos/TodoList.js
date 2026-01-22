import Todo from "./Todo";
import style from "./TodoList.module.css";

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <div className={style.todoListContainer}>
            {!todos.length ? (
                <h2>Todo list is empty</h2>
            ) : (
                todos.map((todo) => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                ))
            )}
        </div>
    );
}

export default TodoList;
