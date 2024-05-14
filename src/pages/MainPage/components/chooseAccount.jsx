import './chooseAccount.css'
import '../../../assets/images/401kBalanceCompare_EmployerMatch.gif'


const ChooseAccount = (props) => {
    const {accountUserCredentials, setSelectedAccount, depositOrWidthdraw} = props;



    const handleSelectSet = (index) => {
        const findAccHolder = accountUserCredentials[index]; //ni re-assign ko lang kay findAccHolder
        setSelectedAccount(findAccHolder);

        if (depositOrWidthdraw === 'Withdraw') {
            openWithdrawPage();
        } else if (depositOrWidthdraw === 'Deposit') {
            openDepositPage(); // Dapat palitan mo ang pangalan ng function na tatawagin dito
        }
    };
    
    const totalBalance = accountUserCredentials.reduce((total, account) => {
        const balance = account.initial_balance;
        return total + balance;;
    }, 0);
    

    const closeUserButton = (event) => {
        event.preventDefault();
        const chooseAccPage = document.querySelector('.chooseAccPage')
        chooseAccPage.style.visibility = "hidden";
        chooseAccPage.style.opacity = "0";
    }

    const closeWindowUserLists = (event) => {
        const chooseAccPage = document.querySelector('.chooseAccPage')
        // const flexDepositPage = document.querySelector('.depositPage')
        if (!event.target.closest('.chooseAccWindow')){
            chooseAccPage.style.visibility = "hidden";
            chooseAccPage.style.opacity = "0";
            // flexDepositPage.style.display = "flex"
        }
    }

    const closeWindowAccHolder = () => {
        const chooseAccPage = document.querySelector('.chooseAccPage')
        chooseAccPage.style.visibility = "hidden";
        chooseAccPage.style.opacity = "0";
    }

    const openDepositPage = () => {
        const displayDespositPage = document.querySelector('.depositPage')
            displayDespositPage.style.visibility = "visible" 
            displayDespositPage.style.opacity = "1"
            displayDespositPage.style.transition = "opacity .5s ease-in-out"
    }

    const openWithdrawPage = () => {
        const displayWithdrawPage = document.querySelector('.withdrawPage')
        displayWithdrawPage.style.visibility = "visible" 
        displayWithdrawPage.style.opacity = "1"
        displayWithdrawPage.style.transition = "opacity .5s ease-in-out"
    }


    
    

    return (
        <div class="chooseAccPage" onClick={closeWindowUserLists}>
            <div class="chooseAccWindow">
                <form class="edgeShadow">
                    <div class="chooseAccTitle">
                        Choose Account
                    </div>
                    <div class="accHolderList">
                        <div class="headerTitles">
                            <div>Full Name</div> 
                            <div>Balance</div> 
                            <div>Email</div> 
                        </div>
                        <div className='accountsContainer'>
                            {accountUserCredentials.map((account, index) => (
                                <div key={account.id} class="namesAndBalances" onClick={(event) => {
                                    closeWindowAccHolder(event);
                                    handleSelectSet(index)}}>
                                    <div>{account.first_name} {account.last_name}</div>
                                    <div>{`₱${account.initial_balance.toLocaleString()}`}</div>
                                    <div>{account.email}</div>
                                </div>
                            ))}
                        </div>
                        <div className='sumTotalBalance'><strong>Total:</strong> ₱{totalBalance.toString().length > 12 ? `${totalBalance.toLocaleString().slice(0, 12)}, ...` : totalBalance.toLocaleString()}</div>
                    </div>
                    <div class="closeAccHolderWindow">
                        <button onClick={closeUserButton}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChooseAccount;
