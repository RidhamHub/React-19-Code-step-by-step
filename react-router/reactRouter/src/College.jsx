import { Link , NavLink, Outlet } from "react-router";
function College() {
  return (
    <>
      <div className="college" style={{ textAlign: "center" }}>
              <h1>College page</h1>
              <Link to="/">Go back to HomePage</Link>
        <NavLink className="link" to="student">Students</NavLink>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="collegedetail">College Details</NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default College;
