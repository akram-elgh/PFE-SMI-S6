import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLevel } from "../../functions/functions";

export default function HomeRequests() {
  const url = "http://localhost:3001/request";
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setRequests(response.data));
  }, [url]);

  return (
    <div className="home-space-request-table">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prenom</td>
            <td>Tele</td>
            <td>Niveau</td>
            <td>Classe</td>
            <td>Date du requet</td>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => {
            return (
              <tr key={request.request_id}>
                <td>{request.lname}</td>
                <td>{request.fname}</td>
                <td>{request.phoneNum}</td>
                <td>{getLevel(request.level)}</td>
                <td>{request.class_name}</td>
                <td>{request.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
