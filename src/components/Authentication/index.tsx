import * as React from "react";
import { render } from "react-dom";
import { useForm } from "react-hook-form";
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {history} from '../../helpers/history';

import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const AuthComponent =()=>{

  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = async (data: any) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/login/${data.username}/${data.password}`).then(({data})=>{
      if (data["Access Token"]){
        localStorage.setItem('token', data["Access Token"])
        localStorage.setItem('username', data["username"])
        history.push('/')
        return data["Access Token"]
      }else{
        history.push('/auth')
      }
    })

  };


  return (
    <section className="authContainer">
      <div className="back-to-app">
        <p  onClick={(e)=>history.push('/')} style={{ cursor: 'pointer' }}>Back</p>
      </div>
    <form className = "siginForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="authlabel">Username</label>
        <input className="usernameInput" type="text" placeholder="username" name="username" ref={register({required: true, maxLength: 100})} />
        <label className="authlabel">Password</label>
        <input className="passwordInput" type="password" placeholder="password" name="password" ref={register({required: true})} />
      <div  className="authbutton" >
        <Button variant='outlined'  color="primary" type="submit">Login / SignUp</Button>
      </div>
      </form>
    </section>
  );
}

export default AuthComponent;
