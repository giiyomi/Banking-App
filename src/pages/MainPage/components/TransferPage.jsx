import './TransferPage.css';
import { useState } from 'react';

const TransferPage = (props) => {
    const { accountUserCredentials, selectedAccount, setSelectedAccount, setSelectedReceiver, transferCalculator } = props;
    const [transferAmount, setTransferAmount] = useState('');
    const [clicked, isClicked] = useState(null)
    const senderSelect = document.querySelector('.sender');
    const receiverSelect = document.querySelector('.receiver');

    const handleKeyPress = (event) => {
        if (event.key === 'e') {
            event.preventDefault();
        }
    };

    // console.log(`ANONG INDEX TO ${clicked}`)
    const handleSelectSender = (index) => {
        const findSender = [index - 1]
        // console.log(`ANONG INDEX KAYA TO ${clicked}`)
        setSelectedAccount(accountUserCredentials[findSender])
        // console.log(`tignan natin si sender ${findSender}`)
    };
    const handleSelectReceiver = (index) => {
        const findReceiver = [index - 1];
        setSelectedReceiver(findReceiver)
        // console.log(`tignan natin si receiver ${findReceiver}`)
    };
    const closeTransWindow = (event) => {
        const displayTransferPage = document.querySelector('.transferPage');
        if (!event.target.closest('.transferWindow')) {
            displayTransferPage.style.visibility = "hidden";
            displayTransferPage.style.opacity = "0";
            isClicked(null)
        }
    };

    const transferButHit = (event) => {
        event.preventDefault();
        const hideTransferPage = document.querySelector('.transferPage');
        hideTransferPage.style.visibility = "hidden";
        hideTransferPage.style.opacity = "0";
        const senderIndex = senderSelect.selectedIndex;
        const receiverIndex = receiverSelect.selectedIndex;
        const senderName = senderSelect.options[senderIndex].innerText;
        const receiverName = receiverSelect.options[receiverIndex].innerText;
        const amountToTransfer = Number(transferAmount);

        if (senderName === receiverName) {
            alert("Sender and Receiver must not be the same.");
            return;
        }else if(!senderName || !receiverName){
            alert("Please fill up all the fields.")
        }else if (amountToTransfer <= 0 || isNaN(amountToTransfer)) {
            alert("Please enter a valid amount to transfer.");
            return;
        }else if (selectedAccount.initial_balance < amountToTransfer) {
            alert("Insufficient Balance. Please try again.");
            return;
        } else {
            senderSelect.value = ''
            receiverSelect.value = ''
            setTransferAmount('')
            transferCalculator(Number(transferAmount))
            isClicked(null)
        }
    };

    return (
        <div className="transferPage" onClick={closeTransWindow}>
            <div className="transferWindow">
                <form className="containerShadow3" >
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
                                    <select className="sender" onChange={(e) => {
                                        handleSelectSender(e.target.selectedIndex)
                                        
                                        }}
                                        onClick={(e) => isClicked(e.target.selectedIndex)}
                                        >
                                        <option></option>
                                        {accountUserCredentials.map((account, index) => (
                                            <option key={account.id} value={index}>
                                                {account.first_name} {account.last_name}
                                            </option>
                                        ))}
                                    </select>
                                    <select className="receiver" onChange={(e) => handleSelectReceiver(e.target.selectedIndex)}>
                                        <option></option>
                                        {accountUserCredentials.map((account, index) => (
                                            <option key={account.id} value={index}>
                                                {account.first_name} {account.last_name}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="number"
                                        placeholder="₱"
                                        className="amountToTransfer"
                                        value={transferAmount}
                                        onChange={(e) => 
                                            setTransferAmount(e.target.value)
                                            }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                            </div>
                            {/* {specificAccHolder && 
                            <span className="personalAvailBalTrans">
                                Available Balance: ₱{Number(specificAccHolder.initial_balance).toLocaleString()}
                            </span>} */}
                                <strong>Available Balance:</strong>
                                <i>
                                    ₱{clicked === 0 || clicked === null ? 0 :
                                    selectedAccount ?
                                    (selectedAccount.initial_balance).toLocaleString() :
                                    0}
                                </i>

                        </div>
                    </div>
                    <div className="transferButton">
                        <button onClick={transferButHit} type="submit">Transfer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransferPage;
