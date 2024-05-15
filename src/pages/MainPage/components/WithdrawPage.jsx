import './WithdrawPage.css';
import { useState } from 'react';

const WithdrawPage = (props) => {
    const { selectedAccount, accountUserCredentials, withdrawCalculator } = props;
    const [withdrawAmount, setWithdrawAmount] = useState('');

    // Function to handle closing the withdrawal window
    const closeWithdWindow = (event) => {
        const displayWithdrawPage = document.querySelector('.withdrawPage');
        if (!event.target.closest('.withdrawWindow')) {
            displayWithdrawPage.style.visibility = "hidden";
            displayWithdrawPage.style.opacity = "0";
        }
    };

    const WithdButHit = (event) => {
        event.preventDefault();
        const displayWithdrawPage = document.querySelector('.withdrawPage');
        displayWithdrawPage.style.visibility = "hidden";
        displayWithdrawPage.style.opacity = "0";

        const withdrawAmountNumber = Number(withdrawAmount); // Convert the withdraw amount to a number
        const accHolderNameWithdraw = selectedAccount.initial_balance;
        const newBalAfterWithdraw = accHolderNameWithdraw - withdrawAmountNumber;

        if (newBalAfterWithdraw < 0) {
            alert('Insufficient Balance');
            return;
        }

        withdrawCalculator(newBalAfterWithdraw);
        setWithdrawAmount('');
    };

    return (
        <div className="withdrawPage" onClick={closeWithdWindow}>
            <div className="withdrawWindow">
                <form className="containerShadow2">
                    <div className="withdrawTitle">Withdraw</div>
                    <div className="withdrawFieldDisplay">
                        <div className="withdrawQuestion">How much would you like to withdraw?</div>
                        <div className="withdrawField">
                            <div className="accHolderNameWithdraw">
                                {selectedAccount ? `${selectedAccount.first_name}'s Account` : "Holder's Account"}
                            </div>
                            <div className="labelsAndInputsWithdraw">
                                <div className="depositLabels">
                                    <label>Amount to withdraw:</label>
                                </div>
                                <div className="withdrawInput">
                                    <input
                                        type="number"
                                        placeholder="₱"
                                        value={withdrawAmount}
                                        onChange={(e) => setWithdrawAmount(e.target.value)}
                                    />
                                </div>
                            </div>
                            <span className="personalAvailBalWithd">
                                {selectedAccount ?
                                    `₱ ${selectedAccount.initial_balance === null ? 0 :
                                    selectedAccount.initial_balance.toString().length > 8 ?
                                    selectedAccount.initial_balance.toLocaleString().slice(0, 9) + "..." :
                                    selectedAccount.initial_balance.toLocaleString()}` : 
                                    accountUserCredentials.length !== 0 ?
                                    (() => {
                                        const balance = accountUserCredentials[accountUserCredentials.length - 1].initial_balance;
                                        return `₱ ${balance.toString().length > 7 ? balance.toLocaleString().slice(0, 8) + '...' : balance.toLocaleString()}`;
                                    })() :
                                    <h2 style={{fontSize: '14px', fontStyle: 'italic'}}>Enroll account holder</h2>
                                }
                            </span>
                            <div className="personalBalWithdraw">Personal Balance</div>
                        </div>
                    </div>
                    <div className="withdrawButton">
                        <button onClick={WithdButHit}>Withdraw</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WithdrawPage;
