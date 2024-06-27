import React from 'react'

export default function Card({ name, id }) {
    console.log(name, id)


    return <div key={id}>
        <p>{id}</p>
        <h1>{name}</h1>

    </div>

}
