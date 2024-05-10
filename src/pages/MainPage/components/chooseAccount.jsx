import './chooseAccount.css'
import '../../../assets/images/401kBalanceCompare_EmployerMatch.gif'


const ChooseAccount = (props) => {
    const {accountUserCredentials, setSelectedAccount} = props;


    const handleSelectSet = (index) => {
        const findAccHolder = accountUserCredentials[index];//ni re-assign ko lang kay findAccHolder
        setSelectedAccount(findAccHolder);
    };
    
    const totalBalance = accountUserCredentials.reduce((total, account) => {
        const balance = parseFloat(account.initial_balance.replace(/\D/g, ''));
    
        if (balance.toString().length > 12) { 
            return total + balance;
        } else {
            return total + balance;
        }
    }, 0);

    const formattedTotalBalance = totalBalance.toLocaleString();
    

    const closeUserButton = (event) => {
        const chooseAccPage = document.querySelector('.chooseAccPage')
        event.preventDefault();
        chooseAccPage.style.visibility = "hidden";
        chooseAccPage.style.opacity = "0";
    }

    const closeWindowUserLists = (event) => {
        const chooseAccPage = document.querySelector('.chooseAccPage')
        if (!event.target.closest('.chooseAccWindow')){
            chooseAccPage.style.visibility = "hidden";
            chooseAccPage.style.opacity = "0";
        }
    }

    const closeWindowAccHolder = () => {
        const chooseAccPage = document.querySelector('.chooseAccPage')
        chooseAccPage.style.visibility = "hidden";
        chooseAccPage.style.opacity = "0";
        openDespositPage()

    }

    const openDespositPage = () => {
        const displayDespositPage = document.querySelector('.depositPage')
            displayDespositPage.style.visibility = "visible" 
            displayDespositPage.style.opacity = "1"
            displayDespositPage.style.transition = "opacity .5s ease-in-out"

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
                                    <div>{`₱${Number(account.initial_balance.slice(1)).toLocaleString()}`}</div>
                                    <div>{account.email}</div>
                                </div>
                            ))}
                        </div>
                        <div className='sumTotalBalance'><strong>Total:</strong> ₱{formattedTotalBalance.length > 15 ? formattedTotalBalance.slice(0, 15) + '...' : formattedTotalBalance}</div>
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
