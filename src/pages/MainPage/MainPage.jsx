import React from 'react'
import "./MainPage.css"
import Dashboard from './components/Dashboard'
import AvionbankLogo from '../components/AvionbankLogo/AvionbankLogo'
import ContactUs from '../components/ContactUs/ContactUs'
import EnrollUser from './components/enrollUser'
import AccHolders from './components/AccHolders'


const MainPage = (props) => {
  const {loginCredentials,usernameHolder,setAccUserArrays,setAccUserId,accountUserCredentials} = props
  
  return (
    <div className='mainPage'>
      <AvionbankLogo></AvionbankLogo>
      <Dashboard
        loginCredentials={loginCredentials}
        usernameHolder={usernameHolder}
        accountUserCredentials={accountUserCredentials}>
      </Dashboard>
      <EnrollUser
        setAccUserArrays={setAccUserArrays}
        setAccUserId={setAccUserId}
        accountUserCredentials={accountUserCredentials}
      ></EnrollUser>
      <AccHolders accountUserCredentials={accountUserCredentials}></AccHolders>
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
