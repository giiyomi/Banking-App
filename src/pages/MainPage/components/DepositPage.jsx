import "./DepositPage.css"
import { useState } from 'react';

const DepositPage  = (props) => {
    const {selectedAccount, accountUserCredentials, depositCalculator} = props;
    const [depositAmount, depositValue] = useState('');



    //VISIBILITY LANG TO
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

        const accHolderNameDeposit = Number(selectedAccount.initial_balance)
        console.log(`Deposit Ko: ${Number(depositAmount)}`)
        console.log('Deposit Amount:', accHolderNameDeposit + depositAmount);
        const newBalAfterDeposit = Number(accHolderNameDeposit) + Number(depositAmount)

        if(newBalAfterDeposit < 0){
            alert('Please enter a valid amount')
            return
        }

        depositCalculator(Number(newBalAfterDeposit))
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
                                    <input type="number" placeholder="₱" value={depositAmount} onChange={(e) => {depositValue(e.target.value)}}></input>
                                </div>
                            </div>
                            <span class="personalAvailBalWithd">
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

