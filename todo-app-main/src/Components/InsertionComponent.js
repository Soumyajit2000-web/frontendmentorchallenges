// import React from 'react'
import '../styles/InsertionComp.css';

function InsertionComponent(props) {
    function inputTextHandler(e){
        props.setInputText(e.target.value);
    }

    function submitTodoHandler(e){
        e.preventDefault();
        props.setTodos([
            ...props.todos,
            {text: props.inputText, completed: false, id: Math.random()*1000}
        ]);
        props.setInputText("");
    }

    function submitTodoHandlerOnEnter(e){
        if(e.key==='Enter'){    
            e.preventDefault();
            props.setTodos([
                ...props.todos,
                {text: props.inputText, completed: false, id: Math.random()*1000}
            ]);
            props.setInputText("");
        }
    }
    return (
            <div className={props.lightMode ? "insertComp-light" : "insertComp"}>
                <div onClick={submitTodoHandler} className={props.lightMode ? "circle-light" : "circle"}></div>
                <form className={props.lightMode ? "input-light" : "input"}>
                    <input value={props.inputText} onKeyPress={submitTodoHandlerOnEnter} onChange={inputTextHandler} type="text" id="task" name="task" placeholder="Create a new todo..." />
                </form>
            </div>
    )
}

export default InsertionComponent
