import "./Nav.css";
import { useState, useEffect } from "react";
import Icon from "../../assets/caret-right-solid.svg";
// import "./dialog.css"
// import LinkP from "../Link/Link";
import { Link, NavLink } from "react-router-dom";
import "../Link/Link.css";


function Nav() {
    const [hiden, setHiden] = useState(false);
    function handleClick() {
        setHiden(!hiden);
        saveHiden(!hiden);
    }
    // obtener el valor de hiden del localStorage
    useEffect(() => {
        const hidenStorage = localStorage.getItem("hiden");
        if (hidenStorage) {
            setHiden(JSON.parse(hidenStorage));
        }
        else {
            setHiden(false);
        }
    }, []);
    //     Detectar clics fuera del nav
    // Detectar clics fuera del nav o en un enlace dentro del nav
    useEffect(() => {
        function handleClickOutside(event) {
            const navElement = document.getElementById("nav");

            // Verificar si el clic ocurrió fuera del nav o en un enlace dentro del nav
            if (navElement && (!navElement.contains(event.target) || event.target.tagName === 'A')) {
                setHiden(true);
                saveHiden(true);
            }
        }

        // Añadir el event listener cuando el componente se monta
        document.addEventListener("click", handleClickOutside);

        // Eliminar el event listener cuando el componente se desmonta
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    
    function saveHiden(value) {
        localStorage.setItem("hiden", JSON.stringify(value));        
    }
    return (
        <nav id="nav" className={hiden ? "hidden" : ""}> 
            <button onClick={handleClick} id="btnHide">
                <img src={Icon} alt="icon"/>
            </button>
            <ul>
                {/* <li><Link to="/" className="a-nav minecraft">Home</Link></li>
                <li><Link to="/worlds" className="a-nav minecraft">Worlds</Link></li>
                <li><Link to="/locations" className="a-nav minecraft">Locations</Link></li>
                <li><Link to="/settings" className="a-nav minecraft-interface">Settings</Link></li>
                <li><Link to="/about" className="a-nav minecraft-interface">About</Link></li> */}
                {/* chance to navlink */}
                <li><NavLink to="/" className="a-nav minecraft" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/worlds" className="a-nav minecraft" activeClassName="active">Worlds</NavLink></li>
                <li><NavLink to="/locations" className="a-nav minecraft" activeClassName="active">Locations</NavLink></li>
                <li><NavLink to="/settings" className="a-nav minecraft-interface" activeClassName="active">Settings</NavLink></li>
                <li><NavLink to="/about" className="a-nav minecraft-interface" activeClassName="active">About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;