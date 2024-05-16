// import React, { useEffect } from 'react';
import './enrollUser.css';
import { useState } from "react";

const EnrollUser = (props) => {
    const {setAccUserArrays, setAccUserId, accountUserCredentials} = props
    const [firstNameValue, firstName] = useState('');
    const [lastNameValue, lastName] = useState('');
    const [emailValue, email] = useState('');
    const [initialBalValue, initialBal] = useState('');

    const handleKeyPress = (event) => {
        const inputValue = event.key;
        if (isNaN(inputValue)) {
            event.preventDefault();
        }
    };

    const addUserCredentials = (e) => {
        e.preventDefault();

        //ACCOUNT CREATION CONDITIONS
        const userExists = accountUserCredentials.find(credential => 
            credential.first_name === firstNameValue && 
            credential.last_name === lastNameValue
        );
        const emailExists = accountUserCredentials.find(credential => 
            credential.email === emailValue
        );
        if (userExists) {
            alert("User already exists.");
            return;
        } else if (emailExists) {
            alert("Email address is already registered.");
            return;
        } else if(initialBalValue.startsWith("₱-") || initialBalValue.startsWith("₱0") || initialBalValue === "₱") {
            alert("Please enter a valid amount.")
            return;
        } else if (!/^₱?\d+(\.\d+)?$/.test(initialBalValue)) {
            alert("Please enter a valid amount.");
            return;
        } else if (!/^[a-zA-Z ]+$/.test(firstNameValue) || !/^[a-zA-Z ]+$/.test(lastNameValue)) {
            alert('First and last name should only contain letters or spaces.') 
            return;
        }

        const capitalize = (str) => {
            return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        };

        // CREATION OF MANAGER'S ACCOUNT - This object will be pushed to the empty array everytime creating an account.
        const newAccUserObject = {
          first_name: capitalize(firstNameValue),
          last_name: capitalize(lastNameValue),
          email: emailValue,
          initial_balance: Number(initialBalValue.slice(1)),
          id: setAccUserId
        }

        // console.log(newAccUserObject);
        setAccUserArrays(newAccUserObject);

        firstName(''); //Calling all the UseState
        lastName(''); //Calling all the UseState
        email(''); //Calling all the UseState
        initialBal(''); //Calling all the UseState
    }


    //VISIBILITY

    const closeWindowUserEnrollment = (event) => {
        const displayAddUser = document.querySelector('.container')
        if (!event.target.closest('.addUserWindow')){
            displayAddUser.style.visibility = "hidden";
            displayAddUser.style.opacity = "0";
            displayAddUser.style.transition = "visibility .5s"
        }
    }

    return (
        <div className="container"
            onClick={closeWindowUserEnrollment}>
            <div className="addUserWindow">
                <form className="shadowContainer" >
                    <div className="clientInfoTitle">
                        New client information
                    </div>
                    <div className="addUserField">
                        <div className="labels">
                            <label> <div>First name:</div> </label>
                            <label> <div>Last name:</div> </label>
                            <label> <div>Email address:</div> </label>
                            <label> <div>Initial Deposit:</div> </label>
                        </div >
                        <div className="inputs">
                            <input type="text" placeholder="Juan" value={firstNameValue} onChange={(e) => firstName(e.target.value)} required></input>
                            <input type="text" placeholder="Dela Cruz" value={lastNameValue} onChange={(e) => lastName(e.target.value)} required></input>
                            <input type="email" placeholder="email@gmail.com" value={emailValue} onChange={(e) => email(e.target.value)} required></input>
                            <input placeholder="₱" type="text" value={initialBalValue}
                                onChange={(e) => {
                                    const newValue = e.target.value; newValue.startsWith("₱")? initialBal(newValue): initialBal("₱" + newValue)
                                }}
                                onKeyPress={handleKeyPress} required/>
                        </div>
                    </div>
                    <div className="addUserButton">
                        <button type="submit" onClick={addUserCredentials}>Add user</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EnrollUser;
