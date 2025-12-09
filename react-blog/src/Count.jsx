// function Login({header , body , footer}) {
//     return (
//         <div>
//             <h2>Login User form UserComponent.jsx which is main component</h2>
//             <h3>{header}</h3>
//             <h3>{body}</h3>
//             <h3>{ footer}</h3>
//         </div>
//     )
// }


// export function Hello() {
    //     return "hello form UserComponent.jsx which is normal named export ";
    // }
    
    // export const valueee = "Value comes from UserComponent.jsx which is const named export";
    
    // export default Login;
    
import { useState } from "react"

function Count() {

    let [fruit, setFruit] = useState("Apple")
    const handleFruit = () => {
        setFruit("Banana")
    }
    
    
    return (
        <div>
            <h1>Fruit  : {fruit }</h1>
            <button onClick={handleFruit}>CLick to chnage fruit</button>

        </div>
    )
}

export default Count;