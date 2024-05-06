
import './App.css';
import MainPage from './pages/MainPage/MainPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import loginCredentialsArray from './assets/data/loginCredentials.json';
import { useState } from 'react';

function App() {
  const [loginCredentials, setNewCredentials] = useState(loginCredentialsArray);

  const credentialsContainer = (newCredentials) => {

    setNewCredentials((prevCredentials) => {
      const updatedCredentialSet = [...prevCredentials, newCredentials];
      console.log(updatedCredentialSet)
      return updatedCredentialSet;
    });
  }


  return (
    <div className="App">
    <LoginPage loginCredentials={loginCredentials}></LoginPage>
    <SignupPage credentialsContainer={credentialsContainer} newId={loginCredentials.length}></SignupPage>
    <MainPage loginCredentials={loginCredentials}></MainPage>
    </div>

  );
}

export default App;
