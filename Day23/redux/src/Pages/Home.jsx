import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from '../Redux/ActionTypes';


export default function Home() {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.count) // use to access data from store we use useSelctor hook


    return (
        <div>
            <h1>Counter with Redux</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: DECREMENT })} >Decrement</button>

            <button onClick={() => dispatch({ type: INCREMENT })}  >Increment</button>

            <button onClick={() => dispatch({ type: RESET })} >Reset</button>

        </div>
    )
}
