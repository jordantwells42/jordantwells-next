import Link from "next/link";
import React, { useState } from "react";
import * as Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

const contacts = [
  {
    name: "jordantwells@gmail.com",
    href: "mailto:jordantwells@gmail.com",
  },
  {
    name: "281-608-1825",
    href: "tel:+12816081825",
  },
];

export default function Footer() {
  let [toggle, setToggle] = useState(true);
  let [toggleStyle, setToggleStyle] = useState({
    marginy: "mx-2",
    translatey: "translate-y-0",
    translateyinv: "translate-y-80",
    animate: "",
  });

  const changeToggle = (e) => {
    return;
    setToggle((p) => !p);
    if (!toggle) {
      setToggleStyle({
        marginy: "mx-2",
        translatey: "translate-y-0",
        translateyinv: "translate-y-80",
        animate: "",
      });
    } else {
      setToggleStyle({
        marginy: "-mx-3",
        translatey: "translate-y-80",
        translateyinv: "translate-y-0",
        animate: "",
      });
    }
  };

  return (
    <div
      id="contact"
      className={
        toggleStyle.animate +
        " overflow-hidden pb-5 flex flex-col items-center justify-center "
      }
    >
      <p className="text-white font-light text-base hover:cursor-pointer hover:text-indigo-300 p-1">
            <a onClick={() => Scroll.animateScroll.scrollToTop()}>
              Back to Top
            </a>
          </p>
      <p className="text-white font-light italic text-base pt-3">
        Built with Next.js, deployed with Vercel{" "}
      </p>
    </div>
  );
}
