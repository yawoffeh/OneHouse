import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#11324A] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">OnHouse</h3>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} OnHouse. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.4 4.8c-.8.4-1.7.7-2.5.8.9-.5 1.6-1.4 1.9-2.5-.8.5-1.8.9-2.8 1.1-.8-.9-1.9-1.5-3.2-1.5-2.5 0-4.4 2.1-4.4 4.6 0 .3 0 .6.1.9-3.6-.2-6.9-1.9-9.1-4.6-.4.7-.6 1.6-.6 2.5 0 1.7.8 3.1 2 4-.7 0-1.4-.2-2-.5v.1c0 2.3 1.5 4.2 3.5 4.7-.4.1-.9.2-1.4.2-.4 0-.7 0-1-.1.7 2.2 2.7 3.7 5.1 3.7-1.8 1.4-4 2.2-6.4 2.2-.4 0-.8 0-1.2-.1 2.3 1.5 5 2.3 7.9 2.3 9.4 0 14.6-8.1 14.6-15.1 0-.2 0-.4 0-.6 1-.8 1.7-1.6 2.4-2.6z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.8 3.4 8.7 7.9 9.7v-6.9h-2.3V12h2.3v-1.9c0-2.3 1.3-3.5 3.4-3.5.9 0 1.8.1 2.6.2v3h-1.5c-1.2 0-1.6.8-1.6 1.6V12h3.1l-.5 2.8h-2.6v6.9C18.6 20.7 22 16.8 22 12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.5 3h-17C2.7 3 2 3.7 2 4.5v15c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM8.5 18.5h-3v-9h3v9zm-1.5-10.5c-.9 0-1.5-.6-1.5-1.5s.6-1.5 1.5-1.5 1.5.6 1.5 1.5-.6 1.5-1.5 1.5zm11 10.5h-3v-4.7c0-1.1 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.6v4.7h-3v-9h2.9v1.2h.1c.4-.7 1.4-1.4 2.8-1.4 3 0 3.5 2 3.5 4.7v4.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
