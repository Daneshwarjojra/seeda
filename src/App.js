import React, {useState} from 'react';
import './App.scss';
import Footer from './components/footer';
import SignUpForm from './components/form/signupForm/SignUpForm';
import ProductNavbar from './components/navbar/Navbar';

function App() {
  const [navigate, setNavigate] = useState(false);
  const handleNavigate = () => {
    setNavigate(true);
  }
  const setToDefaultNavigateSate =() => {
    setNavigate(false);
  }
  return (
    <div className="App">
      <ProductNavbar navigate={navigate} setToDefaultNavigateSate={setToDefaultNavigateSate} />
      <SignUpForm handleNavigate={handleNavigate} navigate={navigate}/>
      <Footer/>
    </div>
  );
}

export default App;
