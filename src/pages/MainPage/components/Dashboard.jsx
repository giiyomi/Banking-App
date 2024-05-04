import './Dashboard.css';
import SignupPage from '../../SignupPage/SignupPage'



function Dashboard(){
    return (
        <div className='mainContainer'>
            <h1>Dashboard</h1>
            <div className='adbtDiv'>
                <button className='adminButton'>
                    <a href={SignupPage}><i class="fa-solid fa-user-gear"></i></a>
                </button>
            </div>
            <div className='userInfo'>
                <div className='userDetail'>
                    <h6>Account Name: 
                    <br/>
                    <span>John Doe</span>
                    </h6>
                </div>
                <div className='userDetail2'>
                    <h6>Account Number:
                    <br/>
                    <span>98712332</span>
                    </h6>
                </div>
            </div>
            <div className='userDetail3'>
                <h2>Balance:
                    <br/>
                    <span>₱5,000</span>
                </h2>
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