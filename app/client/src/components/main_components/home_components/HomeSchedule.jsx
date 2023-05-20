import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDay, getHour, getMonth } from "../../functions/functions";

export default function HomeSchedule() {
  const days = getDay();
  const hours = getHour();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const url = "http://localhost:3001/schedule?day=";
  const [chosenDay] = useState(new Date().getDay());
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(url + chosenDay).then((response) => setClasses(response.data));
  }, [url, chosenDay]);

  return (
    <>
      <div className="home-space-schedule-table">
        <table className="table table-primary table-striped">
          <thead>
            <tr>
              <td key={0}></td>
              {days.slice(chosenDay, chosenDay + 1).map((day, index) => {
                return (
                  <td
                    colSpan={12}
                    onClick={() =>
                      setScheduleInfo((prevValues) => {
                        return { ...prevValues, chosenDay: index + 1 };
                      })
                    }
                    style={{ padding: "0.5rem" }}
                    key={index + 1}
                  >
                    {`${day} ${date} ${getMonth(month + 1)} ${year}`}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {hours.slice(1, 20).map((hour, index) => {
              return (
                <>
                  <tr key={index + 1} value={index + 1}>
                    <td>{hour}</td>
                    {classes
                      .filter((obj) => obj.hour === index + 1)
                      .map((classe) => {
                        return (
                          <td key={classe.id} value={classe.day}>
                            {classe.class_name}
                          </td>
                        );
                      })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
