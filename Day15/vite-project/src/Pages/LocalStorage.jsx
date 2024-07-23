import React from 'react'

export default function LocalStorage() {

    // localStorage.setItem("name", "Ram")
    // localStorage.setItem("Rname", "Ravan")

    // let ramName = localStorage.getItem("name")
    // console.log(ramName)

    // localStorage.removeItem("Rname")
    // localStorage.clear()


    sessionStorage.setItem("avatar", "krishn");
    sessionStorage.setItem("Fighter", "Duryodhan")

    let getdAta = sessionStorage.getItem("avatar")
    console.log(getdAta);

    sessionStorage.removeItem("Fighter")

    sessionStorage.clear()




    return (
        <div>
            <h3>Learning local storage</h3>





        </div>
    )
}
