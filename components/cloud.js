import { useState, useRef, useEffect } from "react";

export default function Cloud(props) {
  let ref = useRef();

  let [hovered, setHovered] = useState(false);
  let [addPadding, setAddPadding] = useState(0);

  const displace = () => {
    if (!hovered) {
      setAddPadding(props.displacement);
      setHovered(true);
    }
  };

  const replace = () => {
    if (hovered) {
      setAddPadding(0);
      setHovered(false);
    }
  };

  const getPositionStyle = (paddingTop, paddingLeft) => {
    paddingLeft =
      paddingLeft +
      props.displacement * (Math.random() * 2 - 1) +
      addPadding * (Math.random() * 2 - 1);
    paddingTop =
      paddingTop +
      props.displacement * (Math.random() * 2 - 1) +
      addPadding * (Math.random() * 2 - 1);
    return {
      transform: "translate(" + paddingLeft + "vw," + paddingTop + "vh)",
    };
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => displace()}
      onMouseLeave={() => replace()}
      style={getPositionStyle(props.paddingTop, props.paddingLeft)}
      className="cloud-pos"
    >
      <div className={"cloud " + props.size}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
