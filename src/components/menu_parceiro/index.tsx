import React from 'react';

import { PersonOutline, GridOutline, CreateOutline, SettingsOutline, ExitOutline } from 'react-ionicons';
import logoBranca from '../../assets/images/logo_mobili_branca.svg';
import miniana from '../../assets/images/ANA.png';
import logout from '../../assets/images/logout.svg';
import iconePerfil from '../../assets/images/perfil_iconeMenu.svg';
import iconeGerenciamento from '../../assets/images/gerenciamento_iconeMenu.svg';
import iconeFacebook_perfil from '../../assets/images/facebook_perfil.svg';
import iconeTwitter_perfil from '../../assets/images/twitter_perfil.svg';
import iconeLinkedin_perfil from '../../assets/images/linkedin_perfil.svg';
import iconeInstagram_perfil from '../../assets/images/instagram_perfil.svg';

import '../../pages/perfil_parceiro/style.css'

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
                        <a href="">
                            <img src={iconePerfil} alt="" /> Meu Perfil
                        </a>
                    </div>
                    <div
                        className="link_gerenciamento_perfilParceiro"
                        style={{ backgroundColor: "#001E50" }}
                    >
                        <a href="">
                            <img src={iconeGerenciamento} alt="" /> Gerenciamento
                        </a>
                    </div>
                </div>
                <div className="rede_social_perfilParceiro">
                    <h2>Redes Sociais</h2>
                    <nav>
                        <div>
                            <a href="">
                                <img
                                    src={iconeFacebook_perfil}
                                    alt=""
                                />{" "}
                            </a>
                            <a href="">
                                <img
                                    src={iconeTwitter_perfil}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img
                                    src={iconeLinkedin_perfil}
                                    alt=""
                                />
                            </a>
                            <a href="">
                                <img
                                    src={iconeInstagram_perfil}
                                    alt=""
                                />
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="linhaDivisoria_perfilParcero" />
                <div className="perfil_divisoria_perfilParceiro">
                    <img src={miniana} alt="" />
                    <div>
                        <div>
                            <a href="#">Ana Rosa</a>
                            <span>eu@gmail.com</span>
                        </div>
                        <a href="../index.html">
                            <img
                                src={logout}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </aside>
            {/* menu responsivo */}
            <div className="posicao_geral_perfil_parceiro" />
            <div className="phone">
                <div className="navigation">
                    <ul>
                        <li className="list">
                            <a href="#">
                                <span className="icon">
                                    <PersonOutline color={"#fff"}/>
                                </span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./gerenciamento/index.html">
                                <span className="icon">
                                    <GridOutline color={"#fff"}/>
                                </span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./criar_propaganda/index.html">
                                <span className="icon">
                                    <CreateOutline color={"#fff"}/>
                                </span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="./editarperfil.html">
                                <span className="icon">
                                    <SettingsOutline  color={"#fff"}/>
                                </span>
                            </a>
                        </li>
                        <li className="list">
                            <a href="../index.html">
                                <span className="icon">
                                    <ExitOutline color={"#fff"} />
                                </span>
                            </a>
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