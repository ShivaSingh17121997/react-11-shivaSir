import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

    const [studentData, setStudentData] = useState([]);
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [isMarried, setIsMarried] = useState(false);
    const [editId, setEditId] = useState(null)
    console.log("editId", editId)

    // get 

    const fetchedData = () => {
        fetch("http://localhost:8000/students")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setStudentData(data)
            })
            .catch((err) => { console.log("data not found") })
    }

    useEffect(() => {
        fetchedData()
    }, [])



    // post data in jsonserver

    const handleAddData = (e) => {
        e.preventDefault();


        if (editId) {
            fetch(`http://localhost:8000/students/${editId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    name: name,
                    age: age,
                    isMarried: isMarried
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }

            })
                .then(res => {
                    console.log("data updated successfully", res)
                    fetchedData()
                })


        } else {
            fetch("http://localhost:8000/students", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    age: age,
                    isMarried: isMarried
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(res => {
                    console.log(res)
                    alert("data added successfully")
                    fetchedData()

                })
        }

        setName("")
        setAge("")
        setIsMarried(false)
        fetchedData()

    }



    // delete function 
    const handleDelete = (id) => {
        // console.log(id)
        fetch(`http://localhost:8000/students/${id}`, {
            method: "DELETE"
        }).then((res) => {
            console.log("data deleted successfully", res)
            fetchedData()
        })

    };


    // edit

    const handleEdit = (item) => {
        // console.log("data mil gaya", item)
        setEditId(item.id)
        setName(item.name)
        setAge(item.age)
        setIsMarried(item.isMarried)

    }





    return (
        <div>
            {/* adding the data */}
            <div>
                <form onSubmit={handleAddData} >
                    <input type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />


                    <input type="number" placeholder='enter age' value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />

                    <label >
                        <input type="checkbox" checked={isMarried} onChange={() => setIsMarried(!isMarried)} />
                        Married
                    </label> <br />
                    <button>{editId ? "Update " : "Add"}</button>


                </form>

            </div>
            <hr />


            {/* getting the data */}
            <div>
                {
                    studentData.map((item) => {
                        return <div key={item.id}>
                            <p>id:{item.id}</p>
                            <h3>name: {item.name}</h3>
                            <p>age :{item.age}</p>
                            <p>Marrid: {item.isMarried ? "Married" : "Unmarried"}</p>

                            <button onClick={() => handleDelete(item.id)} >Delete</button>

                            <button onClick={() => handleEdit(item)} >Edit</button>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
