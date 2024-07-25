import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-lightYellow rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Brand Info */}
          <div className="space-y-3 lg:max-w-[300px]">
            <img src="../assets/logo.png" alt="Brand Logo" className="w-24" />
            <p>
              At Food Paradise, we offer a unique culinary experience with
              delicious, freshly prepared meals. Our chefs use the finest
              ingredients to create mouth-watering dishes that will leave you
              coming back for more. Join us and savor the taste of excellence.
            </p>
            <a
              href="mailto:Contact@food.com"
              className="inline-block mt-6 text-sm"
            >
              Contact@food.com
            </a>
          </div>
          {/* Quick Links */}
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-3 mt-6">
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul>
                <li className="footer-link">Home</li>
                <li className="footer-link">Our Menu</li>
                <li className="footer-link">Reservations</li>
                <li className="footer-link">Contact Us</li>
              </ul>
            </div>
            <div className="space-y-3 mt-6">
              <h1 className="text-xl font-semibold">Our Services</h1>
              <ul>
                <li className="footer-link">Catering</li>
                <li className="footer-link">Private Dining</li>
                <li className="footer-link">Events</li>
                <li className="footer-link">Delivery</li>
              </ul>
            </div>
            <div className="space-y-3 mt-6">
              <h1 className="text-xl font-semibold">Follow Us</h1>
              <ul className="">
                <li className="footer-link">
                  <FaFacebook className="inline-block" /> Facebook
                </li>
                <li className="footer-link">
                  <FaInstagram className="inline-block" /> Instagram
                </li>
                <li className="footer-link">
                  <FaTwitter className="inline-block" /> Twitter
                </li>
                <li className="footer-link">
                  <FaLinkedin className="inline-block" /> LinkedIn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
