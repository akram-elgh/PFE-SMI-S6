import React from "react";

export default function Modal(props) {
  return (
    <div
      className={`modal fade ${props.show ? "show" : ""}`}
      id="successModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="successModalLabel"
      aria-modal="true"
      style={{ display: props.show ? "block" : "none" }}
    >
      <div className={`modal-dialog`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="exampleModalLongTitle"
              style={{ color: props.color }}
            >
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">{props.body}</div>
          {!props.delete ? (
            <div className="modal-footer">
              <button
                type="button"
                className={"btn btn-" + props.classe}
                data-dismiss="modal"
                onClick={props.onClose}
              >
                Fermer
              </button>
            </div>
          ) : (
            <div className="modal-footer">
              <button
                type="button"
                className={"btn btn-secondary"}
                data-dismiss="modal"
                onClick={() => props.onClose(false)}
              >
                Annuler
              </button>
              <button
                type="button"
                className={"btn btn-danger"}
                data-dismiss="modal"
                onClick={() => props.onClose(true)}
              >
                Supprimer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
