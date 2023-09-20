import React from 'react';

import { PersonOutline, GridOutline, CreateOutline, SettingsOutline, ExitOutline } from 'react-ionicons';
import logoBranca from '../../assets/images/logo_mobili_branca.svg';
import miniRebeca from '../../assets/images/mini_rebeca.svg';
import logout from '../../assets/images/logout.svg';
import iconePerfil from '../../assets/images/perfil_iconeMenu.svg';
import iconeGerenciamento from '../../assets/images/gerenciamento_iconeMenu.svg';
import iconeFacebook_perfil from '../../assets/images/facebook_perfil.svg';
import iconeTwitter_perfil from '../../assets/images/twitter_perfil.svg';
import iconeLinkedin_perfil from '../../assets/images/linkedin_perfil.svg';
import iconeInstagram_perfil from "../../assets/images/instagram_perfil.svg";


import './style.css'


import { Link } from 'react-router-dom';

function Menu_parceiro() {

    return (
        <>
            <aside id= "aside_menu">
                <img
                    src={logoBranca}
                    alt="logo Mobili"
                />
                <div className="aside_top_perfilParceiro">
                    <h2>Menu</h2>

                    <div
                        className="link_gerenciamento_perfilParceiro"
                        style={{ backgroundColor: "#001E50" }}
                    >
                        <Link to={"/perfil_parceiro/gerenciamento"}>
                            <img src={iconeGerenciamento} alt="" /> Gerenciamento
                        </Link>
                    </div>
                    <div className="link_perfilParceiro">
                        <Link to={"/perfil_parceiro/propaganda"}>
                            <img src={iconePerfil} alt="" /> Adicionar Propaganda
                        </Link>
                    </div>
                </div>
                <div className="rede_social_perfilParceiro">
                    <h2>Redes Sociais</h2>
                    <nav>
                        <div>
                            <Link to={"https://pt-br.facebook.com/"}>
                                <img
                                    src={iconeFacebook_perfil}
                                    alt=""
                                />{" "}
                            </Link>
                            <Link to={"https://twitter.com/"}>
                                <img
                                    src={iconeTwitter_perfil}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to={"https://br.linkedin.com/"}>
                                <img
                                    src={iconeLinkedin_perfil}
                                    alt=""
                                />
                            </Link>
                            <Link to={"https://www.instagram.com/"}>
                                <img
                                    src={iconeInstagram_perfil}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="linhaDivisoria_perfilParcero" />
                <div className="perfil_divisoria_perfilParceiro">
                    <img src={miniRebeca} alt="" />
                    <div>
                        <div>
                            <Link to={"#"}>Rebeca Flores</Link>
                            <span>eu@gmail.com</span>
                        </div>
                        <Link to={"/"}>
                            <img
                                src={logout}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </aside>
            {/* menu responsivo */}
            <div className="posicao_geral_perfil_parceiro" />
            <div className="phone">
                <div className="navigation">
                    <ul>
                        <li className="list">
                            <Link to={"#"}>
                                <span className="icon">
                                    <PersonOutline color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"./gerenciamento/"}>
                                <span className="icon">
                                    <GridOutline color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"./criar_propaganda/"}>
                                <span className="icon">
                                    <CreateOutline color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"./editarperfil"}>
                                <span className="icon">
                                    <SettingsOutline  color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"#"}>
                                <span className="icon">
                                    <ExitOutline color={"#fff"} />
                                </span>
                            </Link>
                        </li>
                        <div className="indicator" />
                    </ul>
                </div>
            </div>
            {/* fim menu responsivo */}
        </>

    )
}

export default Menu_parceiro;