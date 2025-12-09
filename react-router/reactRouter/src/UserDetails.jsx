import { useParams } from "react-router"
import { Link } from "react-router"
function UserDetails() {
    
    const paramsdata =useParams()


    return (
        <>
            <h1>User detail page</h1>
            <h2>User id :  {paramsdata.id}</h2>
            <h3><Link to="/user">GO to User</Link></h3>
        </>
    ) 
}

export default UserDetails