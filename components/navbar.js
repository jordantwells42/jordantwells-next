import React, { useState } from "react";
import Link from "next/link";





export default function Navbar(props) {
  let [toggle, setToggle] = useState(false);

  const changeToggle = (e) => {
    setToggle(p => !p);
  };

  return (
    <div className="">
      <div onClick={changeToggle} className="flex flex-col gap-2 fixed animate-pulse hover:animate-none top-5 right-5 rounded-full bg-blue-100 w-10 h-10 z-50">
        {toggle &&

          <div className="flex flex-col py-10">
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>

          </div>
        }
      </div>
    </div>
  );
}
