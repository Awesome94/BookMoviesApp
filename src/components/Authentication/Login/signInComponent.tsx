import React, {useState} from 'react'

const SignInComponent =()=> {
    const username = useFormInput('');
    const password = useFormInput('');
  

  const onSignInAction = () => {
    fetch('http://localhost:5000/api/v1/login', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(user => {
        if (user) {
        //  loadUser(user)
        //  onRouteChange('home');
        }
      })
  }

    return (
      <article className="br3 ba b--black-10 mv4 w-200 w-50-m w-25-1 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">SignIn</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="full-Name">Username</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" {...username} placeholder="username" id="username"/>
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" {...password} placeholder="password"
                  id="password"/>
              </div>
            </fieldset>

            <div className="">
              <input
                className="b center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="SignIn"
                onClick={onSignInAction}
              />
            </div>
          </div>
        </main>
      </article>
    );
}

const useFormInput = (initialValue:string) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };
  
export default SignInComponent;