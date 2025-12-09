import { useState } from "react"

function Derived() {

    const [ users , setusers] = useState([])
    const [user , setuser] = useState("")
    
    const hanforusers = () => {
        setusers([...users , user])
    }
  
    
    return (
        <div>
            <h2>TOtal User :{users.length} </h2>
            <h2>last user : {users[users.length-1]} </h2>
            <h2>Uniquie User : {[...new Set(users)].length} </h2>

            <input type="text" onChange={(e)=>setuser(e.target.value)} placeholder="Enter new uer name" />
            <button onClick={hanforusers}>Add User</button>

            {
                users.map((item , index ) => (
                    <h3 key={index}>{item}</h3>
                ) )
            }

        </div>
    )
}

export default Derived