
/*// connecting it with its css, but mostly i with bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css'
/*// so it it actual bootstrap*/
import React, {useState} from 'react';
import axios from 'axios';
import classes from './Joinblock.module.css';
/*// i am using webstorm and it

is automatically imports everything i need from react library
* axios is used for api post and gets*/




function JoinBlock(props) {

    const [chatID, setChatID] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [loading, setLoading] = React.useState(false);
/*    // this Hook allows me to change imput
    // to class before going to the value*/

    const createOrLogin = (e) => {
        e.preventDefault();
        if (!chatID || !userName){
            return alert('Incorrent inputs');
        }
        setLoading(true);
        axios.post('/chats', {
            chatID,
            userName,
        }).then(props.onLogin)
    };

    return (

      <div className={classes.Auth_form_container}>
          <form className={classes.Auth_form}>
              <div className={classes.Auth_form_content}>

                  <h3 className={classes.Auth_form_title}>Join Chat</h3>

                  <div className='form-group mt-3'>
                      <label>Chat ID</label>
                      <input
                          onChange={(e) => setChatID(e.target.value) }
                          // without it inputing smth would be impossible
                          value={chatID}
                          className='form-control mt-1'
                          placeholder=''
                      />
                  </div>
{/*                  //Input form for chat id*/}

                  <div className='form-group mt-3'>
                      <label>Username</label>
                      <input
                          onChange={(e) => setUserName(e.target.value) }
/*                          // without it inputing smth would be impossible*/
                          value={userName}
                          className='form-control mt-1'
                          placeholder=''
                      />
                  </div>
{/*                  //Input form for username*/}


                  <div className='d-grid gap-2 mt-3'>
                      <button  disabled={loading} className='btn btn-primary' onClick={createOrLogin}>
                          {loading ? 'Joining...' : 'Join'}
                      </button>
                  </div>

              </div>
          </form>
      </div>


  );
}

export default JoinBlock;
