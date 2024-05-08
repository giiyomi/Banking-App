import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import ContactUs from '../components/ContactUs/ContactUs';
import AvionbankLogo from "../components/AvionbankLogo/AvionbankLogo";
import LoginCredentials from "./components/LoginCredentials";
import loginCredentialsArray from "../../assets/data/loginCredentials.json";


function LoginPage(props) {
    const { loginCredentials, findUserName, usernameHolder } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (loginCredentialsArray.length === 0) {
            navigate("/loginpage");
        }
    }, [navigate]);

    return (
        <div className="loginPage">
            <AvionbankLogo />
            <LoginCredentials loginCredentials={loginCredentials} findUserName={findUserName} usernameHolder={usernameHolder}/>
            <ContactUs />
        </div>
    );
}

export default LoginPage;
