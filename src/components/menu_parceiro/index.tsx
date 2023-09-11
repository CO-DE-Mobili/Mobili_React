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
import iconeInstagram_perfil from '../../assets/images/instagram_perfil.svg';

import '../../pages/perfil_parceiro/style.css'


import { Link } from 'react-router-dom';

function Menu_parceiro() {

    return (
        <>
            <aside>
                <img
                    src={logoBranca}
                    alt="logo Mobili"
                />
                <div className="aside_top_perfilParceiro">
                    <h2>Menu</h2>
                    <div className="link_perfilParceiro">
                        <Link to={""}>
                            <img src={iconePerfil} alt="" /> Meu Perfil
                        </Link>
                    </div>
                    <div
                        className="link_gerenciamento_perfilParceiro"
                        style={{ backgroundColor: "#001E50" }}
                    >
                        <Link to={""}>
                            <img src={iconeGerenciamento} alt="" /> Gerenciamento
                        </Link>
                    </div>
                </div>
                <div className="rede_social_perfilParceiro">
                    <h2>Redes Sociais</h2>
                    <nav>
                        <div>
                            <Link to={""}>
                                <img
                                    src={iconeFacebook_perfil}
                                    alt=""
                                />{" "}
                            </Link>
                            <Link to={""}>
                                <img
                                    src={iconeTwitter_perfil}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to={""}>
                                <img
                                    src={iconeLinkedin_perfil}
                                    alt=""
                                />
                            </Link>
                            <Link to={""}>
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
                        <Link to={"../index.html"}>
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
                            <Link to={"./gerenciamento/index.html"}>
                                <span className="icon">
                                    <GridOutline color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"./criar_propaganda/index.html"}>
                                <span className="icon">
                                    <CreateOutline color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"./editarperfil.html"}>
                                <span className="icon">
                                    <SettingsOutline  color={"#fff"}/>
                                </span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to={"../index.html"}>
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