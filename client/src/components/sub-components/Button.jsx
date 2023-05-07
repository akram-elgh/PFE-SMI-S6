import React from "react";

export default function Button(props) {
  return (
    <div className="mb-3">
      <input
        type="submit"
        className={`btn btn-${props.color}`}
        value="Valider"
      ></input>
    </div>
  );
}
