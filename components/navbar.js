import React, { useState } from "react";
import Link from "next/link";
import { DragControls, motion } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "GitHub",
    href: "https://github.com/jordantwells42",
  },
  {
    name: "Blog",
    href: "https://medium.com/@jordantwells",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jordantwells",
  },
  {
    name: "Resume",
    href: "/jtw_resume.pdf",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  let [toggle, setToggle] = useState(false);
  const menuVariants = {
    open: { opacity: 1, y: "0%", marginX: "10px", display: "flex" },
    closed: { opacity: 0, y: "10%", marginX: "10px", display: "none" },
  };
  const buttonVariants = {
    open: { rotate: 0 },
    closed: { rotate: -180 },
  };

  function handleToggle() {
    console.log("togglin");
    console.log(toggle);
    setToggle(!toggle);
  }

  return (
    <motion.div className="rounded-full w-20 lg:w-auto lg:h-20 flex lg:flex-row flex-col-reverse items-center justify-center fixed top-5 right-5 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={toggle ? "open" : "closed"}
        variants={menuVariants}
        className="p-3 rounded-full bg-indigo-900 flex lg:flex-row flex-col z-40"
      >
        {links.map((link) => {
          return (
            <Link
              scroll={false}
              key={link.name}
              href={link.href}
              rel={link.href[0] !== "/" ? "noopener noreferrer" : ""}
              target={link.href[0] !== "/" ? "_blank" : "_self"}
              className="m-2 transition-all ease-out duration-100 bold text-lg text-center text-white hover:text-indigo-300"
            >
              {link.name}
            </Link>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 180 }}
        onClick={handleToggle}
        className="flex flex-col items-center justify-center text-center  hover:cursor-pointer  rounded-full bg-indigo-900 hover:bg-indigo-800 w-14 h-14 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3/4 w-3/4 text-white flex flex-row justify-center items-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
