import React from 'react';

const Todo = (props) => {
    return (
        <div className='d-f'>
            <div style={{textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.togglecomplete}>
                
                {props.todo.text}
        
            </div>
            <button className='delete-btn' onClick={props.onDelete}>x</button>
        </div>
    );
}

export default Todo;
