import React, {useState} from 'react'
import '../styles/todo.css'
import checkSvg from '../images/icon-check.svg'
import crossSvg from '../images/icon-cross.svg'

function Todo(props) {
    const [hover, setHover] = useState(false);

    function completeHandler() {
        props.setTodos(props.todos.map(items => {
            if (items.id === props.todo.id) {
                return {
                    ...items, completed: !items.completed
                }
            }

            return items;
        }))
    }

    function deleteHandler() {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id))
    }
    return (
        <div>
            <div onMouseEnter={()=> setHover(true) } onMouseLeave={()=> setHover(false)} onFocus={() => setHover(true)} className="todo" >
                <div onClick={completeHandler} className={`${props.lightMode ? "check-light" : "check"}`}>
                    <div className={props.completed ? "check-selected" : "check-deselected"}>
                        <img src={checkSvg} alt="" />
                    </div>
                </div>
                <div className={`${props.lightMode ? "task-light" : "task"} ${props.completed ? "task-completed" : ""}` }>{props.text}</div>
                <div onClick={deleteHandler} className={`cross ${hover ? "hoverOn" : ""}`}><img src={crossSvg} alt="" /></div>
            </div>
            <div className={props.lightMode ? "line-light" : "line"}></div>
        </div>
    )
}

export default Todo
