import { /* useNavigate */ NavLink } from "react-router-dom";
import React from "react"
import "./top.css"

/* function NavList () {
  let navigate = useNavigate();
  return (
    <>
      <span onClick={() => navigate('/index')}>主页</span>
      <span onClick={() => navigate('/messageBoard')}>留言板</span>
    </>

  )
} */

function Nav () {
  return (
    <div className="top">
      <NavLink to="/index" className="link">主页</NavLink>
      <NavLink to="/messageBoard" className="link">留言板</NavLink>
    </div>

  )
}
export default Nav;


