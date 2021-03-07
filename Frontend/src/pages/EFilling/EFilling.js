// import React from "react";
// import Efbg from "../../assets/Images/bgef.jpg";
// import court from "../../assets/Images/lawLogin.jpg";
// import axios from "axios"
// import {Formik,Form, useFormik} from "formik"
// import * as Yup from "yup"
// // import Card from "../../shared/UIElements/Card"
// import Wrap from "../../shared/UIElements/Wrap"
// import "./EFilling.css"

// const initialValues={
//     email:'',
//     password:''
//   }
  
  
//   const validationSchema=Yup.object({
//     email:Yup.string().email("Invalid email Format").required("Required!!"),
//     password:Yup.string().required("Required")
  
  
//   })
//   const onSubmit=values=>{
//   console.log("Form data",values)
//   }
  
// const handleForm=async event=>{
//   event.preventDefault();
//   try{
//     const response=await  fetch("http://localhost:2000/api/users/login",{
//     method:"POST",
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//       email:initialValues.email,
//       password:initialValues.password

//     })
//   })
//   const responseData=await response.json();
//   console.log(responseData);

//   }catch(err){
//     console.log(err)
    
//   }
  
// }


// const EFilling=(props)=>{
//     const formik=useFormik({
//         initialValues,
//         onSubmit,
//        validationSchema,
        
//      })
//       console.log("form errors",formik.touched)

    
//     return(
        
         
        
//           <div>
//               <div className="authentication">
//               <Wrap>
//       <img className="res-image" src={court} alt="My logo" />
        
        
//      <form onSubmit={handleForm}>         
//       <label className="Email">Email</label>
//       <input type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//   {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}

//       <label className="password">Password</label>
//       <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//       {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}
      
//       <button className="Login-cms-btn" disabled={!formik.isValid}  onClick={() => {
//                 props.history.push("/File");
//               }}>Login</button>
//       </form>
     
//       </Wrap>

//               </div>
         
//           </div>
    
//     )
//     // axios.post("http://localhost:8000/api/signIn")
// }
// export default EFilling;


import React, { Component } from 'react';
import { FormErrors } from "../../components/FormErrors"
import CoveringCard from "../../shared/UIElements/Cover"
import signup from "../../assets/Images/sign.PNG"
import history from "../../components/history";
import {Link} from "react-router-dom"
import court from "../../assets/Images/admin.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordMask from 'react-password-mask';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import filelogin from "../../assets/Images/lawLogin.jpg";
const eye = <FontAwesomeIcon icon={faEye} />;
class Form extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordShown:' ',
      formErrors: {email: '', password: '',},
      
      emailValid: false,
      passwordValid: false,
      formValid: false,
      passwordShown:false
    }
  }
  

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
 
//form validation starts
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
        
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    
                   
                    
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid:this.state.emailValid && this.state.passwordValid});
  }
  
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  //form validation ends
  authSubmithandler = async event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      const response = await axios.post(`http://localhost:2000/api/users/login`, data);
      alert(`Logged In Successfully as ${data.email}`);
      window.location = "http://localhost:3000/File";
    } catch (error) {
      alert(error);
    }
  }



  render (props) {
    return (
        <div className="authentication">
      <form onSubmit={this.authSubmithandler} className="Form">
        <CoveringCard>
        <img className="res-image" src={filelogin}/>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="passwordd" hide className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
          
           
       
        </div>
        
        <button type="submit" className="btn btn-primary" 
        disabled={!this.state.formValid }
      //  onClick={()=>{
          
      //      this.props.history.push("/CMS/Modules")
      //   }}
       
       >
          Sign In</button>


          
        </CoveringCard>
        
      </form>
      
      </div>
    )
  }
}

export default Form;