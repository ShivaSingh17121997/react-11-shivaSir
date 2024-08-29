import React from 'react'
import { ADDTODODATA, GETTODODATA } from './ActionTypes'

const initialState = {
    todo: [],
    count: 0
}

export default function Reducer(state = initialState, action) {

    switch (action.type) {
        case ADDTODODATA:
            return {
                ...state,
                todo: fetch("http://localhost:8000/tasks", {
                    method: "POST",
                    body: JSON.stringify({
                        todo: action.payload
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
            }

        case GETTODODATA:
            // data is globally stored 
            return { ...state, todo: action.payload }
        default:
            return state
    }


}
