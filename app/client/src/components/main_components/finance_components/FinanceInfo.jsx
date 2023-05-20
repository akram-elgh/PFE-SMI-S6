import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getPaymentType,
  calculateTeacherSalary,
  calculateClassesRevenuePerMonth,
} from "../../functions/functions";

export default function FinanceInfo(props) {
  const url = "http://localhost:3001/class";
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  return (
    <div className="finance-info">
      <table className="table table-striped table-light table-hover">
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prix</td>
            <td>Nombre d'etudiants</td>
            <td>Revenue total</td>
            <td>Prof</td>
            <td>Type du contrat</td>
            <td>Salaire</td>
            <td>Salaire totale</td>
            <td>Revenue du classe</td>
          </tr>
        </thead>
        <tbody>
          {classes.map((classe) => {
            return (
              <tr key={classe.class_id}>
                <td>{classe.class_name}</td>
                <td>{classe.price}DH</td>
                <td>{classe.student_count}</td>
                <td>{classe.student_count * classe.price}DH</td>
                <td>{classe.lname + " " + classe.fname || "_"}</td>
                <td>
                  {classe.type_of_payment
                    ? getPaymentType(classe.type_of_payment)
                    : "_"}
                </td>
                <td>
                  {(classe.salary &&
                    ` ${
                      classe.salary +
                      (classe.type_of_payment === 3 ? "%" : "DH")
                    }`) ||
                    "_"}
                </td>
                <td>
                  {(classe.salary && `${calculateTeacherSalary(classe)}DH`) ||
                    "_"}
                </td>
                <td>
                  {classe.student_count * classe.price -
                    calculateTeacherSalary(classe)}
                  DH
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={7}></td>
            <td>Total revenue par mois :</td>
            <td>{calculateClassesRevenuePerMonth(classes)}DH</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
