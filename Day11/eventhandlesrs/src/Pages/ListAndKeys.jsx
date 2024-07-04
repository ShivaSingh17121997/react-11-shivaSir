import React, { useState } from 'react'
let fruits = [
    {id:1, fruit: "apple" },
    {id:2, fruit: "banana" },
    {id:3, fruit: "strawberry" },
    {id:4, fruit: "guava" },
    {id:5, fruit: "grapes" },
    {id:6, fruit: "mango" },
    {id:7, fruit: "pineapple" },
    {id:8, fruit: "chiku" },
]

export default function ListAndKeys() {



    const [data, setData] = useState(fruits)
    console.log(data)


    //delete fun
    const handleDelete = (id) => {
        const deleteVal = data.filter((item) => item.id !== id)
        setData(deleteVal)

    }


    return (
        <div>
            <h5>List and keys</h5>

            {
                data.map((item, i) => {
                    return <div key={i}>
                        <ul>
                            <li>{i}</li>
                            <li>{item.fruit}</li>
                            <button onClick={() => handleDelete(item.id)} >delete</button>
                        </ul>



                    </div>
                })
            }


        </div>
    )
}
