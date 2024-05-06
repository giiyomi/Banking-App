import './LoginCredentials.css'
// import loginCredentials from '../../../assets/data/loginCredentials.json'



function LoginCredentials(props){
    const {loginCredentials} = props

    const alertLogin = (e) => {
        e.preventDefault();
        const userNameInput = e.target.elements.userName.value;
        const passwordInput = e.target.elements.password.value;
        const matchedCredential = loginCredentials.find(credential => credential.user_name === userNameInput && credential.password === passwordInput);

        if (matchedCredential) {
            alert("You have successfully logged in");
            successLogin(e);
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }

    const successLogin = () => {
        console.log("tagumpay")
        const loginPage = document.querySelector(".loginPage")
        loginPage.style.display = "none"
        const mainPage = document.querySelector(".mainPage")
        mainPage.style.display = "flex"
    }

    const openSigninPage = () => {
        const signupPage = document.querySelector(".regPage")
        signupPage.style.display = "flex"
        const loginPage = document.querySelector(".loginPage")
        loginPage.style.display = "none"
    }

    return (
        <div className="loginCredentials">
            <div className="loginTitle">
                Log in to Avion Bank
            </div>
            <form className="loginForm" onSubmit={alertLogin}>
                <div className="loginInputs">
                    <input type="text" name="userName" placeholder="Username" required></input>
                    <input type="password" name="password" placeholder="Password" required></input>
                </div>
                <button type="submit" className="login">
                    <div>Log In</div>
                </button>
            </form>

            <div className="noAccount">
                <p>Don't Have an account?</p>
                <p className="noAccountSignUp" onClick={openSigninPage}>Sign Up</p>
            </div>
        </div>
    )
}

export default LoginCredentials;