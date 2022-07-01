import React from "react";

function Section(props) {
  return (
    <div className="py-5 text-white text-2xl w-3/4 items-center justify-center text-center">
      <h1 id={props.name} className="text-4xl py-5">
        {props.name}
      </h1>
      <div className="py-5">
      {props.children}
      </div>
    </div>
  );
}

export default Section;
