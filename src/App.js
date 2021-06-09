import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import about from './Pages/about';
import Menu from './Pages/menu';
import Dropdown from './Components/Dropdown';
import contact from './Pages/contact';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu= () =>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
        console.log('resized successfully');
      }
    };

    window.addEventListener('resize', hideMenu);

    return ()=>{
      window.removeEventListener('remove',hideMenu);
    }

  });
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
