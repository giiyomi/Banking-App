import React from 'react'
import "./MainPage.css"
import Dashboard from './components/Dashboard'
import AvionbankLogo from '../components/AvionbankLogo/AvionbankLogo'
import ContactUs from '../components/ContactUs/ContactUs'

const MainPage = (props) => {
  const {loginCredentials} = props
  
  return (
    <div className='mainPage'>
      <AvionbankLogo></AvionbankLogo>
      <Dashboard loginCredentials={loginCredentials}></Dashboard>
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
