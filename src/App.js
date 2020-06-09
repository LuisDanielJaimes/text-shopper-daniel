import React, {useState} from 'react';
import Inicio from './Components/Inicio';
import Solucion from './Components/Solucion';
import { 
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const AppDefault = () => {

  const [isUrl, setIsUrl] = useState("/");
  const setIsUrlChildren =  (value) => {
    setIsUrl(value);}

  return (
    <Router>
      <div>
      <Navbar className="background-navbar" expand="md" >
        <Link to="/" className="background-navbar-brand" style={{color:(isUrl === "/")? "#18403c":"" }}>Test - Shopper</Link>
        <NavbarToggler />
          <Nav className="mr-auto" >
            <NavItem>
                <Link to="/solucion" style={{color:(isUrl === "/solucion")? "#18403c":"" }}>Solución</Link>
            </NavItem>
          </Nav>
          <NavbarText><a href="https://mexnube.com/" target="_blank" rel="noopener noreferrer" >By Daniel Jaimes </a></NavbarText>
          <img src="https://mexnube.com/webblackimages/dani_5.jpeg" alt="..." className=" img-nav-dan" ></img>
      </Navbar>
    </div>

        <Switch>
          <Route path="/solucion">
            <Solucion setIsUrlChildren={setIsUrlChildren}/>
          </Route>
          <Route path="/">
            <Inicio setIsUrlChildren={setIsUrlChildren}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default AppDefault;
