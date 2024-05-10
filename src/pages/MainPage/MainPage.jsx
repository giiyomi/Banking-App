import React from 'react'
import "./MainPage.css"
import Dashboard from './components/Dashboard'
import AvionbankLogo from '../components/AvionbankLogo/AvionbankLogo'
import ContactUs from '../components/ContactUs/ContactUs'
import EnrollUser from './components/enrollUser'
import AccHolders from './components/AccHolders'
import { useState } from 'react'


const MainPage = (props) => {
  const {loginCredentials,usernameHolder,setAccUserArrays,setAccUserId,accountUserCredentials} = props
  const [selectedAccount, setSelectedAccount] = useState(null);


  
  return (
    <div className='mainPage'>
      <AvionbankLogo></AvionbankLogo>
      <Dashboard
        loginCredentials={loginCredentials}
        usernameHolder={usernameHolder}
        accountUserCredentials={accountUserCredentials}
        selectedAccount={selectedAccount}>
      </Dashboard>
      <EnrollUser
        setAccUserArrays={setAccUserArrays}
        setAccUserId={setAccUserId}
        accountUserCredentials={accountUserCredentials}
      ></EnrollUser>
      <AccHolders
      accountUserCredentials={accountUserCredentials}
      setSelectedAccount={setSelectedAccount}></AccHolders>
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
