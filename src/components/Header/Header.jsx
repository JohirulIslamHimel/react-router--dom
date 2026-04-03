import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>This is header component</h3>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/">Home</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
