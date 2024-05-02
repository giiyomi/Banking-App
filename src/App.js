import AppUi from './components/AppUi';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import SignUp from './pages/SignupPage/SignupPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import loginCredentials from './assets/data/loginCredentials.json';



function App() {

  
  return (
    <div className="App">
      <SignUp></SignUp>
      <ContactUs></ContactUs>
      <AppUi></AppUi>
    </div>
  );
}

export default App;
