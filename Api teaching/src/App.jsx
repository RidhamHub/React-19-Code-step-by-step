import Edit from "./UserEdit";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route, NavLink } from "react-router";
import UserEdit from "./UserEdit";

function App() {

  
 
  return (
    <>
      <div>
        <ul className="navlist">
          <li>
            <NavLink to="/"> List </NavLink>
          </li>
          <li>
            <NavLink to="/add"> Add User</NavLink>
          </li>
        </ul>

        <h1>User list and you can add user also </h1>
        {/* <UserList /> */}
        {/* <UserAdd />  */}

        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/add" element={<UserAdd />}></Route>
          <Route path="/edit/:id" element={<UserEdit />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
