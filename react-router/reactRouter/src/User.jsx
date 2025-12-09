import { Link } from "react-router";
function User() {

    const userdata = [
      { id: 1, name: "Ridham" },
      { id: 2, name: "Darshan" },
      { id: 3, name: "Badal" },
      { id: 4, name: "Rishi" },
    ];
    return (
        <div>
            <h1>User PAgeeeee</h1>
            {
                userdata.map((item) => (
                    <div>
                        <h4><Link to={"/user/"+item.id}>{ item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}

export default User;