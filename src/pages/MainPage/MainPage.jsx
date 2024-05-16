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
  const [updatedBalAfterSend, getNewBalAfterSend] = useState(null);
  const [updatedBalAfterReceive, getNewBalAfterReceive] = useState(null);
  let [selectedReceviver, setSelectedReceiver] = useState(null)

  // const findUserArray = loginCredentials.find(credential => credential.user_name === usernameHolder())
  // const index = loginCredentials.indexOf(findUserArray); 
  // const [accountUserCredentials/* BUONG ARRAY NG ACCOUNT HOLDERS */, accUserArray] = useState(loginCredentials[index].acc_users);


  // const setAccUserArrays = (newUsers) => {
  //   accUserArray((prevUsers) => {
  //     const combinedUserCredentials = [...prevUsers, newUsers];
  //     console.log(combinedUserCredentials)
  //     return combinedUserCredentials;
  //   });
  // }

  const depositCalculator = (newBalance) => {
    getNewBalAfterDep(newBalance)
    console.log(updatedBalAfterDeposit)
    // console.log(`nung simula ${(selectedAccount.initial_balance)}`)
    // console.log(`eto ba yon ${newBalance}`)
    // console.log(`pano naman to?${selectedAccount.initial_balance}`)
    selectedAccount.initial_balance = newBalance
  };

  const withdrawCalculator = (newBalance) => {
    getNewBalAfterWith(newBalance)
    console.log(updatedBalAfterWithdraw)
    // console.log(`nung simula ${(selectedAccount.initial_balance)}`)
    // console.log(`eto ba yon ${newBalance}`)
    // console.log(`pano naman to?${selectedAccount.initial_balance}`)
    selectedAccount.initial_balance = newBalance
  };

  const transferCalculator = (newBalance) => {
    console.log(updatedBalAfterSend)
    console.log(updatedBalAfterReceive)
    selectedAccount.initial_balance = selectedAccount.initial_balance - newBalance
    accountUserCredentials[selectedReceviver].initial_balance = accountUserCredentials[selectedReceviver].initial_balance + newBalance
    getNewBalAfterSend(selectedAccount.initial_balance)
    getNewBalAfterReceive(accountUserCredentials[selectedReceviver].initial_balance)
  }

  // console.log(updatedBalAfterWithdraw)
  // console.log(setAccUserId) // Ito yung number ng arrays ng Account Holders na i-hahandle ng manager.
  // console.log(accountUserCredentials) // Ito mismo yung array na nagawa each time na makapag enroll ng Account Holder.

  return (
    <div className='mainPage'>
      <AvionbankLogo></AvionbankLogo>
      <Dashboard
        loginCredentials={loginCredentials}
        usernameHolder={usernameHolder}
        accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
        selectedAccount={selectedAccount}
        buttonHolder = {buttonHolder}
        transferCalculator={transferCalculator}
      /> 

      <EnrollUser
        setAccUserArrays={setAccUserArrays}
        setAccUserId={setAccUserId} // Pinasa dito yung # of arrays ng Account Holders
        accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
      />

      <AccHolders
      accountUserCredentials={accountUserCredentials} // Pinasa dito yung buong array ng Account Holders
      setSelectedAccount={setSelectedAccount}
      transferCalculator={transferCalculator}
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
      setSelectedReceiver={setSelectedReceiver}
      transferCalculator={transferCalculator}
      />

      {/* <SendMoney/> */}
      
      <ContactUs></ContactUs>
    </div>
  )
}
export default MainPage;
