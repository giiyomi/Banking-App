import './AccHolders.css'


const AccHolders = (props) => {
    const {accountUserCredentials, setSelectedAccount} = props;

    // ITONG FUNCTION NA ITO AY PARA MALAMAN KUNG SINONG ACCOUNT HOLDER ANG NAPINDOT SA LOOB NG ACCOUNT HOLDERS WINDOW (MAKIKITA MO TO ONCE KINLIK MO YUNG ELLIPSIS)
    const handleSelectSet = (index) => {
        const findAccHolder = accountUserCredentials[index]; //DITO AY IPINASA ANG INDEX NG ARRAY NA KINLICK AT IPINANGALAN KAY findAccHolder
        setSelectedAccount(findAccHolder); 
    };
    
    //C
    const totalBalance = accountUserCredentials.reduce((total, account) => {
        const balance = account.initial_balance;
        return total + balance;;
    }, 0);


    //MGA VISIBILITY
    const closeUserButton = (event) => {
        const displayAccHolder = document.querySelector('.AccHolders')
        event.preventDefault();
        displayAccHolder.style.visibility = "hidden";
        displayAccHolder.style.opacity = "0";
        displayAccHolder.style.transition = "visibility .5s"
    }
    const closeWindowUserLists = (event) => {
        const displayAccHolder = document.querySelector('.AccHolders')
        if (!event.target.closest('.accHoldersWindow')){
            displayAccHolder.style.visibility = "hidden";
            displayAccHolder.style.opacity = "0";
        }
    }
    const closeWindowAccHolder = () => {
        const displayAccHolder = document.querySelector('.AccHolders')
        displayAccHolder.style.visibility = "hidden";
        displayAccHolder.style.opacity = "0";
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
                                <div key={account.id} class="namesAndBalances" onClick={(event) => {
                                    closeWindowAccHolder(event);
                                    handleSelectSet(index)}}>
                                    <div>{account.first_name} {account.last_name}</div>
                                    <div>{`₱${Number(account.initial_balance).toLocaleString()}`}</div>
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

export default AccHolders;
