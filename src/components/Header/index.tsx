import "./style.css";
import imgLogoI from "../../assets/images/logo_mobili_azul.svg"
import { Link } from "react-router-dom";


function Header() {
   
    
    function mostrarMenu ()	{

        let menu:any = document.getElementById("menu_links");
        let menu_barras:any = document.getElementById("menu_hamburguer");
        
        if (window.getComputedStyle(menu).display == "none") {
            menu.style.display = "flex"
            menu_barras.setAttribute("aria-label", "fechar menu");
            menu_barras.setAttribute("aria-expanded", "true");
        }
        else {
            menu.style.display = "none"
            menu_barras.setAttribute("aria-label", "abrir menu");
            menu_barras.setAttribute("aria-expanded", "false");
        }
    }


    return (
        <header id= "header">
            <div className="posicionamento_header posicionamento">
                <div className="menu">
                    <img src={imgLogoI} alt="" />
                    <nav>
                        <input type="checkbox" id="input__menu-toggle" className="check" />
                        <label htmlFor="input__menu-toggle" className="label-for-menu">
                            <div
                                className="burger"
                                onClick={mostrarMenu}
                                id="burguer"
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-label="abrir menu"
                            >
                                <div className="one" />
                                <div className="two" />
                                <div className="three" />
                            </div>
                        </label>
                        <div className="main-nav-list" id="recursos">
                            <ul>
                                <li>
                                    <Link to={"#"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Quem somos</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Contato</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Suporte</Link>
                                </li>
                                <div className="botoes_header_2">
                                    <a className="login" href="./login/index.html">
                                        Login
                                    </a>
                                    <a className="cadastro" href="./Cadastro/cadastro.html">
                                        Cadastro
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="botoes_header">
                    <a className="login" href="./login/index.html">
                        Login
                    </a>
                    <a className="cadastro" href="./Cadastro/cadastro.html">
                        Cadastro
                    </a>
                </div>
            </div>
        </header>


    )

}

export default Header;