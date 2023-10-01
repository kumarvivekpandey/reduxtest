
import { useState } from 'react';
import './App.css';

function App() {
  const[todos,Settodos]= useState([])
  const[value, setInputVal] =useState("")
  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addtodo(){
   if(value !== ""){
    Settodos((prevTodos) => [...prevTodos,value])
   setInputVal("");
   
   }
 
  }
  console.log(todos)
  function deltodo(todosIndex){
    Settodos((prevTodos) =>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex !== todosIndex;
    })
    );
  }
  return (
    <div className="App">
     <h1> toDo App</h1>
     <input type="text" placeholder="enter the text" value={value} onChange={writeTodo}/>
     <button className='button' onClick={addtodo}>+</button>
     <div className="conatainer">

     {
  todos.map((todos,index)=>{
    return(
    <div className="conatiner textc" key={index}>
         <p><input type="checkbox"/>{todos}
         <button onClick={()=>deltodo(index)}>Delete</button></p> 
    </div>
    )
  })
}
</div>
</div>
  );
}
 
export default App;
