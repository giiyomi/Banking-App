import "./DepositPage.css";
import { useState } from 'react';

const DepositPage = (props) => {
    const { selectedAccount, accountUserCredentials, depositCalculator } = props;
    const [depositAmount, setDepositAmount] = useState('');

    const closeWinDepWidow = (event) => {
        const displayDepositPage = document.querySelector('.depositPage');
        if (!event.target.closest('.depositWindow')) {
            displayDepositPage.style.visibility = "hidden";
            displayDepositPage.style.opacity = "0";
        }
    };

    const DepButHit = (event) => {
        event.preventDefault();
        const displayDepositPage = document.querySelector('.depositPage');

        const accHolderNameDeposit = Number(selectedAccount.initial_balance);
        const newDepositAmount = Number(depositAmount);
        const newBalAfterDeposit = accHolderNameDeposit + newDepositAmount;

        if (newDepositAmount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        depositCalculator(newBalAfterDeposit);
        displayDepositPage.style.visibility = "hidden";
        displayDepositPage.style.opacity = "0";
        setDepositAmount('');
    };

    return (
        <div className="depositPage" onClick={closeWinDepWidow}>
            <div className="depositWindow">
                <form className="edgeShadow">
                    <div className="depositTitle">
                        Deposit
                    </div>
                    <div className="depositFieldDisplay">
                        <div className="questionTitle">
                            How much would you like to deposit?
                        </div>
                        <div className="depositField">
                            <div className="nameAccHolder">
                                {selectedAccount ? `${selectedAccount.first_name}'s Account` : "Holder's Account"}
                            </div>
                            <div className="labelsAndInputs">
                                <div className="depositLabels">
                                    <label> Amount to Deposit:</label>
                                </div>
                                <div className="depositInputs">
                                    <input
                                        type="number"
                                        placeholder="₱"
                                        value={depositAmount}
                                        onChange={(e) => setDepositAmount(e.target.value)}
                                    />
                                </div>
                            </div>
                            <span className="personalAvailBalWithd">
                                {selectedAccount ?
                                    `₱ ${selectedAccount.initial_balance === null ? 0 :
                                        selectedAccount.initial_balance.toString().length > 8 ?
                                            selectedAccount.initial_balance.toLocaleString().slice(0, 9) + "..." :
                                            selectedAccount.initial_balance.toLocaleString()
                                    }` :
                                    accountUserCredentials.length !== 0 ? (() => {
                                        const balance = accountUserCredentials[accountUserCredentials.length - 1].initial_balance;
                                        return `₱ ${balance.toString().length > 7 ? balance.toLocaleString().slice(0, 8) + '...' : balance.toLocaleString()}`;
                                    })() : <h2 style={{ fontSize: '14px', fontStyle: 'italic' }}>Enroll account holder</h2>
                                }
                            </span>
                            <div className="personalBal">Personal Balance</div>
                        </div>
                    </div>
                    <div className="depositButton">
                        <button onClick={DepButHit}> Deposit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DepositPage;
