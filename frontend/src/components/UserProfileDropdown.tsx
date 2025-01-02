import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const UserProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate()
  const Logout = () => {
    localStorage.clear()
    navigate('/')

  }

  return (
    <div className="relative ">
      {/* Avatar button */}
      {/* <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="User dropdown"
      /> */}

      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg id="avatarButton" onClick={toggleDropdown} className="absolute w-12 h-12 text-gray-400 -left-1 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" ></path></svg>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-0 mt-2 "
        >
          <div className="px-4 py-3 text-sm text-gray-900 ">
            <div>{user.name}</div>
            <div className="font-medium truncate">{user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 " aria-labelledby="avatarButton">
          <li>
              <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100 ">
                Dashbord
              </Link>
            </li>

            <li>
              <Link to={'/yourPosts'} className="block px-4 py-2 hover:bg-gray-100 ">
                Your Blogs
              </Link>
            </li>
           
           
          </ul>
          <div onClick={Logout} className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
