import React from 'react'
import '../styles/TodoList.css'
import Todo from './Todo'

function TodoList(props) {
    function clearCompletedHandler() {
        props.setTodos(props.todos.filter((el) => el.completed === false))
    }
    return (
        <div>
            <div className={props.lightMode ? "listComp-light" : "listComp"}>
                {props.filterTodos.map((todo) => (
                    <Todo
                        setTodos={props.setTodos}
                        todos={props.todos}
                        todo={todo}
                        text={todo.text}
                        key={todo.id}
                        lightMode={props.lightMode}
                        completed={todo.completed} />
                ))
                }
                <div className={props.lightMode ? "bottomNav-light" : "bottomNav"}>
                    <div className="leftText">{Object.keys(props.filterTodos).length} items left</div>
                    <div className="tabs">
                        <div onClick={() => props.setStatus("all")} className={`${props.lightMode ? "all-light" : "all"} ${props.status === "all" ? "active-state" : ""}`}>All</div>
                        <div onClick={() => props.setStatus("active")} className={`${props.lightMode ? "active-light" : "active"} ${props.status === "active" ? "active-state" : ""}`}>Active</div>
                        <div onClick={() => props.setStatus("completed")} className={`${props.lightMode ? "completed-light" : "completed"} ${props.status === "completed" ? "active-state" : ""}`}>Completed</div>
                    </div>
                    <div onClick={clearCompletedHandler} className={props.lightMode ? "clearCompleted-light" : "clearCompleted"}>Clear Completed</div>
                </div>
            </div>
            <div className={props.lightMode ? "tabs-mobile-light" : "tabs-mobile"}>
                <div onClick={() => props.setStatus("all")} className={`${props.lightMode ? "all-light" : "all"} ${props.status === "all" ? "active-state" : ""}`}>All</div>
                <div onClick={() => props.setStatus("active")} className={`${props.lightMode ? "active-light" : "active"} ${props.status === "active" ? "active-state" : ""}`}>Active</div>
                <div onClick={() => props.setStatus("completed")} className={`${props.lightMode ? "completed-light" : "completed"} ${props.status === "completed" ? "active-state" : ""}`}>Completed</div>
            </div>
        </div>
    )
}

export default TodoList
