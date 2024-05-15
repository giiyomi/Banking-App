import './TransferPage.css';
import { useState } from 'react';

const TransferPage = (props) => {
    const { accountUserCredentials, setSelectedAccount } = props;
    const [specificAccHolder, setSpecificAccHolder] = useState(null);
    const [transferAmount, setTransferAmount] = useState('');
    
    const handleSelectSet = (index) => {
        const findAccHolder = accountUserCredentials[index - 1];
        setSelectedAccount(findAccHolder);
        setSpecificAccHolder(findAccHolder);
    };

    const closeTransWindow = (event) => {
        const displayTransferPage = document.querySelector('.transferPage');
        if (!event.target.closest('.transferWindow')) {
            displayTransferPage.style.visibility = "hidden";
            displayTransferPage.style.opacity = "0";
        }
    };

    const transferButHit = (event) => {
        event.preventDefault();
        const senderSelect = document.querySelector('.sender');
        const receiverSelect = document.querySelector('.receiver');
        const senderIndex = senderSelect.selectedIndex;
        const receiverIndex = receiverSelect.selectedIndex;
        const senderName = senderSelect.options[senderIndex].innerText;
        const receiverName = receiverSelect.options[receiverIndex].innerText;
        const amountToTransfer = Number(transferAmount);
        const initialBalance = Number(specificAccHolder.initial_balance);

        if (senderName === receiverName) {
            alert("Sender and Receiver must not be the same.");
            return;
        } else if (amountToTransfer <= 0 || isNaN(amountToTransfer)) {
            alert("Please enter a valid amount to transfer.");
            return;
        } else if (initialBalance < amountToTransfer) {
            alert("Insufficient Funds.");
            return;
        } else {
            const adjustedBalance = initialBalance - amountToTransfer;
            const updatedAccounts = [...accountUserCredentials];
            updatedAccounts[senderIndex].initial_balance = adjustedBalance;
            setSelectedAccount(updatedAccounts[senderIndex]);
            setSpecificAccHolder(updatedAccounts[senderIndex]);
            alert(`Transfer successful! New balance: ₱${adjustedBalance.toLocaleString()}`);
        }
    };

    return (
        <div className="transferPage" onClick={closeTransWindow}>
            <div className="transferWindow">
                <form className="containerShadow3" onSubmit={transferButHit}>
                    <div className="transferTitle">
                        Transfer Money
                    </div>
                    <div className="transferFieldDisplay">
                        <div className="transferQuestion">
                            How much would you like to send?
                        </div>
                        <div className="transferField">
                            <div className="labelsAndInputsTransfer">
                                <div className="transLabels">
                                    <label> Transfer from:</label>
                                    <label> Transfer to:</label>
                                    <label> Amount to deposit:</label>
                                </div>
                                <div className="transferInput">
                                    <select className="sender" onChange={(e) => handleSelectSet(e.target.selectedIndex)}>
                                        <option></option>
                                        {accountUserCredentials.map((account, index) => (
                                            <option key={account.id} value={index}>
                                                {account.first_name} {account.last_name}
                                            </option>
                                        ))}
                                    </select>
                                    <select className="receiver">
                                        <option></option>
                                        {accountUserCredentials.map((account, index) => (
                                            <option key={account.id} value={index}>
                                                {account.first_name} {account.last_name}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="number" placeholder="₱" className="amountToTransfer" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
                                </div>
                            </div>
                            {specificAccHolder && 
                            <span className="personalAvailBalTrans">
                                Available Balance: ₱{Number(specificAccHolder.initial_balance).toLocaleString()}
                            </span>}
                        </div>
                    </div>
                    <div className="transferButton">
                        <button type="submit">Transfer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransferPage;
