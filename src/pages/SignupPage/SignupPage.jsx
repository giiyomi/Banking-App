// import { useState } from 'react';
import "./SignupPage.css";
import AvionbankLogo from "../components/AvionbankLogo/AvionbankLogo";
import SignupForm from "./components/SignupForm";
import ContactUs from '../components/ContactUs/ContactUs';





function SignupPage(){
    return (
        <div className="regPage">
            <AvionbankLogo></AvionbankLogo>
            <SignupForm></SignupForm>

            <ContactUs></ContactUs>
        </div>
    )
}

export default SignupPage;