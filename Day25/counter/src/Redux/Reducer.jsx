import React, { act } from 'react'
import { ADD_TODO_DATA, DECREMENT, DELETE_TODO_DATA, GET_TODO_DATA, INCREMENT, RESET, SORTBYASC, SORTBYDESC, UPDATE_TODO_DATA } from './ActionType'

const initialState = {
    todo: [],
    count: 0,
    products: []
}

export default function Reducer(state = initialState, action) {
    // console.log(action.type)
    // console.log("action haiye iska payload dekhan hai",action.payload)
    switch (action.type) {
        case DECREMENT:
            return { ...state, count: state.count - 1 }

        case INCREMENT:
            return { ...state, count: state.count + 1 }

        case RESET:
            return { ...state, count: 0 }

        // todo

        case ADD_TODO_DATA:
            return { ...state, todo: [...state.todo, action.payload] };

        case GET_TODO_DATA:
            return { ...state, todo: action.payload };

        case DELETE_TODO_DATA:
            return { ...state, todo: state.todo.filter((item) => item.id !== action.payload) }

        case UPDATE_TODO_DATA:
            return {
                ...state, todo: state.todo.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }


        // products

        case SORTBYASC:
            return { ...state, todo: [...action.payload] }

        case SORTBYDESC:
            return { ...state, todo: [...action.payload] }


        default:
            return state
    }

}


