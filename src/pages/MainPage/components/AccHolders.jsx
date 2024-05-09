import './AccHolders.css'

const AccHolders = (props) => {
    const {accountUserCredentials} = props

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
        <div class="AccHolders"
        onClick={closeWindowUserLists}>
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
                    </div >
                    <div className='accountsContainer'>
                    {accountUserCredentials.map((account) => (
                        <div key={account.id} class="namesAndBalances">
                                <div>{account.first_name} {account.last_name}</div>
                                <div>{`₱${Number(account.initial_balance.slice(1)).toLocaleString()}`}</div>
                                <div>{account.email}</div>
                        </div>
                        )
                    )}
                    </div>
                </div>
                <div class="closeAccHolderWindow">
                    <button onClick={closeUserButton}>Close</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default AccHolders