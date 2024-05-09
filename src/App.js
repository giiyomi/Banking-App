import './App.css';
import MainPage from './pages/MainPage/MainPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import loginCredentialsArray from './assets/data/loginCredentials.json';
import accountUsersArray from './assets/data/accountUsers.json'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [loginCredentials, setNewCredentials] = useState(loginCredentialsArray);
  const [accountUserCredentials, accUserArray] = useState(accountUsersArray);
  const [userName, findUserName] = useState('');

  const credentialsContainer = (newCredentials) => {
    setNewCredentials((prevCredentials) => {
      const updatedCredentialSet = [...prevCredentials, newCredentials];
      console.log(updatedCredentialSet)
      return updatedCredentialSet;
    });
  }

  const setAccUserArrays = (newUsers) => {
    accUserArray((prevUsers) => {
      const combinedUserCredentials = [...prevUsers, newUsers];
      console.log(combinedUserCredentials)
      return combinedUserCredentials;
    });
  }

  const usernameHolder = () => {
    return userName;
  }

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
