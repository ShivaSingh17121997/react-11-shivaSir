import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADDTODODATA, DELETETODODATA, GETTODODATA } from '../Redux/ActionTypes';

export default function Home() {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const todoData = useSelector((store) => store.todo)


    // const handleAddTask = () => {
    //     fetch("http://localhost:8000/tasks", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             todo: todo
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //         .then((data) => {
    //             console.log(data, "data is comming from home add data")
    //             dispatch({ type: ADDTODODATA, payload: data })
    //         })

    //     setTodo("");
    // }

    const handleAddTask = () => {
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            body: JSON.stringify({ todo }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Extract JSON from the response
            })
            .then((data) => {
                dispatch({ type: ADDTODODATA, payload: data }); // ==> reducer always
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

        setTodo(""); // Clear the input field after the fetch request
    };


    useEffect(() => {
        fetch("http://localhost:8000/tasks")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: GETTODODATA, payload: data }) // data is transfered to the store at global level
            })
            .catch((err) => console.log("Something is wrong", err))

    }, [])


    // delete function

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/tasks/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: DELETETODODATA, payload: id }) // action is an object
                console.log(data)
            })
            .catch((err) => console.log("sometning is wrong", err))// catch is use to catch error error handeling

    }

    // handle edit

    const handleEdit = () => {

    }

    return (
        <div>
            <h1>Todo app with redux</h1>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Add task' />
            <button onClick={handleAddTask} > Add</button>

            {/* show data */}

            <div>
                {
                    todoData.map((item, i) => {
                        return <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px", backgroundColor: "#acdbff" }} >
                            <p>{`Id : ${item.id}`}</p>
                            <h3>{` Task : ${item.todo}`}</h3>
                            <button onClick={() => handleDelete(item.id)}  >Delete</button>
                            <button onClick={handleEdit} > Edit</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
