/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link } from "react-router-dom";
import style from "./header.module.css";
import { TfiUser } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { setUser } from "../../../redux/users/userSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    <div className={style.container}>
      <div className={`navbar p-0 z-50  ${style.nav}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/books">All Books</Link>
              </li>
              {!user?.email ? (
                <>
                  {" "}
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <Link to="/add-new-book">Add New Book</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/my-reading-list">Reading List</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link to="/login">Log Out</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold text-cyan-600">
            Books Center
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/books">All Books</Link>
            </li>
            {!user?.email ? (
              <>
                {" "}
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link to="/add-new-book">Add New Book</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/my-reading-list">Reading List</Link>
                </li>
                <li onClick={handleLogout}>
                  <Link to="/login">Log Out</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <div className="bg-gray-300 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">
                <TfiUser className="text-2xl" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
