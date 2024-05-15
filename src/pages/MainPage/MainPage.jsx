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
// import SendMoney from './components/sendMoney'
import { useState } from 'react'


const MainPage = (props) => {
  const {loginCredentials,usernameHolder,setAccUserArrays,setAccUserId,accountUserCredentials} = props
  let [selectedAccount, setSelectedAccount] = useState(null);
  const [depositOrWidthdraw, buttonHolder] = useState("");
  const [updatedBalAfterDeposit, getNewBalAfterDep] = useState(null);
  const [updatedBalAfterWithdraw, getNewBalAfterWith] = useState(null);
  let [selectedSender, setSelectedSender] = useState(null) 
  let [selectedReceviver, setSelectedReceiver] = useState(null)

  const depositCalculator = (newBalance) => {
    getNewBalAfterDep(newBalance)

    console.log(`praktis ${updatedBalAfterDeposit}`)
    console.log(`nung simula ${(selectedAccount.initial_balance)}`)
    console.log(`eto ba yon ${newBalance}`)
    selectedAccount.initial_balance = newBalance
    console.log(`pano naman to?${selectedAccount.initial_balance}`)
  };

  const withdrawCalculator = (newBalance) => {
    getNewBalAfterWith(newBalance)

    console.log(`praktis ${updatedBalAfterWithdraw}`)
    console.log(`nung simula ${(selectedAccount.initial_balance)}`)
    console.log(`eto ba yon ${newBalance}`)
    selectedAccount.initial_balance = newBalance
    console.log(`pano naman to?${selectedAccount.initial_balance}`)
  };

  const transferCalculator = (newBalance) => {
    console.log(`ito yung input amount: ${newBalance}`)
    console.log(`ano kaya to sender? ${selectedSender}`)
    console.log(`ano kaya to receiver? ${selectedReceviver}`)
    console.log(`initial amount ng sender ${accountUserCredentials[selectedSender].initial_balance}`)
    console.log(`initial amount ng receiver ${accountUserCredentials[selectedReceviver].initial_balance}`)
    console.log(`ito yung sender's updated balance ${accountUserCredentials[selectedSender].initial_balance - newBalance}`)
    console.log(`ito yung receiver's updated balance ${accountUserCredentials[selectedReceviver].initial_balance + newBalance}`)
    accountUserCredentials[selectedSender].initial_balance = accountUserCredentials[selectedSender].initial_balance - newBalance
    accountUserCredentials[selectedReceviver].initial_balance = accountUserCredentials[selectedReceviver].initial_balance + newBalance
  }



  // console.log(updatedBalAfterWithdraw)
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
      accountUserCredentials={accountUserCredentials}
      depositCalculator={depositCalculator}
      />

      <WithdrawPage
      selectedAccount={selectedAccount}
      accountUserCredentials={accountUserCredentials}
      withdrawCalculator={withdrawCalculator}
      />

      <TransferPage
      accountUserCredentials={accountUserCredentials}
      setSelectedAccount={setSelectedAccount}
      selectedAccount={selectedAccount}
      setSelectedSender={setSelectedSender}
      setSelectedReceiver={setSelectedReceiver}
      transferCalculator={transferCalculator}
      />

      {/* <SendMoney/> */}
      
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
