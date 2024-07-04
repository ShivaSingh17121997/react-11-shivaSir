import React, { useState } from 'react'

let fruits = [
    { name: "apple", id: 1 },
    { name: "banana", id: 2 },
    { name: "grapes", id: 3 },
]



export default function Conditional() {

    const [data, setData] = useState(fruits);
    const [loading, setLoading] = useState(true)
    console.log(data)


    function handleClick(id) {
        console.log("i am clicked", id)
    }




    // delete
    const handleDelete = (id) => {
        console.log(id)

        let deleteData = data.filter((item) => item.id !== id)

        setData(deleteData)
    }


    // conditional rendering


    let fruit = "orange"

    if (fruit == "apple") {
        console.log("color is red")
    } else if (fruit == "grapes") {
        console.log("color is black")
    } else if (fruit == "orange") {
        console.log('color is orange')
    } else {
        console.log("fruit not found")
    }


    // fruit === 'orange' ? console.log('color is orange') : console.log('color is not orange')
    // function loader() {
    //     console.log("Loading...")
    // }



    // data ? console.log(data) : loader()





    return (
        <>
            <h1>conditional rendering</h1>

            <button onClick={() => handleClick("id")} >Click me</button>

            {
                data.map((item) => {
                    return <div key={item.id} >
                        <ol>
                            <li>{item.name}</li>
                            <li>{item.id}</li>
                        </ol>


                        <button onClick={() => handleDelete(item.id)} >Delete</button>
                    </div>
                })
            }


        </>
    )
}
