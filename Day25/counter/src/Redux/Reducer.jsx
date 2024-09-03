import React from 'react'
import { DECREMENT, INCREMENT, RESET } from './ActionType'

const initialState = {
    count: 0
}

export default function Reducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case DECREMENT:
            return { ...state, count: state.count - 1 }

        case INCREMENT:
            return { ...state, count: state.count + 1 }

        case RESET:
            return { ...state, count: 0 }

        default:
            return state
    }

}
