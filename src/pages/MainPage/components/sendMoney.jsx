// SendMoney.jsx
import React, { useState } from 'react';
import './sendMoney.css';

function SendMoney({ closeSendMoney }) {
    const [receiverAccount, setReceiverAccount] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!receiverAccount || !amount) {
            alert('Please fill in all fields.');
            return;
        }
        // Simulate sending money
        console.log(`Sending ${amount} to account ${receiverAccount}`);
        setReceiverAccount('');
        setAmount('');
        closeSendMoney(); // Close modal after submission
    };

    return (
        <div className="sendMoneyModal" onClick={closeSendMoney}>
            <div className="sendMoneyContent" onClick={(e) => e.stopPropagation()}>
                <h1>Send Money</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Receiver's Account Number:
                        <input
                            type="text"
                            value={receiverAccount}
                            onChange={(e) => setReceiverAccount(e.target.value)}
                        />
                    </label>
                    <label>
                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                    <button type="submit">Send Money</button>
                </form>
            </div>
        </div>
    );
}

export default SendMoney;
