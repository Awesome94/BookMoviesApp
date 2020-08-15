import * as React from "react";
import { render } from "react-dom";
import { useForm } from "react-hook-form";
import {Button} from '@material-ui/core';


import "./styles.css";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  }); // firstName and lastName will have correct type

  return (
    <section className="authContainer">
      <form className = "siginForm" onSubmit={onSubmit}>
        <label className="authlabel">Username</label>
        <input  name="username" ref={register} />
        <label className="authlabel">Password</label>
        <input type="password"  name="password" ref={register} />
      </form>
      <div  className="authbutton" >
        <Button variant='outlined'  color="secondary" type="submit">Submit</Button>
      </div>
    </section>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
