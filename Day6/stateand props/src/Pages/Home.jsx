import React from 'react'
import Card from './Card'

export default function Home() {


    let student = [
        { name: "babalu", id: 1 },
        { name: "dabalu", id: 2 },
        { name: "sabalu", id: 3 }

    ]

    return (
        <div>
            {
                student.map((item) => <Card {...item} key={item.id} />)
            }

        </div>
    )
}
