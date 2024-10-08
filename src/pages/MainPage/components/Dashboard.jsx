import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import goldChip from '../../../assets/images/goldchip.png'
import AvionBankLogo from '../../../assets/images/avionbank_logo2.png';
import AddExpense from './AddExpense';
import expenseData from '../../../assets/data/expense-list.json'



function Dashboard(props){
    const {loginCredentials, usernameHolder, accountUserCredentials, selectedAccount, buttonHolder} = props
    const sameUserName = loginCredentials.find(credential => credential.user_name === usernameHolder())
    const index = loginCredentials.indexOf(sameUserName); 


    const totalBalance = accountUserCredentials.reduce((total, account) => {
        const balance = account.initial_balance;
        return total + balance;
    }, 0);
    
    const onMouseViewUsers = () => {
        const onMouseViewUsers = document.querySelector('.viewAccHolderToolTip');
            onMouseViewUsers.style.opacity = "1";
            onMouseViewUsers.style.transition = "1s";

    }
    const offMouseViewUsers = () => {
        const offMouseViewUsers = document.querySelector('.viewAccHolderToolTip');
            offMouseViewUsers.style.opacity = "0"
            offMouseViewUsers.style.transition = "0s";

    }
    const openAddUser = () => {
        const displayAddUser = document.querySelector('.container');
            displayAddUser.style.visibility = "visible"
            displayAddUser.style.opacity = "1"
            displayAddUser.style.transition = "opacity .5s ease-in-out";
        
    }
    const openAccHolder = () => {
        const displayAccHolder = document.querySelector('.AccHolders');
            displayAccHolder.style.visibility = "visible"
            displayAccHolder.style.opacity = "1"
            displayAccHolder.style.transition = "opacity .5s ease-in-out";
        
    }

    const openChooseAcc = (e) => {
        const displayAccounts = document.querySelector('.chooseAccPage');
        let clickedButton = null;
            displayAccounts.style.visibility = "visible"
            displayAccounts.style.opacity = "1"
            displayAccounts.style.transition = "opacity .5s ease-in-out";

            if (e.target.closest(".Deposit")) {
                clickedButton = "Deposit"
                buttonHolder(clickedButton)
              } else if(e.target.closest(".Withdraw")){
                clickedButton = "Withdraw"
                buttonHolder(clickedButton)
              }
    }

    const openTransferWindow = () => {
        const displayTransferPage = document.querySelector('.transferPage');
        displayTransferPage.style.visibility = "visible"
        displayTransferPage.style.opacity = "1"
        displayTransferPage.style.transition = "opacity .5s ease-in-out";
    }
 

    const [expenses, setExpenses] = useState(expenseData); 
    const [count, setCount] = useState(expenses.length);
    const handleExpenses = (newExpense) => {
    
        let newCount = count + 1;
        setCount(newCount);
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

    const handleDeleteExpense = (expenseId) => {

        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  }

  const [isBudgetVisible, setIsBudgetVisible] = useState(false);

    const toggleBudgetVisibility = () => {
        setIsBudgetVisible(!isBudgetVisible);
    };

 

    return (
        <div className='mainContainer' >
            <h1 className='containerTitle'>Dashboard</h1>
            <div className='adbtDiv'>
                <NavLink to='/loginPage'className='logoutButton' onClick={() => alert("Thank you for logging in!")}>
                <i className="fa-solid fa-arrow-right-from-bracket" id="logout"></i>
                </NavLink>
                <button className='adminButton'
                    onClick={openAddUser}>
                        <i className="fa-solid fa-user-gear" id="addUser"></i>
                </button>
                
            </div>
            <div className='userInfo'>
                <div className='accountManager'>
                    <h6>Account Manager:</h6>
                    <span>
                        {loginCredentials[index].first_name} {loginCredentials[index].last_name}
                    </span>                        

                </div>

                <div className='accountUser'>
                    <h6>Account Holder:</h6>
                    <span>
                    <div className="automaticDisplay">
                        {selectedAccount ? `${selectedAccount.first_name} ${selectedAccount.last_name}` :
                        (accountUserCredentials.length !== 0 &&
                        `${accountUserCredentials[accountUserCredentials.length - 1].first_name}
                        ${accountUserCredentials[accountUserCredentials.length - 1].last_name}`)}
                    </div>
                    </span>
                </div>

            </div>
            <div className='userDetail3'>
                <div className='displayBalance'>
                <div className='personalBalance'>
                    <i class="fa-solid fa-ellipsis"
                        onMouseEnter={onMouseViewUsers}
                        onMouseLeave={offMouseViewUsers}
                        onClick={openAccHolder}
                        id="viewAccountHolder">
                    </i>
                    <div className='viewAccHolderToolTip'>
                        View Account Holders
                    </div>
                    <h2>
                        {selectedAccount ?
                            `₱ ${selectedAccount.initial_balance === null ? 0:
                            selectedAccount.initial_balance.toString().length > 8 ?
                            selectedAccount.initial_balance.toLocaleString().slice(0, 9) + "..." :
                            selectedAccount.initial_balance.toLocaleString()}` : accountUserCredentials.length !== 0?
                            (accountUserCredentials.length !== 0 &&(() => {
                                    const balance = accountUserCredentials[accountUserCredentials.length - 1].initial_balance;
                                    return `₱ ${balance.toString().length > 7? balance.toLocaleString().slice(0, 8) + '...' : balance.toLocaleString()}`;
                            })()): <h2 style={{fontSize: '14px', fontStyle: 'italic'}}>Enroll account holder</h2>
                        }
                    </h2>
                </div>

                    <div className='overallBalance'>
                        <h6> Total Balance</h6>
                        <h6>{`₱${totalBalance.toString().length > 10 ? totalBalance.toLocaleString().slice(0, 10) + '...' : totalBalance.toLocaleString()}`}</h6>

                    </div>
                </div>
                <div className='cardDesign'>
                    <div className='avionBankLogo'>
                        <img src={AvionBankLogo} alt="AvionBank_logo"/>
                    </div>
                    <div className='goldChip'>
                        <img src={goldChip} alt="gold_chip"/>
                    </div>
                </div>
            </div>
            

             <div className='bdgtApp' style={{ display: isBudgetVisible ? 'initial' : 'none' }}>
            <div className='expenseTab'>
                <div className='expenseDiv1'><h6>Expense</h6></div>
                <div className='expenseDiv2'><h6>Price</h6></div>
            </div>
            <div className='budgetApp'>
                {
                    expenses.map((expense) => {
                        return (
                            <div className='expenseItems' key={expense.id}>
                                <span>{expense.expense_name} </span>
                                <span>₱{expense.expense_cost}</span>
                                <button className='deleteExpenseButtons' onClick={() => handleDeleteExpense(expense.id)}>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        );
                    })
                }
      </div> 
      <div>
      <AddExpense handleAddExpenses={handleExpenses} newId={count}></AddExpense>
      </div>
      </div> 
            <div className='btDiv'>
                <button className='Withdraw buttons' onClick={openChooseAcc}>Widthdraw</button>
                <button className='Deposit buttons' onClick={openChooseAcc}>Deposit</button>
                <button className='Transfer buttons' onClick={openTransferWindow}>Transfer</button>
                <button onClick={toggleBudgetVisibility} className='Budget buttons'>Budget</button>
            </div>
      </div>
    )
}

export default Dashboard;