import './WithdrawPage.css'

const WithdrawPage = (props) => {
    const {selectedAccount} = props;


    // VISIBILITY LANG TO
    const closeWithdWindow = (event) => {
        const displayWithdrawPage = document.querySelector('.withdrawPage');
        if (!event.target.closest('.withdrawWindow')) {
            displayWithdrawPage.style.visibility = "hidden";
            displayWithdrawPage.style.opacity = "0";
        }
    };
    const WithdButHit = (event) => {
        const displayWithdrawPage = document.querySelector('.withdrawPage')
        event.preventDefault();
        displayWithdrawPage.style.visibility = "hidden";
        displayWithdrawPage.style.opacity = "0";
    }


    return (
        <div class="withdrawPage" onClick={closeWithdWindow}>
        <div class="withdrawWindow">
            <form class="containerShadow2">
                <div class="withdrawTitle">
                    Withdraw
                </div>
                <div class="withdrawFieldDisplay">
                    <div class="withdrawQuestion">
                        How much would you like to withdraw?
                    </div >
                    
                    <div class="withdrawField">
                        <div class="accHolderNameWithdraw">{selectedAccount ? `${selectedAccount.first_name}'s Account` : "Holder's Account"}</div>
                        <div class="labelsAndInputsWithdraw">
                            <div class="depositLabels">
                                <label> Amount to deposit:</label>
                            </div >
                            <div class="withdrawInput">
                                <input type="number" placeholder="₱" ></input>
                            </div>
                        </div>
                        <span class="personalAvailBalWithd">
                            {selectedAccount ?
                            ` ₱ ${selectedAccount.initial_balance.length > 10 ?
                            `${Number(selectedAccount.initial_balance.slice(1)).toLocaleString().slice(0, 12)}...`:
                            Number(selectedAccount.initial_balance.slice(1)).toLocaleString()}` : null
                            }
                        </span>
                        <div class="personalBalWithdraw">Personal Balance</div>

                    </div>
                </div>
                <div class="withdrawButton">
                    <button onClick={WithdButHit}>Deposit</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default WithdrawPage