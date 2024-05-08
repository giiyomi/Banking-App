import './Dashboard.css';
import SignupPage from '../../SignupPage/SignupPage'
import goldChip from '../../../assets/images/goldchip.png'
import AvionBankLogo from '../../../assets/images/avionbank_logo2.png';


function Dashboard(props){
    const {loginCredentials, usernameHolder} = props
    const sameUserName = loginCredentials.find(credential => credential.user_name === usernameHolder())
    const index = loginCredentials.indexOf(sameUserName); 

        const onMouseTooltip = () => {
            const addAccountUserTooltip = document.querySelector('.addAccountUserTooltip');
            addAccountUserTooltip.style.display = "block"
        }
        const offMouseTooltip = () => {
            const addAccountUserTooltip = document.querySelector('.addAccountUserTooltip');
            addAccountUserTooltip.style.display = "none"
        }    


    return (
        <div className='mainContainer'>
            <h1 className='containerTitle'>Dashboard</h1>
            <div className='adbtDiv'>
                <div className='addAccountUserTooltip'>
                    Add an account user here.
                </div>
                <button className='adminButton' onMouseEnter={onMouseTooltip} onMouseLeave={offMouseTooltip}>
                <a href={SignupPage}><i class="fa-solid fa-user-gear" ></i></a>
                </button>
            </div>
            <div className='userInfo'>
                <div className='accountManager'>
                    <h6>Account Manager:</h6>
                    <span>
                        {loginCredentials[index].first_name} {loginCredentials[index].last_name}
                    </span>                        

                </div>
                <div className='accountUser'>
                    <h6>Account User:</h6>
                    <span>Unknown</span>

                </div>
            </div>
            <div className='userDetail3'>
                <div className='displayBalance'>
                    <div className='personalBalance'>
                        <h2>₱6,000</h2>
                    </div>
                    <div className='overallBalance'>
                        <h6> Total Balance</h6>
                        <h6>₱10,000</h6>
                    </div>
                </div>
                <div className='cardDesign'>
                    <div className='avionBankLogo'>
                        <img src={AvionBankLogo} alt="AvionBank_logo"/>
                    </div>
                    <div className='goldChip'>
                        <img src={goldChip} alt="gold_chip"/>
                    </div>
                </div>
            </div>
            <div className='btDiv'>
                <button className='buttons'>Send Money</button>
                <button className='buttons'>Deposit</button>
                <button className='buttons'>Pay Bills</button>
            </div>
      </div>
    )
}

export default Dashboard;