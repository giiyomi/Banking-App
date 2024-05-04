import './LoginCredentials.css'

function LoginCredentials(){
    return (
        <div className="loginCreditials">
            <div className="loginTitle">
                Log in to Avion Bank
            </div>
            <form className="loginForm">
                <div className="loginInputs">
                    <input type="text" name="userName" placeholder="Username" required></input>
                    <input type="text" name="lastname" placeholder="Password" required></input>
                </div>
                <button type="submit" className="login">
                    <div>Log In</div>
                </button>
            </form>


            <div className="noAccount">
                <p>Don't Have an account?</p>
                <p className="noAccountSignUp">Sign Up</p>
            </div>
        </div>
    )
}

export default LoginCredentials;