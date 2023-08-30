import React from 'react';
import { render } from 'react-dom';


import ilustraPerfil from '../../assets/images/ilustra1_parceiro.svg';
import fotoPerfilUsuario from '../../assets/images/REBECA.png';
import logoBranca from '../../assets/images/logo_mobili_branca.svg';
import miniRebeca from '../../assets/images/mini_rebeca.svg';
import logout from '../../assets/images/logout.svg';
import iconePerfil from '../../assets/images/perfil_iconeMenu.svg';
import iconeGerenciamento from '../../assets/images/gerenciamento_iconeMenu.svg';
import iconeFacebook_perfil from '../../assets/images/facebook_perfil.svg';
import iconeTwitter_perfil from '../../assets/images/twitter_perfil.svg';
import iconeLinkedin_perfil from '../../assets/images/linkedin_perfil.svg';
import iconeInstagram_perfil from '../../assets/images/instagram_perfil.svg';


import './style.css';


function Perfil_parceiro() {

    return (
        <>
            <main>
                <aside>
                    <img
                        src={logoBranca}
                        alt="logo Mobili"
                    />
                    <div className="aside_top">
                        <h2>Menu</h2>
                        <div className="link_perfil">
                            <a href="">
                                <img src={iconePerfil} alt="" /> Meu Perfil
                            </a>
                        </div>
                        <div
                            className="link_gerenciamento"
                            style={{ backgroundColor: "#001E50" }}
                        >
                            <a href="">
                                <img src={iconeGerenciamento} alt="" /> Gerenciamento
                            </a>
                        </div>
                    </div>
                    <div className="rede_social">
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
                    <div className="divisoria" />
                    <div className="perfil">
                        <img src={miniRebeca} alt="" />
                        <div>
                            <div>
                                <a href="#">Rebeca Flores</a>
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
                                        <ion-icon name="person-outline" />
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="./gerenciamento/index.html">
                                    <span className="icon">
                                        <ion-icon name="grid-outline" />
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="./criar_propaganda/index.html">
                                    <span className="icon">
                                        <ion-icon name="create-outline" />
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="./editarperfil.html">
                                    <span className="icon">
                                        <ion-icon name="settings-outline" />
                                    </span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="../index.html">
                                    <span className="icon">
                                        <ion-icon name="exit-outline" />
                                    </span>
                                </a>
                            </li>
                            <div className="indicator" />
                        </ul>
                    </div>
                </div>
                {/* fim menu responsivo */}
                <section className="conteudo">
                    <div className="perfil_principal">

                        <img src={fotoPerfilUsuario} alt="" />

                        <div className="perfil_info">
                            <form action="">
                                <div>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" placeholder="Rebeca" disabled />
                                    </div>
                                    <div>
                                        <label htmlFor="sobrenome">Sobrenome</label>
                                        <input type="text" id="sobrenome" placeholder="Flores" disabled/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id="email" placeholder="eu@email.com" disabled/>
                                    </div>
                                    <div>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="tel" id="telefone" placeholder="1234-5678" disabled/>
                                    </div>
                                </div>
                                <div className="form_submit">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        defaultValue="senhasuperforte"
                                        disabled
                                    />
                                </div>
                                {/* <input type="submit" value="Editar" class="submit_button"> */}
                                <a className="submit_button" href="./editarperfil.html">
                                    Editar
                                </a>
                            </form>
                        </div>
                    </div>
                    <img src={ilustraPerfil} alt="" />
                </section>
            </main>
        </>


    )
}

export default Perfil_parceiro;