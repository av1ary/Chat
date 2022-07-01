import './Joinblock.modules.css';
/*// connecting it with its css, but mostly i with bootstrap*/
import "bootstrap/dist/css/bootstrap.min.css"
/*// so it it actual bootstrap*/
import React, {useState} from "react";
import axios from "axios";
/*// i am using webstorm and it is automatically imports everything i need from react library
* axios is used for api post and gets*/




function JoinBlock() {

    const [chatID, setchatID] = React.useState('')
    const [UserName, setUserName] = React.useState('')
/*    // this Hook allows me to change imput
    // to class before going to the value*/

    const createorlogin = () => {
        if (!chatID || !UserName){
            return alert('Incorrent inputs');
        }
        axios.post('/chats', {
            chatID,
            UserName,
        });
    }

    return (

      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Join Chat</h3>



                  <div className="form-group mt-3">
                      <label>Chat ID</label>
                      <input
                          onChange={(e) => setchatID(e.target.value) }
                          // without it inputing smth would be impossible
                          value={chatID}
                          className="form-control mt-1"
                          placeholder=""
                      />
                  </div>
{/*                  //Input form for chat id*/}

                  <div className="form-group mt-3">
                      <label>Username</label>
                      <input
                          onChange={(e) => setUserName(e.target.value) }
/*                          // without it inputing smth would be impossible*/
                          value={UserName}
                          className="form-control mt-1"
                          placeholder=""
                      />
                  </div>
{/*                  //Input form for username*/}


                  <div className="d-grid gap-2 mt-3">
                      <button  className="btn btn-primary" onClick={createorlogin}>
                          Create / Join
                      </button>


                  </div>

              </div>
          </form>
      </div>


  );
}

export default JoinBlock;
