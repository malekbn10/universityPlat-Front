import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react';



export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);


  const useLinkClass = (path: string) => {

let location = useLocation();
// const isActive = (path: string) => location.pathname === path;
const [isActive, setIsActive] = useState(false);
useEffect(() => {
  setIsActive(location.pathname === path);
}, [location.pathname, path]);

return `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
  isActive
    ? 'bg-blue-700 text-white'
    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
}`;
// const linkClass = (path: string) =>
//   `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//     isActive(path)
//       ? 'bg-blue-700 text-white'
//       : 'text-blue-100 hover:bg-blue-700 hover:text-white'
//   }`;

  }
  
  return (

    <nav className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              UniGuide
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className={useLinkClass('/')}>
                  Home
                </Link>
                <Link to="/orientation" className={useLinkClass('/orientation')}>
                  Orientation
                </Link>
                <Link to="/events" className={useLinkClass('/events')}>
                  Events
                </Link>
                <Link to="/contact" className={useLinkClass('/contact')}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
            >
              Home
            </Link>
            <Link
              to="/orientation"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
            >
              Orientation
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>  )
}
