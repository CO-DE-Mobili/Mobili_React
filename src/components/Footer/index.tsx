import "./style.css";

import imgFacebook from "../../assets/images/icon_facebook.svg"
import imgTwitter from "../../assets/images/icon_twitter.svg"
import imgLinkedin from "../../assets/images/icon_linkedin.svg"
import imgInstagram from "../../assets/images/icon_instagram.svg"
import imgLogoII from "../../assets/images/logo_mobili_branca.svg"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer id= "footer">
                <div className="posicionamento_footer posicionamento">
                    <section className="container_footer1">
                        <img className="logo_footer" src={imgLogoII} alt="" />
                        <div className="redes_sociais">
                            <nav>
                                <Link to="https://pt-br.facebook.com/">
                                    {" "}
                                    <img src={imgFacebook} alt="" />{" "}
                                </Link>
                                <Link to="https://twitter.com/">
                                    {" "}
                                    <img src={imgTwitter} alt="" />{" "}
                                </Link>
                                <Link to="https://www.linkedin.com/home">
                                    {" "}
                                    <img src={imgLinkedin} alt="" />{" "}
                                </Link>
                                <a href="https://www.instagram.com/">
                                    {" "}
                                    <img src={imgInstagram} alt="" />{" "}
                                </a>
                            </nav>
                        </div>
                    </section>
                    <div className="linha" />
                    <section className="container_footer2">
                        <nav className="menu_footer">
                            <span>Paginas</span>
                            <ul>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/quem_somos">
                                    <li>Quem somos</li>
                                </Link>
                                <Link to="/contato">
                                    <li>Contato</li>
                                </Link>
                                <Link to="/suporte">
                                    <li>Suporte</li>
                                </Link>
                                <Link to="/login">
                                    <li>Login</li>
                                </Link>
                                <Link to="/cadastro/usuario">
                                <li>Cadastro</li>
                                </Link>
                            </ul>
                        </nav>
                        <div className="news">
                            <span>Junte-se à nossa newsletter</span>
                            <div className="email_footer">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Seu e-mail"
                                />
                                <input type="submit" defaultValue="Enviar" />
                            </div>
                            <p>
                                Enviaremos atualizações semanais para ajudar na gestão de suas
                                ferramentas de maneira mais eficiente.
                            </p>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )

}
export default Footer;

