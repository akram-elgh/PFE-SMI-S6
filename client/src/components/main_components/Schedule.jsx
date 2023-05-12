import React, { useState, useEffect } from "react";
import { getDay, getHour } from "../functions/functions";
import axios from "axios";
import AddSchedule from "./schedule_components/AddSchedule";

export default function Schedule(props) {
  const days = getDay();
  const hours = getHour();
  const url = "http://localhost:3001/schedule?day=";
  const postUrl = "http://localhost:3001/schedule?id=";
  const [chosenDay, setChosenDay] = useState(1);
  const [classes, setClasses] = useState([]);
  const [chosenClass, setChosenClass] = useState(0);

  useEffect(() => {
    axios.get(url + chosenDay).then((response) => setClasses(response.data));
  }, [url, chosenDay]);

  function handleAddSubmit(id) {
    axios.post(url + id).then((response) => {
      if (response.status === 200) props.showSuccessModal("La classe ete ajouter dans l'emploi avec succes");
      else props.showFailModal("Erreru lors du l'ajout du classe");
    })
  }
  }

  return (
    <div className="space">
      <div className="shcedule search-space-table">
        <table className="table schedule-table">
          <thead>
            <tr>
              <td key={0}></td>
              {days.slice(1).map((day, index) => {
                return (
                  <td
                    onClick={() => setChosenDay(index + 1)}
                    className={`schedule-header ${
                      chosenDay === index + 1 ? "active" : ""
                    }`}
                    style={{ padding: "0.5rem" }}
                    key={index + 1}
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
            {hours.slice(1).map((hour, index) => {
              return (
                <>
                  <tr
                    key={index + 1}
                    value={index + 1}
                    className={index % 2 === 0 ? "odd" : ""}
                  >
                    <td>{hour}</td>
                    {classes
                      .filter((obj) => obj.hour === index + 1)
                      .map((classe) => {
                        return (
                          <td
                            key={classe.id}
                            onClick={() => setChosenClass(classe.id)}
                            className="schedule-td"
                            value={classe.day}
                          >
                            <ul>
                              <li>Classe: {classe.class_name}</li>
                              <li>Salle: {classe.classroom}</li>
                              <li>
                                Termine le:{" "}
                                {getHour(
                                  (classe.duration === 120 ? 4 : 3) + index + 1
                                )}
                              </li>
                            </ul>
                          </td>
                        );
                      })}
                    <td className="schedule-add-td">
                      <AddSchedule onSubmit={handleAddSubmit}></AddSchedule>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
