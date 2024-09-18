import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO_DATA, DELETE_TODO_DATA, GET_TODO_DATA, SORTBYASC, SORTBYDESC, UPDATE_TODO_DATA } from '../Redux/ActionType';



// debouncing function 
function debounce(func, wait) {
    let timeout;

    return function (...args) {
        console.log(args, "args from debounce function")
        console.log(this)
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};


export default function Todo() {
    const [todoData, setTodoData] = useState("");
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null)
    const [search, setSearch] = useState("");
    const showData = useSelector(store => store.todo);

    // Debounced search handler
    const handleSearch = useCallback(debounce((query) => {
        axios.get(`http://localhost:8000/products?q=${query}`)
            .then((data) => {
                dispatch({ type: GET_TODO_DATA, payload: data.data });
            })
            .catch((err) => console.log(err));
    }, 300), [dispatch]);



    // post data
    const handleTodo = (e) => {
        e.preventDefault();
        if (!todoData) {
            alert("Enter the task first")
            return;
        }

        if (editId) {
            // updat logic
            axios.patch(`http://localhost:8000/todo/${editId}`, {
                todo: todoData
            }).then((res) => {
                console.log(res.data)
                dispatch({ type: UPDATE_TODO_DATA, payload: res.data })

                alert("data updated successfully")
            })

            setEditId(null)

            // update logic end

        } else {
            // add logic
            axios.post("http://localhost:8000/todo", {
                todo: todoData  // string 
            })
                .then((data) => {
                    dispatch({ type: ADD_TODO_DATA, payload: data.data }) // action obj
                    console.log(data)
                })
                .catch((err) => console.log(err));
        }
        setTodoData("");
    };

    // updte the search state and invoke debounced search handler
    const onSearchChange = (e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    // get data

    useEffect(() => {
        axios.get(`http://localhost:8000/products`)
            .then((data) => {
                console.log("get data", data.data)
                dispatch({ type: GET_TODO_DATA, payload: data.data }) //action
            });

    }, []);

    // delte


    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/products/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_TODO_DATA, payload: id })
                console.log("data deleted successfully")
            })
    }

    // edit fun

    const handleEdit = (item) => {

        console.log(item);
        setEditId(item.id)
        setTodoData(item.todo)
    }


    // sorting

    const handleAsc = () => {
        let AscSortedData = showData;

        AscSortedData.sort((a, b) => a.price - b.price)

        dispatch({ type: SORTBYASC, payload: AscSortedData })

    }

    const handleDesc = () => {
        let AscSortedData = showData;

        AscSortedData.sort((a, b) => b.price - a.price)

        dispatch({ type: SORTBYDESC, payload: AscSortedData })

    }

    return (
        <div>
            <h1>Todo App</h1>

            {/* Searching */}
            <div>
                <input
                    value={search}
                    onChange={onSearchChange}
                    type="text" placeholder='Search todo'
                />
            </div> <br /><br />



            {/* sorting */}
            <div>
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc}>Desc</button>
            </div> <br /><br />

            <form onSubmit={handleTodo} >
                <div>
                    <input value={todoData} onChange={(e) => setTodoData(e.target.value)} type="text" placeholder='Enter Todo' />

                    <button>Add</button>


                </div>
            </form>


            <div>
                {
                    showData.map((item, i) => {
                        return <div key={i}>
                            {/* <h4>{`Task : ${item.todo}`}</h4> */}

                            <img width="100px" height="100px" src={item.image} alt="" />
                            <p>{item.id}</p>
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                            <p>{item.category}</p>





                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            <button onClick={() => handleEdit(item)} >Edit</button>
                        </div>
                    })
                }
            </div>



        </div>
    )
}
