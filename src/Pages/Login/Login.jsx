import "./Login.scss"
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Logo from "../../Components/Logo/Logo"

const Login = () => {
    const [uerror, setuserError] = useState({ usernameError: "" });
    const [perror, setpassError] = useState({ passwordError: "" })
    let userEmail = useRef();
    let userPassword = useRef();
    const navigate = useNavigate();
   
    const onLogin = (event) => {
        event.preventDefault();
       
        // if (event.target.username.value == "") {
        //     setuserError({ ...uerror, usernameError: "Please enter Email" });
        // } else {
        //     setuserError({ ...uerror, usernameError: "" });
        // }

        // if (event.target.password.value == "") {
        //     setpassError({ ...perror, passwordError: "Please enter Password" });
        // } else {
        //     setpassError({ ...perror, passwordError: "" });
        // }

        let loginApi = `http://localhost:5050/user/login`;
    
        axios.post(loginApi, {
          email: userEmail.current.value,
          password: userPassword.current.value
        })
        .then(function (response) {
          // handle success
          console.log("response:-",response);
           
          if(response.data.length == 0 ) {
            console.log('username and password not match');
            return Swal.fire({
              icon: "error",
              title: "ERROR!",
              text: "username and password not match",
              showConfirmButton: true,
            });
          } else {
            localStorage.setItem("token",response.data[0].token)
            let role_id=response.data[0].role_id;
                if(role_id==1){
                    localStorage.setItem("roleaccess","admin")
                } else if(role_id==2){
                    localStorage.setItem("roleaccess","staff")
                } else if(role_id==3){
                    localStorage.setItem("roleaccess","trainer")
                } else {
                    localStorage.setItem("roleaccess","0")
                }
            console.log('valid user');
            console.log(response.data.length)
            navigate('/dashboard');
          }
          let role_id=response.data[0];
          console.log(response.data[0].role_id)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
       
       



      




    }
    return (
        <div className="login">
            <Logo />
            <div className="loginContainer">
                
                <div className="contents">
                    <div className="top">
                        <h1>Login</h1>
                    </div>
                    <div className="bottom">
                        <form onSubmit={onLogin} >
                            <div className="formInput">
                                <label>Username :</label>
                                <input type="text" ref={userEmail} name="username" placeholder="Enter Your Email" />
                                <span className="error">{uerror.usernameError}</span>
                            </div>
                            <div className="formInput">
                                <label>Password :</label>
                                <input type="password" ref={userPassword} name="password" placeholder="Enter password" />
                                <span className="error">{perror.passwordError}</span>
                            </div>
                            <div className="formInput">
                            <input className="loginButton" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default Login;