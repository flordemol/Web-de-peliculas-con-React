import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Navbar } from 'react-bootstrap';
import LogoApi from './../../images/LogoApi.svg';

const Nav = React.memo(() => {

    window.onscroll = function () {
        var y = window.scrollY;
        if (y > 40) {
          document.querySelector(".navegacion").classList.add("nav-dark");
        } else {
          document.querySelector(".navegacion").classList.remove("nav-dark");
        }
      };
      
    return ( 
        <Navbar className="navegacion">
            <Link to="/">
                <Navbar.Brand className="text-white">
                <h1>Lumière</h1>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <form style={{display:"flex"}}>
                    <div className="form-group">
                        <input type="text" name="search" className="form-control" placeholder="Buscar..."/>
                    </div>
                    <button className="btn btn-primary">Buscar</button>
                </form>
                <Image src={LogoApi} style={{ height: '50px' }}/>
            </Navbar.Collapse>
        </Navbar>
    );
});
 
export default Nav;