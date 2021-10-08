import React, { Component } from "react";
import Axios from "axios";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// the below holds the inital state of the form fields being observed and awaiting change from input user. // 
// by default the fields are set to empty & managed upon change via input by user. //
export default class LoginFormValidation extends Component{
    constructor(props){
        super(props)

        this.state = {
               email: "",
               password: "",
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// created function beblow for the form to i: handle the form validation & //
// ii: to handle the change in the fields which will be passed value key. // 
// this function handles changes from the input fields of the form. //
      handleChange = (e) => {
          this.setState({
        [ (e).target.name ] : (e).target.value
          });
      };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this function handles the form when submitted by user and checks the validation. //
     submitHandler = (e) => {
         (e).preventDefault();        
     Axios.post("url")
          .then(response => {
// code statement variable taking the response data from backend and transform into Json.//
           const kassie = response.data   
// response data. copde block.//
           this.setState({ kassie })
        })
           console.log(this.state);         
   };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   render(){
       const { email, password } = this.state;

   return(
      <form onSubmit={this.submitHandler}>

            <div className="form-card-field">
                 <input name="email"
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={this.handleChange} />
            </div>

            <div className="form-card-field">
                 <input name="password"
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={this.handleChange} />
            </div>
          <button type="submit">Login</button>
      </form>
     )
   }
}