import './TransferPage.css';
import { useState } from 'react';

const TransferPage = (props) => {
    const { accountUserCredentials, setSelectedAccount, setSelectedSender, setSelectedReceiver, transferCalculator } = props;
    const [specificAccHolder, setSpecificAccHolder] = useState(null);
    const [transferAmount, setTransferAmount] = useState('');
    
    const handleSelectSender = (index) => {
        const findSender = [index - 1]

        console.log(findSender)
        setSelectedSender(findSender);

        console.log(`tignan natin si sender ${findSender}`)
    };

    const handleSelectReceiver = (index) => {
        const findReceiver = [index - 1];
        setSelectedReceiver(findReceiver)

        console.log(`tignan natin si receiver ${findReceiver}`)
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


        if (senderName === receiverName) {
            alert("Sender and Receiver must not be the same.");
            return;
        } else if (amountToTransfer <= 0 || isNaN(amountToTransfer)) {
            alert("Please enter a valid amount to transfer.");
            return;

        } else {


            transferCalculator(Number(transferAmount))

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
                                    <select className="sender" onChange={(e) => handleSelectSender(e.target.selectedIndex)}>
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
                        <button onClick={transferButHit} type="submit">Transfer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransferPage;
