import React from 'react'
import "./MainPage.css"
import Dashboard from './components/Dashboard'
import AvionbankLogo from '../components/AvionbankLogo/AvionbankLogo'
import ContactUs from '../components/ContactUs/ContactUs'
import EnrollUser from './components/enrollUser'
import AccHolders from './components/AccHolders'
import ChooseAccount from './components/chooseAccount'
import DepositPage from './components/DepositPage'
import WithdrawPage from './components/WithdrawPage'
import TransferPage from './components/TransferPage'
import { useState } from 'react'


const MainPage = (props) => {
  const {loginCredentials,usernameHolder,setAccUserArrays,setAccUserId,accountUserCredentials} = props
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [depositOrWidthdraw, buttonHolder] = useState("");
  

  console.log(setAccUserId) // Ito yung number ng arrays ng Account Holders na i-hahandle ng manager.
  console.log(accountUserCredentials) // Ito mismo yung array na nagawa each time na makapag enroll ng Account Holder.
  return (
    <div className='mainPage'>
      <AvionbankLogo></AvionbankLogo>
      <Dashboard
        loginCredentials={loginCredentials}
        usernameHolder={usernameHolder}
        accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
        selectedAccount={selectedAccount}
        buttonHolder = {buttonHolder}
      /> 


      <EnrollUser
        setAccUserArrays={setAccUserArrays}
        setAccUserId={setAccUserId} // Pinasa dito yung # of arrays ng Account Holders
        accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
      />

      <AccHolders
      accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
      setSelectedAccount={setSelectedAccount}
      />

      <ChooseAccount
      accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
      setSelectedAccount = {setSelectedAccount}
      depositOrWidthdraw = {depositOrWidthdraw}
      />
 

      <DepositPage
      selectedAccount={selectedAccount}
      />

      <WithdrawPage
      selectedAccount={selectedAccount}
      />

      <TransferPage
      accountUserCredentials={accountUserCredentials}
      setSelectedAccount={setSelectedAccount}
      selectedAccount={selectedAccount}
      />
      
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
