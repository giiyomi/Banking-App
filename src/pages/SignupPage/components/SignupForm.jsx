import './SignupForm.css'
import { useState } from "react";
// import loginCredentialsArray from '../../../assets/data/loginCredentials.json'

function SignupForm(props) {
    const {credentialsContainer, newId} = props

    const [usernameValue, userName] = useState('');
    const [passwordValue, passWord] = useState('');
    const [confirmedPwValue, confirmedpassWord] = useState('');
    const [cpnumberValue, phoneNumber] = useState('');
    const [emailValue, email] = useState('');


    const addLoginCredentials = (e) => {
        e.preventDefault();

        if (passwordValue !== confirmedPwValue) {
            alert("Password and Confirm Password should match!");
            return;
        }

        const newLoginObject = {
          user_name: usernameValue,
          password: passwordValue,
          confirm_password: confirmedPwValue,
          phone_number: cpnumberValue,
          email: emailValue,
          id: newId
        }

        console.log(newLoginObject);
        credentialsContainer(newLoginObject);

        userName('');
        passWord('');
        confirmedpassWord('');
        phoneNumber('');
        email('');
        accountCreated()
    }

    const accountCreated = () => {
        const signupPage = document.querySelector(".regPage")
        signupPage.style.display = "none"
        const loginPage = document.querySelector(".loginPage")
        loginPage.style.display = "flex"
    }

    return (
    <form className="userInformation" onSubmit = {addLoginCredentials}>
        <div className="regTitle">
            Banking Enrollment
        </div>
        <div className="regForm">
            <div className="regFormLabels">
                <label htmlFor="userName">User name:</label>
                <label htmlFor="password">Password:</label>
                <label htmlFor="confirmPassword"> Confirm Password:</label>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <label htmlFor="email"> E-mail:</label>
            </div>
            <div className="regFormInputs">    
                <input type="text" name="userName" value={usernameValue} onChange={(e) => userName(e.target.value)} required></input>
                <input type="password" name="passWord" value={passwordValue} onChange={(e) => passWord(e.target.value)} required></input>
                <input type="password" name="confirmPassword" value={confirmedPwValue} onChange={(e) => confirmedpassWord(e.target.value)} required></input>
                <input 
                type="text"
                className="phoneNumber"
                name="phonenumber"
                pattern="^\+?[0-9]+$"
                placeholder="09*********"
                minlength="10"
                maxlength="15"
                title="Please enter a valid philippine phone number."
                value={cpnumberValue} onChange={(e) => phoneNumber(e.target.value)}
                required
                ></input>
                <input text="email" className="email" name="email" placeholder="e.g. example@gmail.com" value={emailValue} onChange={(e) => email(e.target.value)}></input>
            </div>
        </div>
        <button type="submit" className="signUp">
            <div>Sign Up</div>
        </button>
    </form>
    )
}

export default SignupForm;