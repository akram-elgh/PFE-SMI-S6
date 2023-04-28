import React, { useState, useEffect } from "react";
import { getDate, getTime } from "../functions/functions";

export default function Header(props) {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="header">
      <div className="header-logo"></div>
      <h1 className="header-title">{props.title}</h1>
      <div className="header-date">
        <p className="date">{getDate()}</p>
        <p className="hour">{time}</p>
      </div>
    </header>
  );
}
