import React, {useState} from 'react';
import './fonts/SF-Compact-Rounded-Bold.woff';
import './App.scss';
import Footer from './components/footer';
import SignUpForm from './components/form/signupForm/SignUpForm';
import Homepage from './components/homepage';
import ProductNavbar from './components/navbar/Navbar';

function App() {
  const [navigate, setNavigate] = useState(false);
  const [homeView, setHomeView] = useState(true);
  const handleHomeView = () => {
    setHomeView(false);
  }
  const handleNavigate = () => {
    setNavigate(true);
  }
  const setToDefaultNavigateSate =() => {
    setNavigate(false);
  }
  return (
    <div className="App">
      {homeView ?
        <Homepage handleHomeView={handleHomeView} navigate={navigate} setToDefaultNavigateSate={setToDefaultNavigateSate} />
      :
      <>
        <ProductNavbar navigate={navigate} setToDefaultNavigateSate={setToDefaultNavigateSate} />
        <SignUpForm handleNavigate={handleNavigate} navigate={navigate}/>
        <Footer/>
      </>
      }
    </div>
  );
}

export default App;
