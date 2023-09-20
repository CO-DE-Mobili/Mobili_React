import { Link } from 'react-router-dom';
import React from 'react'

import ilustraPerfil from '../../assets/images/ilustra1_parceiro.svg';
import fotoPerfilUsuario from '../../assets/images/REBECA.png';


// componente

import Menu_parceiro from '../../components/Menu_Aside';



import './style.css';


function Perfil_parceiro() {

    return (
        <>
            <main id= "main_perfil_parceiro">
                <Menu_parceiro />

                <section className="conteudo_perfilParceiro">
                    <div className="perfil_principal_perfilParceiro">

                        <img src={fotoPerfilUsuario} alt="" />

                        <div className="perfil_info_perfilParceiro">
                            <form action="">
                                <div>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" placeholder="Rebeca" disabled />
                                    </div>
                                    <div>
                                        <label htmlFor="sobrenome">Sobrenome</label>
                                        <input type="text" id="sobrenome" placeholder="Flores" disabled />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id="email" placeholder="eu@email.com" disabled />
                                    </div>
                                    <div>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="tel" id="telefone" placeholder="1234-5678" disabled />
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
                                <Link className="submit_button_perfilParceiro" to={"/perfil_parceiro/editar"}>
                                    Editar
                                </Link>

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