import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div >
      <Navbar dark color='primary'>
        <container  fluid>
          <NavbarBrand href='/' className='ms-5 '>
            Ristorante Con Fusion
          </NavbarBrand>
        </container>

      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
