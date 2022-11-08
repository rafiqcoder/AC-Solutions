import React,{ useContext } from "react";
import toast from "react-hot-toast";
import { Link,NavLink } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { user, LogOut } = useContext(UserContext);
  const handleLogout = () => {
    LogOut()
    .then((result) => {
      toast.success("Logged Out Successfully");
    })
  }
  console.log(user);
  return (
    <header className="">
      <div className=" hidden sm:flex navbar bg-base-100 h-[50px] ">
        <div className="navbar-start">
         
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
           AC Solution
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active:" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">My Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/add-service">Add Service</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/login"
            className="btn-outline btn-warning border rounded-r-full rounded-l-full py-[2px] px-3"
          >
            Login
          </NavLink>
          <div className=" content-center justify-center items-center flex">
            
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img alt="" src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="justify-between">{user?.displayName}</span>
                </li>
                <li>
                  <span>Settings</span>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/** Header for Mobile */}
      <MobileHeader></MobileHeader>
    </header>
  );
};

export default Header;
