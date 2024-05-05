import "./LoginPage.css"
import ContactUs from '../components/ContactUs/ContactUs';
import AvionbankLogo from "../components/AvionbankLogo/AvionbankLogo";
import LoginCredentials from "./components/LoginCredentials";


function LoginPage(props){
    const {loginCredentials} = props
    return (
    <div className="loginPage">
        <AvionbankLogo></AvionbankLogo>
        <LoginCredentials loginCredentials={loginCredentials}></LoginCredentials>
        <ContactUs></ContactUs>
    </div>
    )
}

export default LoginPage;