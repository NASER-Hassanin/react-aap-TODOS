/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import  {React,useState} from 'react'; 
 import './App.css';
import Todo from './components/Todo';
import Todoform from './components/Todoform';


function App() {
  let [todos,setTodos]=useState([])
  let [TodotoShow,setTodotoShow]=useState("ALL")
  let [toggleAllcomplete ,settoggleAllcomplete]=useState(true)
  let hndelTodo=(todo)=>{
    setTodos([todo,...todos])
  
  };
  function hndelDelet(id){
    setTodos(todos.filter((todo)=>todo.id !==id))
  }
  


  const updeteTodotoShow=(d)=>{
    setTodotoShow(d)
  };
  const removeAllTodoscomplete=()=>{
    setTodos(todos.filter((todo)=> !todo.complete))

  }

  const togglecomplete=(id)=>{
   setTodos( todos.map((todo)=>{
       if(todo.id===id){
        return{
          ...todo,
          complete:!todo.complete,
        } 
      }else{

           return todo;
       }
      })
  
   )
  };

  if(TodotoShow ==="Active"){
    todos=todos.filter((todo)=> !todo.complete)

   }else if(TodotoShow==="complete"){
    todos= todos.filter((todo)=> todo.complete)

   }

  return (
    <div className='container'>
    <Todoform  onSubmit={hndelTodo}/>

  
    {
      todos.map((todo)=>(<Todo key={todo.id} todo={todo} onDelete={()=>hndelDelet(todo.id)}  togglecomplete={()=>togglecomplete(todo.id)}/>))
    }
    <div>
      <button className='btn update-btn'onClick={()=> updeteTodotoShow("All")}>All</button>
      <button className='btn update-btn'onClick={()=> updeteTodotoShow("Active")}>Active</button>
      <button className='btn update-btn'onClick={()=> updeteTodotoShow("complete")}>complete</button>
      
      
    </div>
        
       {
        
        todos.some((todo)=>todo.complete)?(
        <button className='btn all-btn' onClick={removeAllTodoscomplete}>Remove all complete todos</button>

        ):null
       }
        <button className='btn all-btn' onClick={ ()=> {
            setTodos(todos.map((todo)=>({
            ...todo,
            complete:toggleAllcomplete,
             })
             )
             
             );
             settoggleAllcomplete(!toggleAllcomplete)
           }}
        
        >Toggle all complete :{`${toggleAllcomplete}`}</button>
    
    
        
          </div>
  );
}

export default App;
