// import { useState } from 'react';
import "./SignupPage.css";
import AvionbankLogo from "../components/AvionbankLogo/AvionbankLogo";
import SignupForm from "./components/SignupForm";
import ContactUs from '../components/ContactUs/ContactUs';





function SignupPage(props){
    const {credentialsContainer, newId, loginCredentials} = props

    return (
        <div className="regPage">
            <AvionbankLogo></AvionbankLogo>
            <SignupForm credentialsContainer={credentialsContainer} newId={newId} loginCredentials={loginCredentials}></SignupForm>
            <ContactUs></ContactUs>
        </div>
    )
}

export default SignupPage;