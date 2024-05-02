import "./LoginPage.css"
import Avionbanklogo from "../../assets/images/avionbank_logo2.png"


function LoginPage(){
    return (
    <div className="loginPage">
        <div className="logoReg">
            <img src={Avionbanklogo}></img>
        </div>

        <div className="loginCreditials">
            <div className="loginTitle">
                Log in to Avion Bank
            </div>
            <form className="loginForm">
                <input type="text" name="userName" placeholder="Username" required></input>
                <input type="text" name="lastname" placeholder="Password" required></input>
            </form>
            <button type="submit" className="login">Log In</button>

            <div className="noAccount">
                <p>Don't Have an account?</p>
                <p className="noAccountSignUp">Sign Up</p>
            </div>
        </div>
    </div>
    )
}

export default LoginPage;