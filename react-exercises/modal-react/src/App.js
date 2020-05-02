import Modal from './Modal.js';
import React, { useState } from 'react';
import './App.css';


function App() {
  const [loginDisplay, setLoginDisplay] = useState('none');
  const [signUpDisplay, setSignUpDisplay] = useState('none');

  return (
    <div className="App">
      <div className="header">
        <button onClick={() => {
          setLoginDisplay('block');
          setSignUpDisplay('none');
        }}>login</button>
        <button onClick={() => {
          setLoginDisplay('none');
          setSignUpDisplay('block');
        }} >signup</button>
      </div>
      <Modal
        displayChild={loginDisplay}
        close={() => setLoginDisplay('none')}
        heading="Login"
        footer="pesto login">
        <div className="modal-body">
          <form className="container" >
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">User Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="username" placeholder="Username name.." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-75">
                <input type="text" id="password" name="password" placeholder="password" />
              </div>
            </div>
            <div className="row">
              <input className="col-75" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        displayChild={signUpDisplay}
        close={() => setSignUpDisplay('none')}
        heading="Sign UP"
        footer="pesto signUp">
        <div className="modal-body">
          <form className="container">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">User Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="username" placeholder="Username name.." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-75">
                <input type="text" id="password" name="password" placeholder="password" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="cpassword">confirm Password</label>
              </div>
              <div className="col-75">
                <input type="text" id="cpassword" name="cpassword" placeholder="cpassword" />
              </div>
            </div>
            <div className="row">
              <input className="col-75" type="submit" value="Register" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
