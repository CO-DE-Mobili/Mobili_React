import React from 'react';

import { PersonOutline, GridOutline, CreateOutline, SettingsOutline, ExitOutline } from 'react-ionicons';


function Menu_parceiro() {

    return (
        <>
            <aside>
                <img
                    src="../perfil_adm/gerenciamento_parceiros_adm/img/logo_footer.svg"
                    alt="logo Mobili"
                />
                <div className="aside_top">
                    <h2>Menu</h2>
                    <div className="link_perfil">
                        <a href="./perfil_parceiro.html">
                            <img src="../img/perfil.svg" alt="" /> Meu Perfil
                        </a>
                    </div>
                    <div
                        className="link_gerenciamento"
                        style={{ backgroundColor: "#001E50" }}
                    >
                        <a href="./gerenciamento/index.html">
                            <img src="../img/gerenciamento.svg" alt="" /> Gerenciamento
                        </a>
                    </div>
                </div>
                <div className="rede_social">
                    <h2>Redes Sociais</h2>
                    <nav>
                        <div>
                            <a href="">
                                <img
                                    src="../perfil_adm/gerenciamento_parceiros_adm/img/facebook_perfil.svg"
                                    alt=""
                                />{" "}
                            </a>
                            <a href="">
                                <img
                                    src="../perfil_adm/gerenciamento_parceiros_adm/img/twitter_perfil.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img
                                    src="../perfil_adm/gerenciamento_parceiros_adm/img/linkedin_perfil.svg"
                                    alt=""
                                />
                            </a>
                            <a href="">
                                <img
                                    src="../perfil_adm/gerenciamento_parceiros_adm/img/instagram_perfil.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="divisoria" />
                <div className="perfil">
                    <img src="./img/rebeca.svg" alt="" />
                    <div>
                        <div>
                            <a href="#">Rebeca Flores</a>
                            <span>eu@gmail.com</span>
                        </div>
                        <a href="../index.html">
                            <img
                                src="../perfil_adm/gerenciamento_parceiros_adm/img/sair_perfil.svg"
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
        </>

    )
}

export default Menu_parceiro;