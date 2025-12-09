import { Routes , Route ,Link} from 'react-router'
import About from './About'
import Nav from './Nav'
import Home from './Home'
import College from './College'
import Student from './Student'
import Department from './Department'
import CollegeDetails from './CollegeDetails'
import User from './User'
import UserDetails from './UserDetails'

function App() {

  return (
    <>
      {/* <Nav /> */}

      {/* <Routes>
        <Route element={<Nav />}>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>
        <Route path="/about" element={<About />} />

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collegedetail" element={<CollegeDetails />} />
        </Route>

        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes> */}
      
    </>
  );
}

export default App
