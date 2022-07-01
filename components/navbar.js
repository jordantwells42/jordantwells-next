import React, { useState } from "react";
import Link from "next/link";
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "GitHub",
    href: "https://github.com/jordantwells42",
  },
  {
    name: "Medium",
    href: "https://medium.com/@jordantwells",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jordantwells",
  },
  {
    name: "Resume",
    href: "/jtw_resume.pdf",
  }
]

export default function Navbar() {
  let [toggle, setToggle] = useState(false);
  let [toggleStyle, setToggleStyle] = useState({
    marginy: "-my-3",
    translatey: "-translate-y-80"
  })

  const changeToggle = (e) => {
    setToggle(p => !p);
    if (!toggle){
      setToggleStyle({
        marginy: "my-0.5",
        translatey: "translate-y-0"
      })
    } else {
      setToggleStyle({
        marginy: "-my-3",
        translatey: "-translate-y-80"
      })
    }
  };

  return (
    <div className="transition-all ease-in-out duration-1000 rounded-full w-20 flex flex-col items-center justify-center fixed top-5 right-10 z-50">
      <div onClick={changeToggle} className="flex flex-col border-2 hover:cursor-pointer  rounded-full bg-blue-400 w-10 h-10 z-50">

      </div>


        <div className={toggleStyle.translatey + " p-3 border-2 rounded-full bg-slate-800 flex flex-col z-40"}>
          {links.map(link => {
            return (
              <Link key={link.name} href={link.href}>
                <a className={toggleStyle.marginy + " transition-all ease-out duration-400 bold text-center text-white hover:text-blue-300"}>{link.name}</a>
              </Link>
            )
          })}

        </div>
      
    </div>
  );
}
