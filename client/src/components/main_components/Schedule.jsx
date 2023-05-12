import React, { useState, useEffect } from "react";
import { getDay, getHour } from "../functions/functions";
import axios from "axios";
import AddSchedule from "./schedule_components/AddSchedule";

export default function Schedule(props) {
  const url = "http://localhost:3001/schedule?day=";
  const days = getDay();
  const hours = getHour();
  const [classes, setClasses] = useState([]);
  const [chosenDay, setChosenDay] = useState(1);
  const [chosenClass, setChosenClass] = useState(0);
  const [chosenHour, setChosenHour] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);

  useEffect(() => {
    axios.get(url + chosenDay).then((response) => setClasses(response.data));
  }, [url, chosenDay]);

  function handleAddSubmit(id) {
    axios
      .post(url, { class_id: id, hour: chosenHour, day: chosenDay })
      .then((response) => {
        if (response.status === 200) {
          props.showSuccessModal(
            "La classe ete ajouter dans l'emploi avec succes"
          );
          axios
            .get(url + chosenDay)
            .then((response) => setClasses(response.data));
        } else props.showFailModal("Erreru lors du l'ajout du classe");
      });
  }

  function handleDragEnd(event) {
    console.log(selectedRow, chosenClass);
    axios.put(url, { hour: selectedRow, id: chosenClass }).then((response) => {
      if (response.status === 200) {
        // props.showSuccessModal("Class ete modifier avec succes");
        axios
          .get(url + chosenDay)
          .then((response) => setClasses(response.data));
      } else {
        props.showErrorModal("Erreru lors du modifcation du classe");
      }
    });
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
                    onDragOver={() => setSelectedRow(index + 1)}
                  >
                    <td>{hour}</td>
                    {classes
                      .filter((obj) => obj.hour === index + 1)
                      .map((classe) => {
                        return (
                          <td
                            draggable
                            key={classe.id}
                            onClick={() => setChosenClass(classe.class_id)}
                            className="schedule-td"
                            value={classe.day}
                            onDrag={() => setChosenClass(classe.id)}
                            onDragEnd={handleDragEnd}
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
                    <td
                      className="schedule-add-td"
                      onClick={() => setChosenHour(index + 1)}
                    >
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
