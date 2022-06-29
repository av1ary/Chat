import './Joinblock.modules.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import socket from "./socket";

function JoinForm() {

  return (

      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Join Chat</h3>
                  <div className="form-group mt-3">
                      <label>Chat ID</label>
                      <input

                          className="form-control mt-1"
                          placeholder=""
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>Username</label>
                      <input

                          className="form-control mt-1"
                          placeholder=""
                      />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                          Join
                      </button>
                  </div>

              </div>
          </form>
      </div>


  );
}

export default JoinForm;
