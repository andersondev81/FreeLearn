import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4430/login', { 
        email: name, 
        password: password 
      });
      localStorage.setItem('token', response.data.token.Token);
      localStorage.setItem('ID', response.data.token.ID);
     localStorage.setItem('Professor', response.data.token.Professor);
      console.log(response.data.token.ID);
      console.log(response.data.token.Professor);
      console.log(response.data.token.Token);
      console.log('Login bem-sucedido');
    } catch (error) {
      console.log('Falha no login');
    }
  };
  return (
    <>
      <div className="min-h-[700px] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mt-6 bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Faça login
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="name"
                    type="name"
             
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;