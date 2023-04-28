import React, { useState } from "react";
import Header from "./main_components/Header.jsx";
import Body from "./main_components/Body.jsx";

export default function Main() {
  const [title, setTitle] = useState("Markaz Nour Al Ilem");
  const handleChange = (title) => setTitle(title);
  return (
    <div className="main">
      <Header title={title}></Header>
      <Body onClick={handleChange}></Body>
    </div>
  );
}
