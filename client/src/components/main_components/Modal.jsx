import React from "react";

export default function Modal(props) {
  const script = " $(function () { $('#successModal').modal('show'); });";
  return (
    <div
      class="modal fade"
      id="successModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="successModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="successModalLabel"
              style={props.style}
            >
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className={"btn btn-" + props.class}
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <script>{script}</script>
    </div>
  );
}
