import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: " Todo msg",
            completed: false,
        }
    ],

    // eslint-disable-next-line no-unused-vars
    addTodo:(_todo) => {},
    // eslint-disable-next-line no-unused-vars
    updatedTodo: (_id,_todo) => {},
    // eslint-disable-next-line no-unused-vars
    deleteTodo: (_id) => {},
    // eslint-disable-next-line no-unused-vars
    toggleComplete: (_id) => {}
})

export const useTodo = ()=> {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
