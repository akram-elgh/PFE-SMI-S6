import React from "react";

export default function Button(props) {
  return (
    <input
      type="submit"
      className={`btn btn-${props.size || "lg"} btn-${props.color}`}
      value={props.text || "Valider"}
      onClick={props.onClick}
      style={props.style}
    ></input>
  );
}
