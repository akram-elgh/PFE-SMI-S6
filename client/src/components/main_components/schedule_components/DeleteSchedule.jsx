import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteSchedule(props) {
  return (
    <span style={props.style} className="schedule-delete-btn">
      <DeleteIcon fontSize="large" style={{ color: "red" }}></DeleteIcon>
    </span>
  );
}
