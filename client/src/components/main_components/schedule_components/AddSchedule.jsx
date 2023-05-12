import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

export default function AddSchedule(props) {
  const url = "http://localhost:3001/class";
  const [classes, setClasses] = useState([]);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, []);

  return (
    <span className="schedule-add-btn">
      {isAddClicked ? (
        <form>
          <select
            className="form-select"
            onChange={(event) => setId(Number(event.target.value))}
          >
            <option value={0} key={0}>
              ---Selectioner une classe---
            </option>
            {classes.map((classe, index) => {
              return (
                <option value={classe.class_id} key={classe.class_id}>
                  {classe.class_name}
                </option>
              );
            })}
          </select>
          <CancelIcon
            fontSize="medium"
            className="schedule-add-circle-btn"
            style={{ color: "red" }}
            onClick={() => setIsAddClicked(false)}
          ></CancelIcon>
          <AddCircleIcon
            className="schedule-add-circle-btn"
            fontSize="medium"
            color="success"
            onClick={() => {
              setIsAddClicked(false);
              props.onSubmit(id);
            }}
          ></AddCircleIcon>
        </form>
      ) : (
        <AddCircleIcon
          className="schedule-add-circle-btn"
          onClick={() => setIsAddClicked(true)}
          fontSize="large"
          color="primary"
        ></AddCircleIcon>
      )}
    </span>
  );
}
