import "./DepositPage.css"

const DepositPage  = (props) => {
    const {selectedAccount} = props;


    const closeWinDepWidow = (event) => {
        const displayDepositPage = document.querySelector('.depositPage');
        if (!event.target.closest('.depositWindow')) {
            displayDepositPage.style.visibility = "hidden";
            displayDepositPage.style.opacity = "0";
        }
    };

    const DepButHit = (event) => {
        const displayDepositPage = document.querySelector('.depositPage')
        event.preventDefault();
        displayDepositPage.style.visibility = "hidden";
        displayDepositPage.style.opacity = "0";
    }


    return (
        <div class="depositPage" onClick={closeWinDepWidow}>
            <div class="depositWindow">
                <form class="edgeShadow">
                    <div class="depositTitle">
                        Deposit
                    </div>
                    <div class="depositFieldDisplay">
                        <div class="questionTitle">
                            How much would you like to deposit?
                        </div >
                        <div class="depositField">
                            <div class="nameAccHolder"> {selectedAccount ? `${selectedAccount.first_name}'s Account` : "Holder's Account"}</div>
                            <div class="labelsAndInputs">
                                <div class="depositLabels">
                                    <label> Amount to Deposit:</label>
                                </div >
                                <div class="depositInputs">
                                    <input type="number" placeholder="₱" ></input>
                                </div>
                            </div>
                            <span className="personalAvailBal">
                                {selectedAccount ?
                                    ` ₱${Number(selectedAccount.initial_balance.slice(1)).toLocaleString().slice(0, 13)}${selectedAccount.initial_balance.length > 13 ? '...' : ''}` :
                                    null
                                }
                            </span>
                            <div class="personalBal">Personal Balance</div>
                        </div>
                    </div>
                    <div class="depositButton">
                        <button onClick={DepButHit}> Deposit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DepositPage

