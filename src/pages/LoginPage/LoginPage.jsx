import "./LoginPage.css"
import ContactUs from '../components/ContactUs/ContactUs';
import AvionbankLogo from "../components/AvionbankLogo/AvionbankLogo";
import LoginCredentials from "./components/LoginCredentials";


function LoginPage(){
    return (
    <div className="loginPage">
        <AvionbankLogo></AvionbankLogo>
        <LoginCredentials></LoginCredentials>
        <ContactUs></ContactUs>
    </div>
    )
}

export default LoginPage;