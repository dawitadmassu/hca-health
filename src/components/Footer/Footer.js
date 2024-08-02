import React from "react";
import logo2 from "../../assets/images/logo2.png";
import { footerLinks as links } from "../../utils/footerLinks";
import { aboutLinks } from "../../utils/aboutLinks";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full">
      <div className="flex flex-wrap container mx-auto p-4 w-2/3">
        <div className="w-full md:w-1/3 mt-4">
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

        <div className="w-full md:w-1/3 mt-4">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
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

        <div className="w-full md:w-1/3 mt-4">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="http://www.blog.com">
              <i class="fas fa-bold  text-white bg-primary rounded-full p-2"></i>
            </a>
            <a href="http://www.facebook.com">
              <i className="fab fa-facebook fa-2x text-primary"></i>
            </a>
            <a href="http://www.instagram.com">
              <i className="fab fa-instagram fa-2x text-primary"></i>
            </a>
            <a href="http://www.twitter.com">
              <i className="fab fa-twitter fa-2x text-primary"></i>
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-accent text-white  p-4 ">
        <div className="flex flex-col md:flex-row w-2/3 mx-auto justify-between ">
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
