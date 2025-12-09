import { useActionState, useState } from "react";
import { useNavigate } from "react-router";

function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
    console.log(name, age, email);
    let url = "http://localhost:3000/users";
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, email, age }),
    });
    res = await res.json();

    if (res) {
      alert("New user added ");
      navigate("/");
    }
  };


  const handesubmit = (prevData , formData) => {
    let name = formData.get('name')
    let age = formData.get("age");
    let email = formData.get("email");

    
    if (name.length > 5) {
      return {erroe : 'length of name must be > 5'}
    } else if (age < 1) {
      return { erroe: "age  must be > 0 " };
    } else {
      return {message : 'all ok'}
    }


  }

  const [data, action, pending] = useActionState(handesubmit);

  return (
    <>
      <h1>Add new User</h1>
      <div style={{ textAlign: "center" }}>
        <form action={action}>

        <input
            type="text"
            name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Name"
          />
        <input
            type="text"
            name="age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
          placeholder="Age"
        />
        <input
            type="text"
            name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
        />
        <button onClick={createUser} >Add user</button>
        </form>
      </div>
    </>
  );
}

export default UserAdd;
