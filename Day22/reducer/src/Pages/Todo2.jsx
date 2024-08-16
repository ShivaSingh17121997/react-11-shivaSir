import React, { useReducer } from 'react';

// Initial state for todos and input fields
const initialState = {
    todo: [],
    id: '',
    inputVal: '',
    completed: false
};

// Reducer function to handle actions
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDTODO':
            return {
                ...state,
                todo: [...state.todo, { id: state.id, inputVal: state.inputVal, completed: state.completed }],
                id: '',
                inputVal: '',
                completed: false
            };
        case 'SET_ID':
            return { ...state, id: action.payload };
        case 'SET_INPUT_VAL':
            return { ...state, inputVal: action.payload };
        case 'TOGGLE_COMPLETED':
            return { ...state, completed: !state.completed };
        case 'DELETE_TODO':
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default function Todo2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handler for adding a new todo
    const handleAddTodo = () => {
        if (state.id && state.inputVal) {
            dispatch({ type: 'ADDTODO' });
        }
    };

    return (
        <div>
            <div>
                <input
                    value={state.id}
                    onChange={(e) => dispatch({ type: 'SET_ID', payload: e.target.value })}
                    type="text"
                    placeholder='Enter the unique ID'
                />
                <input
                    value={state.inputVal}
                    onChange={(e) => dispatch({ type: 'SET_INPUT_VAL', payload: e.target.value })}
                    type="text"
                    placeholder='Enter your task'
                />
                <label>
                    <input
                        checked={state.completed}
                        onChange={() => dispatch({ type: 'TOGGLE_COMPLETED' })}
                        type="checkbox"
                    />
                    Completed
                </label>
                <button onClick={handleAddTodo}>Add</button>
            </div>

            {/* Show data in UI */}
            <div>
                {state.todo.map((item) => (
                    <div key={item.id}>
                        <p>ID: {item.id}</p>
                        <h1>{item.inputVal}</h1>
                        <p>Completed: {item.completed ? "Done" : "In Process"}</p>
                        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: item.id })}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
