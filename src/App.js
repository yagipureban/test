import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom";
import "./App.css";
import Home from './home'
import MessageBoard from './messageBoard'
import Posts from './posts/index'

function App () {
  return (
    <Router>
      <div className="top-f">
        <div className="top">
          <div className="nav-list">
            <NavLink to="/index" className="link">Home Page</NavLink>
            <NavLink to="/message-board" className="link">Message Board</NavLink>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/index" element={<Home />}></Route>
        <Route path="/message-board" element={<MessageBoard />}></Route>
        <Route path="/posts/:id" element={<Posts />}></Route>
        <Route path="*" element={<Navigate to="/index" />} />
      </Routes>
    </Router>
  );
}

export default App;
