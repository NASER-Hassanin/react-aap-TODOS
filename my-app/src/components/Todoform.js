/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {React,useState} from 'react';
import shortid from 'shortid';
const Todoform = (props) => {
    let[text,setText]=useState("")

    let hndlSubmit=(e)=>{
      e.preventDefault()
      

      props.onSubmit({
          id:shortid.generate(),
          text:text,
          complet:false,
       });
       setText("")
       localStorage.setItem("text",text)
    }
   
    

    return (
        <div>
            <form onSubmit={hndlSubmit}>
                <input className='input-field' type="text" onChange={(e)=>setText(e.target.value)} value={text}></input>
                <button className='btn' onClick={hndlSubmit}>Add Todo</button>
            </form>

            
        </div>
    );
}

export default Todoform;
