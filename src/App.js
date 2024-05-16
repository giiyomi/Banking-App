import './App.css';
import MainPage from './pages/MainPage/MainPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import loginCredentialsArray from './assets/data/loginCredentials.json';
// import accountUsersArray from './assets/data/accountUsers.json'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [loginCredentials, setNewCredentials] = useState(loginCredentialsArray);
  // const [accountUserCredentials/* BUONG ARRAY NG ACCOUNT HOLDERS */, accUserArray] = useState(loginCredentialsArray);
  const [userName, findUserName] = useState('');

  const usernameHolder = () => {
    return userName;
  }
  const setAccUserArrays = (newUsers) => {
    setNewCredentials((prevCredentials) => {
      const updatedCredentials = prevCredentials.map(credential => {
        if (credential.user_name === usernameHolder()) {
          return { ...credential, acc_users: [...credential.acc_users, newUsers] };
        }
        return credential;
      });
      return updatedCredentials;
    });
  }

  const findUserArray = loginCredentials.find(credential => credential.user_name === usernameHolder());
  const accountUserCredentials = findUserArray ? findUserArray.acc_users : [];

  //ITO ANG SYNTAX NA GINAWA NI MIKEE NA NAGPUPUSH SA MGA NAGEGENERATE NA OBJECT AFTER MAG CREATE NG ACCOUNT MANAGERS
  const credentialsContainer = (newCredentials) => {
    setNewCredentials((prevCredentials) => {
      const updatedCredentialSet = [...prevCredentials, newCredentials];
      console.log(updatedCredentialSet)
      return updatedCredentialSet;
    });
  }
  //ITO NAMAN ANG NAGPUPUSH SA MGA NAGEGENERATE NA OBJECT AFTER MAG CREATE NG ACCOUNT HOLDERS
  // const setAccUserArrays = (newUsers) => {
  //   accUserArray((prevUsers) => {
  //     const combinedUserCredentials = [...prevUsers, newUsers];
  //     console.log(combinedUserCredentials)
  //     return combinedUserCredentials;
  //   });
  // }

  //GINAWA KO LANG TO PARA MAKUHA KO KUNG ANONG PANGALAN NG ACCOUNT MANAGER NA NAKALOG IN AT MAIPASA SA MAINPAGE


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<LoginPage/>}/> 

          <Route path='/loginpage'
            element={
            <LoginPage
              loginCredentials={loginCredentials}
              findUserName={findUserName}
              usernameHolder={usernameHolder}>
            </LoginPage>}/>

          <Route path='/signuppage' 
            element={
              <SignupPage 
                credentialsContainer={credentialsContainer}
                newId={loginCredentials.length} 
                loginCredentials={loginCredentials}>
              </SignupPage>}>
          </Route>  

          <Route path='/mainpage' 
            element={
              <MainPage
                loginCredentials={loginCredentials}
                usernameHolder={usernameHolder}
                setAccUserArrays={setAccUserArrays}
                setAccUserId={accountUserCredentials.length}
                accountUserCredentials={accountUserCredentials}
                >
              </MainPage>}>
          </Route>

        </Routes>
      </Router>
    </div>

  );
}

export default App;
