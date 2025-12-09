import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

function UserEdit() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUserdata();
  }, []);

  const getUserdata = async () => {
    console.log(id);
    const url = "http://localhost:3000/users/" + id;
    console.log(url);

    let res = await fetch(url);
    res = await res.json();

    setName(res.name);
    setAge(res.age);
    setEmail(res.email);
  };

  const updateUserData = async () => {
    const url = "http://localhost:3000/users/" + id;
    let res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    res = await res.json();
    console.log(res);
    if (res) {
      alert("user data updated");
      navigate("/");    
    }
  };

  return (
    <>
      <h1>User edit page</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />

      <input
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Age"
      />

      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />

      <button onClick={updateUserData}>Update User</button>
    </>
  );
}

export default UserEdit;
