import React from 'react'

export default function Events() {

    const data = [
        { id: 1, name: "ram" },
        { id: 2, name: "ravan"}
         
    ]

    const handleDelete = (id) => {
        console.log(id)
    }


    // const fruits = "apple"

    // if(fruits == "apple"){
    //     console.log("apple is sweet")
    // } else if(fruits == "mango"){
    //     console.log("mango is green")
    // }else {
    //     console.log("nothing found")
    // }

    // conditional rendering

    const loader = () => {
        return <h2>Loading...</h2>
    }

    // !data ? <loader /> : data


    return (
        <div>

            {
                !data ? <h1>Loading...</h1> : (data.map((item) => {
                    return <div key={item.id}  >
                        <ol>
                            <li>{item.id}</li>
                            <li>{item.name}</li>
                        </ol>

                      
                        <button onClick={() => handleDelete({ hello: "hello" })} >delete</button>
                    </div>
                }))
            }

        </div>
    )
}
