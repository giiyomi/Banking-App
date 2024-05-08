import './SignupForm.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


// import loginCredentialsArray from '../../../assets/data/loginCredentials.json'

function SignupForm(props) {
    const {credentialsContainer, newId, loginCredentials} = props
    const [firstNameValue, firstName] = useState('');
    const [lastNameValue, lastName] = useState('');
    const [usernameValue, userName] = useState('');
    const [passwordValue, passWord] = useState('');
    const [confirmedPwValue, confirmedpassWord] = useState('');
    const [cpnumberValue, phoneNumber] = useState('');
    const [emailValue, email] = useState('');
    const navigate = useNavigate ();


    const addLoginCredentials = (e) => {
        e.preventDefault();

        const userExists = loginCredentials.find(credential => 
            credential.first_name === firstNameValue && 
            credential.last_name === lastNameValue
        );
        const emailExists = loginCredentials.find(credential => 
            credential.email === emailValue
        );
        const cpnumberExists = loginCredentials.find(credential => 
            credential.phone_number === cpnumberValue
        );
        const usernameExists = loginCredentials.find(credential => 
            credential.user_name === usernameValue
        );


        if (passwordValue !== confirmedPwValue) {
            alert("Password and Confirm Password should match!");
            return; 
        } else if (userExists) {
            alert("User already exists.");
            return;
        } else if (emailExists) {
            alert("Email address is already registered.");
            return;
        } else if (cpnumberExists) {
            alert("Phone number is already registered.");
            return;
        } else if (usernameExists) {
            alert("Username is already used.");
            return;
        }

        const newLoginObject = {
          first_name: firstNameValue,
          last_name: lastNameValue,
          user_name: usernameValue,
          password: passwordValue,
          confirm_password: confirmedPwValue,
          phone_number: cpnumberValue,
          email: emailValue,
          id: newId
        }

        console.log(newLoginObject);
        credentialsContainer(newLoginObject);

        firstName('');
        lastName('');
        userName('');
        passWord('');
        confirmedpassWord('');
        phoneNumber('');
        email('');
        navigate("/loginpage");
    }

    return (
    <form className="userInformation" onSubmit = {addLoginCredentials}>
        <div className="regTitle">
            Banking Enrollment
        </div>
        <div className="regForm">
            <div className='titlesInForms'>Personal Information</div>
            <div className='personalInfo'>
                <div className='regFormLabels'>
                    <label htmlFor="firstName">First name:</label>
                    <label htmlFor="lastName">Last name:</label>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <label htmlFor="email"> E-mail:</label>
                </div>
                <div className='regFormInputs'>
                    <input type="text" name="firstName" value={firstNameValue} onChange={(e) => firstName(e.target.value)} required></input>
                    <input type="text" name="lastName" value={lastNameValue} onChange={(e) => lastName(e.target.value)} required></input>
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
            <div className='titlesInForms'>Create an Account</div>
            <div className='createanAccount'>
                <div className="regFormLabels">

                    <label htmlFor="userName">User name:</label>
                    <label htmlFor="password">Password:</label>
                    <label htmlFor="confirmPassword"> Confirm Password:</label>
                    
                </div>
                <div className="regFormInputs">

                    <input type="text" name="userName" value={usernameValue} onChange={(e) => userName(e.target.value)} required></input>
                    <input type="password" name="passWord" value={passwordValue} onChange={(e) => passWord(e.target.value)} required></input>
                    <input type="password" name="confirmPassword" value={confirmedPwValue} onChange={(e) => confirmedpassWord(e.target.value)} required></input>

                </div>
            </div>
        </div>
        <button type="submit" className="signUp">
            <div>Sign Up</div>
        </button>
    </form>
    )
}

export default SignupForm;