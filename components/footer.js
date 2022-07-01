import Link from "next/link";
import React, { useState } from "react";

const contacts = [
  {
    name: "jordantwells@gmail.com",
    href: "mailto:jordantwells@gmail.com",
  },
  {
    name: "281-608-1825",
    href: "tel:+12816081825",
  },
]

export default function Footer() {
  let [toggle, setToggle] = useState(false);
  let [toggleStyle, setToggleStyle] = useState({
    marginy: "-mx-3",
    translatey: "translate-y-80",
    translateyinv: "translate-y-0",
    animate: ""
  })

  const changeToggle = (e) => {
    setToggle(p => !p);
    if (!toggle) {
      setToggleStyle({
        marginy: "mx-2",
        translatey: "translate-y-0",
        translateyinv: "translate-y-80",
        animate: ""
      })
    } else {
      setToggleStyle({
        marginy: "-mx-3",
        translatey: "translate-y-80",
        translateyinv: "translate-y-0",
        animate: ""
      })
    }
  };

  return (
    <div className={toggleStyle.animate + " overflow-hidden pb-10 flex flex-col items-center justify-center"}>
      <div onMouseEnter={changeToggle} className={toggleStyle.translateyinv + " transition-transform ease-out duration-300 mt-10 flex flex-col border-2 hover:cursor-pointer rounded-full bg-blue-400 w-10 h-10 z-50"}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2 text-white text-center flex flex-row justify-center items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
        </div>
      <div onMouseLeave={changeToggle} className={toggleStyle.translatey + " transition-transform ease-out duration-300 -mt-20 p-3 border-2 rounded-full bg-slate-800 flex flex-col items-center z-40"}>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-xl">Contact:</h1>
            <div className="flex flex-row justify-between">
              {contacts.map(contact => {
                return (
                  <Link key={contact.name} href={contact.href}>
                    <a>
                      <h1 className={toggleStyle.marginy + " transition-spacing ease-out duration-700 text-center text-white text-lg hover:text-blue-300"}>{contact.name}</h1>
                      </a>
                  </Link>
                )
              })}
            </div>
            <p className="text-white text-base">Built with Next.js</p>
          </div>
          


      </div>
    </div>
  );
}
