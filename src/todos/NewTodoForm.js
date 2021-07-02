import React, {useState} from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    //we use useState to keep track of button
    const[inputValue, setInputValue] = useState('');
    return(
    <div className="new-todo-form">
        <input 
            className="new-todo-input" 
            type="text" 
            placeholder="type new todo here"
            value={inputValue}
            //set the value to whatever the new value is
            onChange={e => setInputValue(e.target.value)}/>
        <button className="new-todo-button">Create Todo Item</button>
    </div>
    );
};

export default NewTodoForm;