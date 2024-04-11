import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleBlur = () => {
    if (email !== confirmEmail) {
      setErrorMessage('Os e-mails não correspondem');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setErrorMessage('Os e-mails não correspondem');
    } else if (!password) {
      setErrorMessage('Por favor, insira uma senha');
    } else {
      setErrorMessage('');
      setSuccessMessage('Usuário cadastrado com sucesso');
      setEmail('');
      setConfirmEmail('');
      setPassword('');

      const userData = { email, password };
      localStorage.setItem('user', JSON.stringify(userData));

      console.log(userData);
    }
  };
  return (
    <>
     <Navbar />
     <div className="min-h-[700px] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mt-6 bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Crie a sua conta</h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email</label>
                  <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="confirm-email" className="sr-only">Confirmar Email</label>
                  <input id="confirm-email" name="confirm-email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirmar Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} onBlur={handleBlur} />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Senha</label>
                  <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Registre-se
                </button>
              </div>
            </form>
          </div>
          <div>
            <p>Já tem uma conta? <Link className='text-primary' to='/login'>Faça login</Link></p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Register;