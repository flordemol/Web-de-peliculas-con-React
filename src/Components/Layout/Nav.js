import React from 'react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { SearchContext } from "./../../context/Search";

const Navegacion =() => {

    const { newSearch } = useContext(SearchContext);

    // Nueva búsqueda
    const handlerSubmit = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        newSearch(text);
    };

    // Estilos de la barra de navegación
    window.onscroll = function () {
        var y = window.scrollY;
        if (y > 40) {
          document.querySelector(".navegacion").classList.add("nav-dark");
        } else {
          document.querySelector(".navegacion").classList.remove("nav-dark");
        };
    };
      
    // Volver al inicio, resetea búsqueda
    const index = () => {
        newSearch("");
        document.querySelector(".search").value = "";
    }

    return ( 
        <Navbar className="navegacion">
            <Link to="/" onClick={index}>
                <Navbar.Brand className="text-white">
                <h1>Lumière</h1>
                </Navbar.Brand>
            </Link>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/"  style={{color:"white"}}>Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" href="/actores" style={{color:"white"}}>Actores</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" style={{color:"white"}}>Mi Lista</Nav.Link>
                </Nav.Item>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <form style={{display:"flex"}} onSubmit={handlerSubmit}>
                    <div className="form-group">
                        <input type="text" name="search" className="form-control search" placeholder="Buscar..."/>
                    </div>
                    <button className="btn btn-primary">Buscar</button>
                </form>
            </Navbar.Collapse>
        </Navbar>
    );
};
 
export default Navegacion;