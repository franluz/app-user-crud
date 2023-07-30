import React, { createContext, useReducer } from 'react'
import users from '../data/user'
const UsersContext = createContext({})
const initialState = { users }
const actions = {
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