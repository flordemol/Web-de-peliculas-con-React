import React from 'react';
import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from "./../../context/Auth";
import { SearchContext } from "./../../context/Search";

const Navegacion =() => {

    const { newSearch } = useContext(SearchContext);

    const { auth, logout } = useContext(AuthContext);

    const history = useHistory();

    const exit = () => {
        logout();
        history.push("/login");
    };
    
    // Nueva búsqueda
    const handlerSubmit = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        newSearch(text);
    };

    // Estilos de la barra de navegación
    window.onscroll = function () {
        let y = window.scrollY;
        const navegacion = document.querySelector(".navegacion");
        if(navegacion){
            if (y > 40) {
                navegacion.classList.add("nav-dark");
            } else {
                navegacion.classList.remove("nav-dark");
            };
        }
    };
      
    // Volver al inicio, resetea búsqueda
    const index = () => {
        newSearch("");
        document.querySelector(".search").value = "";
    }

    return ( 
        <Navbar className="navegacion">
            <Link to="/dashboard" onClick={index}>
                <Navbar.Brand className="text-white">
                <h1>Lumière</h1>
                </Navbar.Brand>
            </Link>
            <Nav defaultActiveKey="/dashboard" as="ul" >
                <Nav.Item as="li">
                    <Link to="/dashboard" style={{color:"white"}} onClick={index}>Inicio</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/actores" style={{color:"white"}} onClick={index}>Actores</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="#" style={{color:"white"}} onClick={index}>Mi Lista</Link>
                </Nav.Item>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Text className="text-white">
                Bienvenido, {auth?.name}
            </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
                <form style={{display:"flex"}} onSubmit={handlerSubmit}>
                    <div className="form-group">
                        <input type="text" name="search" className="form-control search" placeholder="Buscar..."/>
                    </div>
                    <button className="btn btn-primary">Buscar</button>
                </form>
                <Navbar.Text>
                    <i
                        className="fas fa-sign-out-alt  text-white fa-2x"
                        onClick={exit}
                        style={{cursor:"pointer"}}
                    ></i>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};
 
export default Navegacion;