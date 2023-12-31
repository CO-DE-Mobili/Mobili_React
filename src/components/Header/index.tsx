import "./style.css";
import imgLogoI from "../../assets/images/logo_mobili_azul.svg"
import { Link } from "react-router-dom";


function Header() {


    function mostrarMenu() {

        let menu: any = document.getElementById("menu_links");
        let menu_barras: any = document.getElementById("menu_hamburguer");

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
        <header id="header">
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
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/quem_somos">Quem somos</Link>
                                </li>
                                <li>
                                    <Link to={"/contato"}>Contato</Link>
                                </li>
                                <li>
                                    <Link to={"/suporte"}>Suporte</Link>
                                </li>
                                <div className="botoes_header_2">
                                    <Link className="login" to={"#"}>Login</Link>


                                    <Link className="cadastro" to="/cadastro/usuario">Cadastro</Link>

                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="botoes_header">
                    <Link className="login" to={"/login"}>Login</Link>

                    <Link className="cadastro" to="/cadastro/usuario">Cadastro</Link>
                </div>
            </div>
        </header>


    )

}

export default Header;