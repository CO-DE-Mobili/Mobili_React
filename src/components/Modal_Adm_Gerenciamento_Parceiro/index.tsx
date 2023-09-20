import "./style.css";
import fotoPerfilAdm from "../../assets/images/ilustra2_home.png";

function modalparceiro() {
    return (
        <div className="sombra_modal">


            <div className="perfil_info_perfilParceiro">

                <div className="linha_titulo">
                    <h1>Cachorros Frios e Sorvetes Quentes</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                </div>

                <div className="linha_form">
                    <div>
                        <img src={fotoPerfilAdm} alt="" />
                    </div>
                    <form action="">
                        <div className="linha_input">
                            <div className="item_input">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="" placeholder="Rebeca" />
                            </div>
                            <div className="item_input">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" id="" placeholder="Flores" />
                            </div>
                        </div>
                        <div className="linha_input">
                            <div className="item_input">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="" placeholder="eu@email.com" />
                            </div>
                            <div className="item_input">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" id="" placeholder="1234-5678" />
                            </div>
                        </div>
                        <div className="descricao">
                            <label htmlFor="senha">Descrição</label>
                            <textarea name="" id=""></textarea>
                        </div>
                        {/* <input type="submit" value="Editar" class="submit_button"> */}
                        <div className="botoes_editar_perfilParceiro">
                            <a className="submit_button_perfilParceiro_rejeitar" href="./perfil_parceiro.html">Rejeitar</a>

                            <a className="submit_button_perfilParceiro_aprovar" href="#">Aprovar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default modalparceiro
