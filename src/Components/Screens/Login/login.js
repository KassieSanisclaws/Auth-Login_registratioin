import React from 'react';
import { Link } from "react-router-dom";
import LoginFormValidation from '../../Validation/loginFormValidation';

import "./login.css";

export default function Login() {
    return (
        <div className="login-body">

             <div className="login-section">
                    <div className="login-header">
                        <h1>Login Header ^~~~//^ </h1>
                    </div>

                    <div className="col-md-6 col-xl-5 offset-xl-1">
                        <div className="login-form-section">
                             <Link to="/" className="login-return-link">Return To Home!</Link>
                                <div className="card-form">
                                     <LoginFormValidation />
                               </div>       
                        </div>
                 </div>
             </div>

        </div>
    )
}
