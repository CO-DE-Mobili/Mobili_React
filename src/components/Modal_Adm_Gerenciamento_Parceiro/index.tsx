import "./style.css";


function modalparceiro() {
    return(
        <section className="conteudo_perfilParceiro">
        <div className="perfil_principal_perfilParceiro">

            {/* <img src={fotoPerfilAdm} alt="" /> */}

            <div className="perfil_info_perfilParceiro">
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" placeholder="Rebeca"  />
                        </div>
                        <div>
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input type="text" id="sobrenome" placeholder="Flores"  />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="eu@email.com"  />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" placeholder="1234-5678"  />
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
        {/* <img src={ilustraPerfil} alt="" /> */}
    </section>

    )
}
export default modalparceiro
