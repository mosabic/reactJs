//controlles the state of our actions
//any time any action is called the reducer is called
//state is array of objects, action triggered(type and payload)
//reducers decide what changes need to be made 
import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state=[], action) =>{
    const {type, payload} = action;
    switch(type){
        case CREATE_TODO:{
            const {text} = payload;
            const newTodo={
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        //remove the todo which doesnt match the todo in action payload
        case REMOVE_TODO:{
            const {text} = payload;
            return state.filter(todo=>todo.text!==text);
        }
        default:
            return state;
    }
}