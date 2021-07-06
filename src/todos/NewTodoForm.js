import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

//add mapping and dispatch from below
const NewTodoForm = ({ todos, onCreatePressed }) => {
    //we use useState to keep track of button
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
            //set the value to whatever the new value is
            onChange={e => setInputValue(e.target.value)} />

        <button
        /*Onclick we check if the value is a duplicate. If not we call
        create pressed and create a new todo with the new text value*/ 
        onClick={() => {
            const isDuplicateText =
                todos.some(todo => todo.text === inputValue);
            if (!isDuplicateText) {
                onCreatePressed(inputValue);
                setInputValue('');
            }
        }}
        className="new-todo-button">
        Create Todo
        </button>
        </div>
);
};

//object which monitors entire redux state(only todos atm but can be many more)
const mapStateToProps = state => ({
    todos: state.todos,
});

/*uses dispatch instead of redux state. Allows for actions to be triggered which 
store will respond to. We want to trigger reaction on button click "createTodo" */
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});


//need to connect this form and the redux
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);