import './SignupForm.css'

function SignupForm() {
    return (

    <form className="userInformation">
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
                <input type="text" name="userName" required></input>
                <input type="password" name="passWord" required></input>
                <input type="password" name="confirmPassword" required></input>
                <input 
                type="text"
                className="phoneNumber"
                name="phonenumber"
                pattern="^\+?[0-9]+$"
                placeholder="09*********"
                minlength="10"
                maxlength="15"
                title="Please enter a valid philippine phone number."
                required
                ></input>
                <input text="email" className="email" name="email" placeholder="e.g. example@gmail.com"></input>
            </div>
        </div>
        <button type="submit" className="signUp">
            <div>Sign Up</div>
        </button>
    </form>
    )
}

export default SignupForm;