import React, { useReducer } from 'react'

export default function CounterWithReducer() {
    // A==>R==>S
    // step 2 define initial state
    const initialState = {
        count: 0,
        todo: [],
        token: null
    }

    // step 3 define reducer function
    const reducer = (state, action) => {

        console.log(state, action)

        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 };
            case "DECREMENT":
                return { count: state.count - 1 }
            case "RESET":
                return { count: 0 }

            default:
                return state

        }

    }

    // step 1 setup userReducer hook
    const [Counter, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>counter with reducer</h1>
            <h1>{Counter.count}</h1>


            <button onClick={() => dispatch({ type: "INCREMENT" })} >+</button>


            <button disabled={Counter.count == 0} onClick={() => dispatch({ type: "DECREMENT" })} >-</button>

            <button onClick={() => dispatch({ type: "RESET" })} >Reset</button>


        </div>
    )
}
