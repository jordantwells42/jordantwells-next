import React from "react";

function Section(props) {
  return (
    <div className="py-2 text-white text-2xl flex-col flex items-start justify-center text-start">
      <h2 id={props.name} className="text-4xl py-5 font-bold">
        {props.name}
      </h2>
      <div className="py-2 w-full flex justify-start items-start">
        {props.children}
      </div>
    </div>
  );
}

export default Section;
