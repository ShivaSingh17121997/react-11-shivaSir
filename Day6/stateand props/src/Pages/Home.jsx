import React, { useEffect } from 'react'
import Card from './Card'
// nested component
export default function Home() {


    let student = [
        { name: "babalu", id: 1 },
        { name: "dabalu", id: 2 },
        { name: "sabalu", id: 3 }

    ]



    // life cycle method  // function lifecycle method mange karne ka kam kartahai hook == useEffect Hook 

    return (
        <div>
            {
                student.map((item) => <Card key={item.id}  {...item} />)
            }

        </div>
    )
}
