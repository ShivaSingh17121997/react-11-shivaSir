import React, { useReducer } from 'react';

// Initial state for todos and input fields
const initialState = {
    todo: [],
    id: '',
    inputVal: '',
    completed: false,
    editingId: null // Track which todo is being edited
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
                completed: false,
                editingId: null
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
        case 'START_EDIT':
            const todoToEdit = state.todo.find(item => item.id === action.payload);
            return {
                ...state,
                id: todoToEdit.id,
                inputVal: todoToEdit.inputVal,
                completed: todoToEdit.completed,
                editingId: todoToEdit.id
            };
        case 'SAVE_EDIT':
            return {
                ...state,
                todo: state.todo.map(item =>
                    item.id === state.editingId
                        ? { ...item, inputVal: state.inputVal, completed: state.completed }
                        : item
                ),
                id: '',
                inputVal: '',
                completed: false,
                editingId: null
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

    // Handler for saving the edited todo
    const handleSaveEdit = () => {
        if (state.id && state.inputVal) {
            dispatch({ type: 'SAVE_EDIT' });
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
                    disabled={state.editingId !== null} // Disable when editing
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
                {state.editingId === null ? (
                    <button onClick={handleAddTodo}>Add</button>
                ) : (
                    <button onClick={handleSaveEdit}>Save</button>
                )}
            </div>

            {/* Show data in UI */}
            <div>
                {state.todo.map((item) => (
                    <div key={item.id}>
                        <p>ID: {item.id}</p>
                        <h1>{item.inputVal}</h1>
                        <p>Completed: {item.completed ? "Done" : "In Process"}</p>
                        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: item.id })}>Delete</button>
                        <button onClick={() => dispatch({ type: 'START_EDIT', payload: item.id })}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
