import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [confirmName, setConfirmName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isProfessor, setIsProfessor] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const handleBlur = () => {
    if (name !== confirmName) {
      setErrorMessage("Os e-mails não correspondem");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== confirmName) {
      setErrorMessage("Os e-mails não correspondem");
    } else if (!password) {
      setErrorMessage("Por favor, insira uma senha");
    } else {
      try {
        const response = await axios.post("http://localhost:4430/register", {
          email: name,
          password: password,
          Professor: isProfessor,
        });

        setErrorMessage("");
        setSuccessMessage("Usuário cadastrado com sucesso");
      } catch (error) {
        console.log(error);
        setErrorMessage("Falha no cadastro. Por favor, tente novamente.");
        setSuccessMessage("");
      }
    }
  };

  return (
    <>
      <div className="min-h-[700px] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mt-6 bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Crie a sua conta
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="name"
                    placeholder="Email"
                    type="name"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="confirm-email" className="sr-only">
                    Confirmar Email
                  </label>
                  <input
                    id="confirm-email"
                    name="confirm-email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirmar Email"
                    value={confirmName}
                    onChange={(e) => setConfirmName(e.target.value)}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-green-500 mt-2">{successMessage}</p>
                )}
              </div>
              <div className="flex items-center mt-4">
                <label className="mr-2">
                  Professor
                  <input
                    type="checkbox"
                    checked={isProfessor}
                    onChange={() => setIsProfessor(!isProfessor)}
                    className="ml-2"
                  />
                </label>
                <label className="ml-4">
                  Aluno
                  <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                    className="ml-2"
                  />
                </label>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registre-se
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-4">
            <p>
              Já tem uma conta?{" "}
              <Link className="text-primary" to="/login">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
