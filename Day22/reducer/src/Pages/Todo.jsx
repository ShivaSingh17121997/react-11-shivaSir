import React, { act, useReducer, useState } from 'react'

// step 2
const initialState = {
    todo: [],

}

console.log(initialState.todo)

// step 3
const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case "ADDTODO":
            return { ...state, todo: [...state.todo, action.payload] }
        default:
            return state
    }

}

export default function Todo() {

    const [input, setInput] = useState("")
    const [checkebox, setCheckbox] = useState(false)
    console.log(input, checkebox)

    // step 1
    const [todoArr, dispatch] = useReducer(reducer, initialState)
    console.log(todoArr, "todoArr")

    const handleAdd = () => {
        dispatch({ type: "ADDTODO", payload: { todoData: input, completed: checkebox } })
        setInput("")
        setCheckbox(false)
    }

    return (
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your task' />

                <label >
                    <input checked={checkebox} onChange={(e) => setCheckbox(e.target.checked)} type="checkbox" />
                    Completed
                </label>
                <button onClick={handleAdd} >Add</button>
            </div>

            <div>
                {todoArr.todo.map((item) => {
                    return <div>
                        <h1>{item.todoData}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}
