import './App.css';
import InsertionComponent from './Components/InsertionComponent';
import Title from './Components/Title';
import TodoList from './Components/TodoList';
import React, {useState, useEffect} from 'react';

function App() {
  const [lightMode, setLightMode]= useState(false);
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([
    {text: "Complete online JavaScript course", completed: true, id: 1 },
    {text: "Jog around the park 3x", completed: false, id: 2},
    {text: "10 minutes meditation", completed: false, id: 3},
    {text: "Read for 1 hour", completed: false, id: 4},
    {text: "Pick up groceries", completed: false, id: 5},
    {text: "Completed Todo App on Frontend Mentor", completed: false, id: 6}
  ])
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  
  useEffect(() => {
    function filterHandler(){
      switch(status){
        case "completed" :
          setFilterTodos(todos.filter(todo => todo.completed===true));
          break;
        case "active" :
          setFilterTodos(todos.filter(todo => todo.completed===false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    }

    filterHandler()
  }, [todos, status])

  function toggleTheme(){
    if(lightMode===false){
      setLightMode(true)
    }

    else{
      setLightMode(false)
    }
  }
  return (
    <div className={lightMode? "mainContainer-light" : "mainContainer"}>
      <Title 
      toggleTheme={toggleTheme} 
      lightMode={lightMode} />

      <InsertionComponent 
      lightMode={lightMode} 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos}/>

      <TodoList 
      lightMode={lightMode}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      status={status}
      filterTodos={filterTodos}/>
    </div>
  );
}

export default App;
