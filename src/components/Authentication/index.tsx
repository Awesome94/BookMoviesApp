import * as React from "react";
import { render } from "react-dom";
import { useForm } from "react-hook-form";
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {history} from '../../helpers/history';
import { useLocation } from 'react-router-dom';

import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

let API_URL = process.env.REACT_APP_API_URL

const AuthComponent =()=>{
  let location = useLocation();
  
  const authToggle = ()=>{
    if (location.pathname === '/auth'){
      let API_URL =`${process.env.REACT_APP_API_URL}/login`
      return(
      <div>
        <p>New here? Click below to register an account </p>
        <a style={{ cursor: 'pointer' }} onClick={(e)=>{history.push('/register')} }>Register</a>
      </div>
      )
    }

  if(location.pathname === '/register'){
    let API_URL =`${process.env.REACT_APP_API_URL}/register`
    return(
      <div>

      <p>Already have an account?</p>
      <a style={{ cursor: 'pointer' }} onClick={(e)=>{history.push('/auth')} }>Login</a>
      </div>
    )
  }
}

const toggleAuthButton = () =>{
  if(location.pathname === '/register'){
    return (
      <Button variant='outlined'  color="primary" type="submit">Register Account</Button>
    )
  }else{
    return(
      <Button variant='outlined'  color="primary" type="submit">Login</Button>

    )

  } 
}

  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = async (data: any) => {
    if(location.pathname === '/register'){
      await axios.post(`${API_URL}/register/${data.username}/${data.password}`).then(({data})=>{
        if (data["Success"]){
          history.push('/auth')
          return data
        }else{
          history.push('/register')
        }
      })
    }else{
      await axios.post(`${API_URL}/login/${data.username}/${data.password}`).then(({data})=>{
        if(data["Access Token"]){
          localStorage.setItem('token', data["Access Token"])
          localStorage.setItem('username', data["username"])
          history.push('/')
          return data["Access Token"]
        }else{
            history.push('/auth')
        }
      })
    }
  }

  return (
    <section className="authContainer">
      <div className="back-to-app">
        <a  onClick={(e)=>history.push('/')} style={{ cursor: 'pointer' }}>Back to App</a>
      </div>
    <form className = "siginForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="authlabel">Username</label>
        <input className="usernameInput" type="text" placeholder="username" name="username" ref={register({required: true, pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: "Username Should not include special characters"
          }})} />
        <a className="error">{errors.username && errors.username.message}</a>
        <label className="authlabel">Password</label>
        <input className="passwordInput" type="password" placeholder="password" name="password" ref={register({required: true})} />
        <a className="error">{errors.password && errors.password.message}</a>
      <div  className="authbutton" >
        {toggleAuthButton()}
      </div>
      </form>
      {authToggle()}
    </section>
  );
}

export default AuthComponent;
