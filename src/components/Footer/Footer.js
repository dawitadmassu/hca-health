import React from "react";
import logo2 from "../../assets/images/logo2.png";
import { footerLinks as links } from "../../utils/footerLinks";
import { aboutLinks } from "../../utils/aboutLinks";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full">
      <div className="flex flex-wrap container mx-auto p-4 w-2/3">
        <div className="w-full md:w-1/3">
          <img
            src={logo2}
            alt="HCA Houston Healthcare Logo"
            className="mb-4 h-12"
          />
          <p className="text-sm">HCA Houston Healthcare</p>
          <p className="text-sm">3737 Buffalo Speedway</p>
          <p className="text-sm">Suite 1400</p>
          <p className="text-sm">Houston, TX 77098</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="http://www.blog.com"
              className="bg-primary hover:text-white border-r-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinejoin="round"
                  d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"
                />
              </svg>
            </a>
            <a
              href="http://www.facebook.com"
              className="bg-primary hover:text-white"
            >
              <svg
                className="w-6 h-6 text-primary dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.463.099 2.797.143v3.245h-1.92c-1.504 0-1.794.716-1.794 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.731 0 1.325-.594 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="http://www.instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608C6.517 2.497 7.784 2.226 9.15 2.163c1.265-.058 1.645-.07 4.849-.07m0-2.163C8.737 0 8.332.013 7.052.072 5.675.132 4.402.39 3.365 1.427 2.328 2.465 2.07 3.738 2.01 5.115.951 6.395.938 6.8.938 12s.013 5.605.072 6.885c.06 1.377.318 2.65 1.355 3.687 1.037 1.037 2.31 1.295 3.687 1.355 1.28.059 1.685.072 6.885.072s5.605-.013 6.885-.072c1.377-.06 2.65-.318 3.687-1.355 1.037-1.037 1.295-2.31 1.355-3.687.059-1.28.072-1.685.072-6.885s-.013-5.605-.072-6.885c-.06-1.377-.318-2.65-1.355-3.687C20.65.39 19.377.132 18 .072 16.72.013 16.315 0 12 0z" />
                <path d="M12 5.838c-3.409 0-6.162 2.753-6.162 6.162S8.591 18.162 12 18.162 18.162 15.409 18.162 12 15.409 5.838 12 5.838zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a
              href="http://www.twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v18H3V3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-accent text-white  p-4 ">
        <div className="flex flex-col md:flex-row w-2/3 mx-auto justify-between">
          <div>
            <p className="inline-block">
              © 1999-{currentYear} C-HCA, Inc: All rights reserved.
            </p>
          </div>
          <div>
            {links.map((link, index) => (
              <span key={index}>
                <a href={link.url} className="footer-link">
                  {link.label}
                </a>
                {index < links.length - 1 && " | "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
