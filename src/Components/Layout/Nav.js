import React from 'react';
import { useContext, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from "./../../context/Auth";
import { SearchContext } from "./../../context/Search";

const Navegacion =() => {

    // Context 
    const { newSearch } = useContext(SearchContext);
    const { auth, logout } = useContext(AuthContext);

    const history = useHistory();

    const searchRef = useRef("");

    // Logout
    const exit = () => {
        logout();
        history.push("/login");
    };
    
    // Nueva búsqueda
    const handlerSubmit = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        newSearch(text);
        if(history.location.pathname === "/dashboard") history.push(`/dashboard?search=${text}`);
        if(history.location.pathname === "/actores") history.push(`/actores?search=${text}`);
    };

    // Volver al inicio, resetea búsqueda
    const index = () => {
        newSearch("");
        searchRef.current.value = "";
    }

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

    return ( 
        <Navbar className="navegacion">
            <Link to="/dashboard" onClick={index}>
                <Navbar.Brand>
                <h1>Lumière</h1>
                </Navbar.Brand>
            </Link>
            <Nav defaultActiveKey="/dashboard" as="ul">
                <Nav.Item as="li">
                    <Link to="/dashboard" className={"link-navegacion"} onClick={index}>Inicio</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/actores" className={"link-navegacion"} onClick={index}>Actores</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="#"className={"link-navegacion"} onClick={index}>Mi Lista</Link>
                </Nav.Item>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Text className="bienvenido text-white">
                Bienvenido, {auth?.name}
            </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
                <form style={{display:"flex"}} onSubmit={handlerSubmit}>
                    <div className="form-group">
                        <input type="text" name="search" className="form-control search" placeholder="Buscar..." ref={searchRef}/>
                    </div>
                    <button className="btn btn-primary">Buscar</button>
                </form>
                <Navbar.Text>
                    <i
                        className="fas fa-sign-out-alt fa-2x exit"
                        onClick={exit}
                    ></i>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};
 
export default Navegacion;