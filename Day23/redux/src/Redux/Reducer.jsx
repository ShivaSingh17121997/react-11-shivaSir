import React from 'react'
import { DECREMENT, INCREMENT, RESET } from './ActionTypes';

const initialState = {
    count: 0
}

export default function Reducer(state = initialState, action) {

    console.log(state, action.type);

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        case RESET:
            return { count: 0 }
        default:
            return state

    }

}
