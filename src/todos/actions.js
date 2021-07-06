/*This exports the object but not the value inside of it, need to pass this value as
a payload(value) in a function instead*/
export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text},
})