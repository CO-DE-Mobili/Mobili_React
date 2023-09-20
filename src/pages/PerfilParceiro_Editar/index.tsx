import ilustraPerfil from '../../assets/images/ilustra1_parceiro.svg';
import fotoPerfilUsuario from '../../assets/images/REBECA.png';


// componente

import Menu_parceiro from '../../components/Menu_Aside';

import './style.css';


function Editar_perfil_parceiro() {

    return (
        <>

            <main id="main_perfil_parceiro">
                <Menu_parceiro />

                <section className="conteudo_EditarPerfilParceiro">
                    <div className="perfil_principal_EditarperfilParceiro">


                        <div className="header_EditarperfilParceiro">

                            <div>
                                <h1>Editar Perfil</h1>
                            </div>

                            <img src={fotoPerfilUsuario} alt="" className="foto_EditarperfilParceiro" style={{width: "20%"}} />


                        </div>

                        <div className="perfil_info_perfilParceiro">
                            <form action="">
                                <div>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" placeholder="Rebeca" />
                                    </div>
                                    <div>
                                        <label htmlFor="sobrenome">Sobrenome</label>
                                        <input type="text" id="sobrenome" placeholder="Flores" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id="email" placeholder="eu@email.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="tel" id="telefone" placeholder="1234-5678" />
                                    </div>
                                </div>
                                <div className="form_submit">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        defaultValue="senhasuperforte"

                                    />
                                </div>
                                {/* <input type="submit" value="Editar" class="submit_button"> */}
                                <div className="botoes_editar_perfilParceiro">
                                    <a className="submit_button_perfilParceiro_cancelar" href="./perfil_parceiro.html">Cancelar</a>

                                    <div>
                                        <a className="submit_button_perfilParceiro_salvar" href="#">Salvar</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src={ilustraPerfil} alt="" />
                </section>
            </main>
        </>


    )
}

export default Editar_perfil_parceiro;