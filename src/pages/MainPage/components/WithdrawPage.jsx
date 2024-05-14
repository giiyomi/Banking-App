import './WithdrawPage.css'
import { useState } from 'react';

const WithdrawPage = (props) => {
      const {selectedAccount, accountUserCredentials, withdrawCalculator} = props;
      const [withdrawAmount, withdrawValue] = useState('');


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
        
        const accHolderNameWithdraw = selectedAccount.initial_balance
        console.log(`tinype ko: ${Number(withdrawAmount)}`)
        console.log('Withdraw Amount:', accHolderNameWithdraw - withdrawAmount);
        const newBalAfterWithdraw = accHolderNameWithdraw - withdrawAmount

        if(newBalAfterWithdraw < 0){
            alert('Insufficient Balance')
            return
        }

        withdrawCalculator(Number(newBalAfterWithdraw))
    }


    return (
        <div class="withdrawPage" onClick={closeWithdWindow}>
        <div class="withdrawWindow">
            <form class="containerShadow2" >
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
                                <label> Amount to withdraw:</label>
                            </div >
                            <div class="withdrawInput">
                                <input type="number" placeholder="₱" value={withdrawAmount} onChange={(e) => {withdrawValue(e.target.value)}}></input>
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
                        <div class="personalBalWithdraw">Personal Balance</div>
                    </div>
                </div>
                <div class="withdrawButton">
                    <button onClick={WithdButHit}>Withdraw</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default WithdrawPage