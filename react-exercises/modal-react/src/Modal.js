import React, { useState } from 'react';
import './App.css';


function Modal(props) {
    // Declare a new state variable, which we'll call "count"
    console.log(props.login,props.signup,"props");

    const [loginDisplay, setLoginDisplay] = useState('none');
    const [signUpDisplay, setSignUpDisplay] = useState('none');
    

    return (

        <div>
            <div className="header">

                <button onClick={() => setLoginDisplay('block')}>login</button>
                <button onClick={() => setSignUpDisplay('block')}>signup</button>
            </div>
            
            <div className="modal" style={{ display: signUpDisplay }} >

                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => setSignUpDisplay('none')}>&times;</span>
                        <h2>Sign Up</h2>
                    </div>
                    <div className="modal-body">
                        <form className="container">
                        <div className="row">
                            <div className="col-25">
                            <label for="fname">User Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="username" placeholder="Username name.."/>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-25">
                            <label for="password">Password</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                            <label for="cpassword">confirm Password</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="cpassword" name="cpassword" placeholder="cpassword"/>
                            </div>
                        </div>
                            <div className="row">
                                <input className="col-75" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <h6>Pesto project</h6>
                    </div>
                </div>

            </div>
            <div className="modal" style={{ display: loginDisplay }} >

                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => setLoginDisplay('none')}>&times;</span>
                        <h2>login</h2>
                    </div>
                    <div className="modal-body">
                    <form className="container">
                        <div className="row">
                            <div className="col-25">
                            <label for="fname">User Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="username" placeholder="Username name.."/>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-25">
                            <label for="password">Password</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                            <div className="row">
                                <input className="col-75" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modal;


