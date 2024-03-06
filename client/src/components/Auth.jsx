import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signInImage from "../assets/signup.jpg";

const cookies = new Cookies();
const initialState = {
  fullName : '',
  userName : '',
  password : '',
  confirmPassword : '',
  phoneNumber : '',
  avatarUrl : ''
}

const Auth = () => {


  const [isSignUp, setIsSignUp] = useState(true);
  const [form , setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({...form , [e.target.name] : e.target.value})

    console.log(form)
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const { fullName , userName , password , phoneNumber , avatarUrl } = form;
    const URL = "http://localhost:5000/auth";
    const { data : {token , userId , hashedPassword} } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
      userName , password , fullName , phoneNumber , avatarUrl
    })
    cookies.set('token',token)
    cookies.set('userName',userName)
    
    cookies.set('userId',userId)

    if(isSignUp){
      cookies.set('fullName',fullName)
      cookies.set('phoneNumber' , phoneNumber)
      cookies.set('avatarUrl' , avatarUrl)
      cookies.set('hashedPassword' , hashedPassword)
    }
    window.location.reload();
    console.log(form)
  }

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarUrl">Avatar Url</label>
                <input
                  type="text"
                  name="avatarUrl"
                  placeholder="Avatar Url"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
                <button>{isSignUp ? "Sign Up" : "Sign In"}</button>
              </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <span onClick={switchMode}>{isSignUp ? "Sign In" : "Sign Up"}</span>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signInImage} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
