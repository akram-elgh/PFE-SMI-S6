import React, { useState, useEffect } from "react";
import { getDay, getHour } from "../functions/functions";
import axios from "axios";
import AddSchedule from "./schedule_components/AddSchedule";

export default function Schedule(props) {
  const url = "http://localhost:3001/schedule?day=";
  const days = getDay();
  const hours = getHour();
  const [classes, setClasses] = useState([]);
  const [scheduleInfo, setScheduleInfo] = useState({
    chosenDay: 1,
    chosenClass: 0,
    chosenHour: 0,
    chosenRow: 0,
  });
  const [isDragOverClass, setIsDragOver] = useState({
    isDragOver: false,
    dragOverClass: 0,
    isDragging: false,
  });

  const { isDragOver, dragOverClass, isDragging } = isDragOverClass;
  const { chosenDay, chosenClass, chosenHour, chosenRow } = scheduleInfo;

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

  function handleDragEnd() {
    console.log(chosenRow, chosenClass);
    setIsDragOver({ isDragOver: false, dragOverClass: 0, isDragging: false });
    axios.put(url, { hour: chosenRow, id: chosenClass }).then((response) => {
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
    <>
      <div className="shcedule search-space-table">
        <table className="table schedule-table">
          <thead>
            <tr>
              <td key={0}></td>
              {days.slice(1).map((day, index) => {
                return (
                  <td
                    onClick={() =>
                      setScheduleInfo((prevValues) => {
                        return { ...prevValues, chosenDay: index + 1 };
                      })
                    }
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
              <td key={0}></td>
            </tr>
            {hours.slice(1).map((hour, index) => {
              return (
                <>
                  <tr
                    key={index + 1}
                    value={index + 1}
                    className={index % 2 !== 0 ? "odd" : ""}
                    onDragOver={() => {
                      setScheduleInfo((prevValues) => {
                        return { ...prevValues, chosenRow: index + 1 };
                      });
                      setIsDragOver((prevValues) => {
                        return { ...prevValues, isDragOver: true };
                      });
                    }}
                    style={{
                      backgroundColor:
                        isDragOver && chosenRow === index + 1 ? "beige" : "",
                    }}
                  >
                    <td>{hour}</td>
                    {classes
                      .filter((obj) => obj.hour === index + 1)
                      .map((classe, index2) => {
                        return (
                          <td
                            draggable
                            key={classe.id}
                            className="schedule-td"
                            value={classe.day}
                            onDrag={() =>
                              setScheduleInfo((prevValues) => {
                                return {
                                  ...prevValues,
                                  chosenClass: classe.id,
                                };
                              })
                            }
                            onDragEnd={handleDragEnd}
                            onDragOver={() => {
                              setIsDragOver((prevValues) => {
                                return { ...prevValues, dragOverClass: index2 };
                              });
                            }}
                            style={{
                              transform:
                                isDragOver &&
                                chosenRow === index + 1 &&
                                dragOverClass <= index2
                                  ? "translateX(200px)"
                                  : "",
                            }}
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
                    {isDragging ? (
                      <td className="schedule-delete-td"></td>
                    ) : (
                      <td
                        className="schedule-add-td"
                        onClick={() =>
                          setScheduleInfo((prevValues) => {
                            return { ...prevValues, chosenHour: index + 1 };
                          })
                        }
                        style={{
                          transform:
                            isDragOver && chosenRow === index + 1
                              ? "translateX(200px)"
                              : "",
                        }}
                      >
                        <AddSchedule
                          style={{
                            height: classes.filter(
                              (obj) => obj.hour === index + 1
                            ).length
                              ? "90px"
                              : "",
                          }}
                          onSubmit={handleAddSubmit}
                        ></AddSchedule>
                      </td>
                    )}
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
