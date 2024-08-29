import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADDTODODATA, GETTODODATA } from '../Redux/ActionTypes';

export default function Home() {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const todoData = useSelector((store) => store.todo)


    console.log("data coming from store", todoData)


    const handleAddTask = () => {
        dispatch({ type: ADDTODODATA, payload: todo })
        setTodo("");
    }

    useEffect(() => {
        fetch("http://localhost:8000/tasks")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: GETTODODATA, payload: data }) // data is transfered to the store at global level
            })
            .catch((err) => console.log("Something is wrong", err))

    }, [])

    return (
        <div>
            <h1>Todo app with redux</h1>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Add task' />
            <button onClick={handleAddTask} > Add</button>

            {/* show data */}

            <div>
                {
                    todoData.map((item, i) => {
                        return <div key={item.id} style={{ border: "1px solid black", margin: "10px", backgroundColor: "#acdbff" }} >
                            <p>{`Id : ${item.id}`}</p>
                            <h3>{` Task : ${item.todo}`}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
