import React, { useState } from "react";
import axios from "axios";

export default function SearchStudent() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="search-student">
      <div className="search-student-input">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Taper le nom de l'etudiant"
          value={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
