import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Films from "../pages/films";
import Lists from "../pages/lists";
import Members from "../pages/members";

function Navbar() {
  return (
    <Router>
        <nav>
          <div>
            <h1>ReviewBox</h1>
            <Link to="/">Home</Link>
            <Link to="/films">Films</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/members">Members</Link>
          </div>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/members" element={<Members />}/>
        </Routes>
    </Router>
  );
}

export default Navbar;
