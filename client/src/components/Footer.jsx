import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b"
      >
        <div className="">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src={assets.logo}
            alt="logo"
            className="h-8 md:h-9"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="nax-w-80 mt-3"
          >
            Premium car rental service with wide selection of luxury <br />
            cars everyday vehicles for all your driving needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mt-6"
          >
            <a href="https://github.com/harshalgondane33">
              {" "}
              <img src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"} className="h-5 w-5" alt="github" />{" "}
            </a>
            <a href="https://www.instagram.com/_harshal_x?igsh=am11eHVub2docmRp ">
              {" "}
              <img
                src={"https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"}
                className="h-5 w-5"
                alt="Instagram"
              />{" "}
            </a>
            <a href="https://www.linkedin.com/in/harshal-gondane-bb55bb130/">
              {" "}
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KyW5WYCdoJ32KzNbJH6NMm43byKYpZuo7g&s"} className="h-5 w-5" alt="LinkedIn" />{" "}
            </a>
            <a href="mailto:harshalgondane3333@gmail.com">
              {" "}
              <img src={assets.gmail_logo} className="h-5 w-5" alt="" />{" "}
            </a>
          </motion.div>
        </div>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
         className="flex flex-wrap justify-between w-1/2 gap-8">
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Quick Links
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Browse Cars</a>
              </li>
              <li>
                <a href="#">List Your Cars</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Resources
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Contact
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">1234 Luxury Drive</a>
              </li>
              <li>
                <a href="#">Bhopal ,India 462042</a>
              </li>
              <li>
                <a href="#">+91 1234 5678</a>
              </li>
              <li>
                <a href="#">Info@example.com</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
      initial={{opacity:0,y:10 }}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,delay:0.6}}
      className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()} <a href="#">DriveMate</a>. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
