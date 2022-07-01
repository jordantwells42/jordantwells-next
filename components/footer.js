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
    translateyinv: "translate-y-0"
  })

  const changeToggle = (e) => {
    setToggle(p => !p);
    if (!toggle) {
      setToggleStyle({
        marginy: "mx-4",
        translatey: "translate-y-0",
        translateyinv: "translate-y-80"
      })
    } else {
      setToggleStyle({
        marginy: "-mx-3",
        translatey: "translate-y-80",
        translateyinv: "translate-y-0"
      })
    }
  };

  return (
    <div className="overflow-hidden pb-10 flex flex-col items-center justify-center">
      <div onClick={changeToggle} className={toggleStyle.translateyinv + " mt-10 flex flex-col border-2 hover:cursor-pointer rounded-full bg-blue-400 w-10 h-10 z-50"}>

      </div>
      <div className={toggleStyle.translatey + " -mt-20 pt-3 px-3 border-2 rounded-full bg-slate-800 flex flex-col items-center z-40"}>
        
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-xl">Contact:</h1>
            <div className="flex flex-row">
              {contacts.map(contact => {
                return (
                  <Link key={contact.name} href={contact.href}>
                    <a>
                      <h1 className={toggleStyle.marginy + " transition-all ease-out duration-800 text-center text-white text-lg hover:text-blue-600"}>{contact.name}</h1>
                      </a>
                  </Link>
                )
              })}
            </div>
            <p className="text-white text-base">Built with Next.js</p>
          </div>
          
        </div>


      </div>
    </div>
  );
}
