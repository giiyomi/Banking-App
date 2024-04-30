import React from 'react'
import "./AppUi.css"

const AppUi = () => {
  return (
    <div className='mainContainer'>
       <h1>Bank App</h1>
       <div className='adbtDiv'>
      <button className='adminButton'><button className='adminButton'><i class="fa-solid fa-user-gear"></i></button>
</button>
      </div>
      <div className='userInfo'>
      <div className='userDetail'>
        <h6>Account Name: <br/><span>John Doe</span></h6>
        </div>
        <div className='userDetail2'><h6>Account Number: <br/><span>98712332</span></h6></div>
      </div>
      <div className='userDetail3'><h2>Balance:<br/><span> ₱5,000</span></h2></div>
      <div className='btDiv'>
      <button className='buttons'>Send Money</button>
      <button className='buttons'>Deposit</button>
      <button className='buttons'>Pay Bills</button></div>
    </div>
  )
}

export default AppUi
