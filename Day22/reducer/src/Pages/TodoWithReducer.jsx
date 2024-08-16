import React, { useReducer, useState } from 'react'


// reducer ==>    const [dispatch, todoData] = useReducer(reducer, initial state)

// action ==> reducers ==> update(ododAta)/state  ARS




export default function TodoWithReducer() {
    //2
    const initalState = {
        todo: []
    }


    //3 // state is initial state, action is an object{}
    const reducer = (state, action) => {
        console.log(state, "action", action)

        switch (action.type) {
            case "ADDTODO":
                return { ...state, todo: [...state.todo, action.payload] }
            default:
                return state
        }

    }

    // 1 
    const [todoData, dispatch] = useReducer(reducer, initalState);
    console.log("tododata", todoData)

    const [id, setId] = useState("")
    const [inputVal, setInputVal] = useState("")
    const [completed, setCompleted] = useState(false)




    return (
        <div>

            <div>

                <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder='Enter the  uniqueid' />

                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text" placeholder='Enter your task' />

                <label >
                    <input checked={completed} onChange={(e) => setCompleted(e.target.checked)} type="checkbox" />
                    Completed
                </label>

                <button onClick={() => dispatch({ type: "ADDTODO", payload: { id,inputVal, completed } })} >Add</button>
            </div>

            {/* show data in ui */}
            <div>
                {
                    todoData.todo.map((item) => {
                        return <div key={item.id}>
                            <p>{item.id}</p>
                            <h1>{item.inputVal}</h1>
                            <p>completed: {item.completed ? "Done" : "In Process"}</p>
                            <button >Delete</button>
                        </div>
                    })
                }
            </div>




        </div>
    )
}