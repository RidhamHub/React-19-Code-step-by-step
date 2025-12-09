
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';



  
function UserList() {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true)
    getUserData();
  } , []);

const getUserData = async () => {
  const url = "http://localhost:3000/users";
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
  setUserData(res)
  setLoading(false)
  };
  
  const deleteUser = async (id) => {
    console.log(id)
    const url = "http://localhost:3000/users";
    let res = await fetch(url + "/" + id, {
      method : "DELETE"
    });
    res = await res.json();

    if (res) {
      alert("Record deleted")
      getUserData()
    }

  }
  
  const editUser = async (id) => {
    navigate("/edit/"+  id)
  }

  return (
    <>
      <div>
        {/* <h1>Hello</h1> */}
        <h1>API user add list </h1>
        {!loading ? (
          userData.map((user) => (
            <ul key={user.name}>
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
              <li>
                {" "}
                <button onClick={() => deleteUser(user.id)}>Delete</button>{" "}
              </li>
              <li>
                {" "}
                <button onClick={() => editUser(user.id)}>Edit</button>{" "}
              </li>
            </ul>
          ))
        ) : (
          <h1>Data Loading...</h1>
        )}
      </div>
    </>
  );
}

export default UserList; 
