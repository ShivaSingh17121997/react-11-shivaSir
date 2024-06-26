import { useState } from "react";

function Theme() {

    const [theme, setTheme] = useState(false)


    const handleThemeChange = () => {
        setTheme(!theme)
    }

    return <div style={{ backgroundColor: theme ? "black" : "white", height: "100vh" }}>
        <h1 style={{ color: theme ? "white" : "black" }} >Learning states and props </h1>
        <button onClick={handleThemeChange}>Theme</button>

    </div>


}

export default Theme;