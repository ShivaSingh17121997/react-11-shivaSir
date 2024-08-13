import React from 'react'
import { useReducer } from 'react'

// action --> reducer --> updatedstore
export default function UseReducer() {
    const initialState = {
        count: 0
    }


    // reducer 
    const reducer = (state, action) => {
        console.log(action, state)

        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 }
            case "DECREMENT":
                return { count: state.count - 1 }
        }
    }
    const [counter, dispatch] = useReducer(reducer, initialState)

    // console.log(state.count)

    return (
        <div>

            <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>


            <button>{counter.count}</button>



            <button onClick={() => dispatch({ type: "DECREMENT" })}  >Decrement</button>

        </div>
    )
}
