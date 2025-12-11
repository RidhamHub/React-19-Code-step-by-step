import { Link, NavLink, Outlet } from "react-router";
function College() {
  return (
    <>
      <div classNameName="college" style={{ textAlign: "center" }}>
        <h1>College page</h1>
        <Link to="/">Go back to HomePage</Link>
        <NavLink classNameName="link" to="student">
          Students
        </NavLink>
        <NavLink classNameName="link" to="department">
          Department
        </NavLink>
        <NavLink classNameName="link" to="collegedetail">
          College Details
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default College;
