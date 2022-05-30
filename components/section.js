import React from "react";

function Section(props) {
  return (
    <div className="py-5 container justify-content-center">
      <h1 id={props.name} className="py-5 section-header text-center">
        {props.name}
      </h1>
      {props.children}
    </div>
  );
}

export default Section;
