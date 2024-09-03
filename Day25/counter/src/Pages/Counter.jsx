import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from '../Redux/ActionType';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.count);
    console.log(count, "count")


    return (
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button disabled={count <= 0} onClick={() => dispatch({ type: DECREMENT })} >Decrement</button>

            <button onClick={() => dispatch({ type: INCREMENT })} >Increment</button>

            <button disabled={count <= 0} onClick={() => dispatch({ type: RESET })} >Reset</button>
        </div>
    )
}
