import './TransferPage.css'
import { useState } from 'react';


const TransferPage = (props) => {
    const {accountUserCredentials, setSelectedAccount} = props;
    const [specificAccHolder, selectedAccHolder] = useState(null);
    

    const handleSelectSet = (index) => {
        const findAccHolder = accountUserCredentials[index - 1] ;
        setSelectedAccount(findAccHolder);
        selectedAccHolder(findAccHolder)
        console.log(findAccHolder)
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
        const senderName = senderSelect.options[senderSelect.selectedIndex].innerText;
        const receiverName = receiverSelect.options[receiverSelect.selectedIndex].innerText;
        const amountToTransfer = Number(document.querySelector('.amountToTransfer').value);
        const initialBalance = Number(specificAccHolder.initial_balance.slice(1))

        if (senderName === receiverName) {
            alert("Sender and Receiver must not be the same.");
            return;
        } else if (amountToTransfer === "" || amountToTransfer <= 0) {
            alert("Please enter a valid amount to transfer.");
            return;
        } else if (Number(initialBalance) < Number(amountToTransfer)){
            alert("Insufficient Funds.")
            return
        } else {
            const adjustedBalance = Number(initialBalance) - Number(amountToTransfer)
            console.log(adjustedBalance)
            return adjustedBalance
            
        }
    };





    return (
        <div class="transferPage" onClick={closeTransWindow}>
        <div class="transferWindow">
            <form class="containerShadow3" onSubmit={() =>{
                handleSelectSet()
                }}>

                <div class="transferTitle">
                    Transfer Money
                </div>
                <div class="transferFieldDisplay">
                    <div class="transferQuestion">
                        How much would you like to send?
                    </div >
                    
                    
                    <div class="transferField">
                        <div class="accHolderNameTransfer"></div>
                        <div class="labelsAndInputsTransfer">
                            <div class="transLabels">
                                <label> Transfer from:</label>
                                <label> Transfer to:</label>
                                <label> Amount to deposit:</label>
                            </div >
                            <div class="transferInput">
                            <select type="text" placeholder="Sender" class="sender" onChange={(e) => handleSelectSet(e.target.selectedIndex)}>
                                <option></option>
                                {accountUserCredentials.map((account) => (
                                    <option key={account.id} class="namesAndBalances">
                                        <div className='senderName'>{account.first_name} {account.last_name}</div>
                                    </option>
                                ))}
                            </select>
                                <select type="text" placeholder="Receiver" class="receiver">
                                <option></option>
                                {accountUserCredentials.map((account) => (
                                    <option key={account.id} class="namesAndBalances">
                                        <div className='receiverName'>{account.first_name} {account.last_name}</div>
                                    </option>
                                ))}
                            </select>
                                <input type="number" placeholder="₱" className='amountToTransfer'></input>
                            </div>
                        </div>
                        {specificAccHolder && 
                        <span class="personalAvailBalTrans">
                            {(specificAccHolder.initial_balance.slice(1)).length < 11 ?
                                `₱${Number(specificAccHolder.initial_balance.slice(1)).toLocaleString()}`:
                                `₱${(Number(specificAccHolder.initial_balance.slice(1)).toLocaleString()).slice(0,11)}...`
                             }
                        </span>
                        }
                        <div class="personalBalTrans">Personal Balance</div>
                    </div>
                </div>
                <div class="transferButton">
                    <button type="submit" onClick={transferButHit}>Transfer</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default TransferPage