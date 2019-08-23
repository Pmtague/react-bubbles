import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [user, setUser] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const changeHandler = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', user.credentials)
      .then(res => {
        console.log('Login', res.data)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblePage')
      })
      .catch(err => {
        console.log('Login error!', err.response)
      })
  };

  return (
    <div>
				<form className='login-form' onSubmit={ submitHandler }>
					<label>
						Username
						<input
							type='text'
							name='username'
							placeholder='pmtague'
							value={ user.credentials.username }
							onChange={ changeHandler }
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Top secret access code'
							value={ user.credentials.password }
							onChange={ changeHandler }
						/>
					</label>
					<button>Log In</button>
				</form>
			</div>
  );
};

export default Login;
