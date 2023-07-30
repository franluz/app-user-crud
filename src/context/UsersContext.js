import React, { createContext, useReducer } from 'react'
import users from '../data/user'
const UsersContext = createContext({})
const initialState = { users }
const actions = {
    updateUser(state,action){
        const updated = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === updated.id ? updated : u)
        }
    },
    createUser(state, action) {
        const user = action.payload
        console.warn(user)
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user],
        }
    },
    deleteUser(state, action) {
        let user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }

    }
}
export const UsersProvider = props => {
    function reducer(state, action) {
        let fn = actions[action.type]
        return fn ? fn(state, action) : state
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<UsersContext.Provider value={{ state, dispatch }}>
        {props.children}
    </UsersContext.Provider>)
}
export default UsersContext