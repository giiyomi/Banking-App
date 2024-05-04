import React from 'react'
import "./MainPage.css"
import Dashboard from './components/Dashboard'
import AvionbankLogo from '../components/AvionbankLogo/AvionbankLogo'
import ContactUs from '../components/ContactUs/ContactUs'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <AvionbankLogo></AvionbankLogo>
      <Dashboard></Dashboard>
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
