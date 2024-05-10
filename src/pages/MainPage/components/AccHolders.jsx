import './AccHolders.css'


const AccHolders = (props) => {
    const {accountUserCredentials, setSelectedAccount} = props;


    const handleSelectSet = (index) => {
        const findAccHolder = accountUserCredentials[index];
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
    

    const closeWindowUserLists = (event) => {
        const displayAccHolder = document.querySelector('.AccHolders')
        if (!event.target.closest('.accHoldersWindow')){
            displayAccHolder.style.visibility = "hidden";
            displayAccHolder.style.opacity = "0";
            displayAccHolder.style.transition = "visibility .5s"
        }
    }

    const closeUserButton = (event) => {
        const displayAccHolder = document.querySelector('.AccHolders')
        
        event.preventDefault();
        displayAccHolder.style.visibility = "hidden";
        displayAccHolder.style.opacity = "0";
        displayAccHolder.style.transition = "visibility .5s"

    }
    return (
        <div class="AccHolders" onClick={closeWindowUserLists}>
            <div class="accHoldersWindow">
                <form class="shadowContainer1">
                    <div class="clientInfoTitle">
                        Account Holder(s)
                    </div>
                    <div class="accHolderList">
                        <div class="headerTitles">
                            <div class="accHolderName">Full Name</div> 
                            <div class="accHolderEmail">Balance</div> 
                            <div class="accHolderBal">Email</div> 
                        </div>
                        <div className='accountsContainer'>
                            {accountUserCredentials.map((account, index) => (
                                <div key={account.id} class="namesAndBalances" onClick={() => handleSelectSet(index)}>
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

export default AccHolders;
