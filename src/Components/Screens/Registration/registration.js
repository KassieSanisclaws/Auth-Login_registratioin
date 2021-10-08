import React from 'react';
import RegisterFormValidation from '../../Validation/registerFormValidation';
import TopBar from "../../TopBar/topbar";

import "./registration.css";

export default function Registration() {
    return (
        <div className="registration-body">
            <TopBar />
              <div className="registration-section">
                  <div className="registration-header">
                     <h1>Registration Page</h1>
                  </div>

                  <div className="col-md-6 col-xl-5 offset-xl-1">
                             <div className="registration-form-section">
                                    <div className="card-form">
                                       <RegisterFormValidation /> 
                                    </div>

                             </div>
                     </div>
              </div>
        </div>
    )
}
