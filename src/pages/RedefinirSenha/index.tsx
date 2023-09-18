import "./style.css"

import { Link } from "react-router-dom";

//imagens
import imgilustra from "../../assets/images/ilustra_cadastro.svg";
import imgseta from "../../assets/images/seta.png";

function RedefinirSenha() {
    return (
        <>
            <main className="redefinir_senha">
                <div className="conteudo">
                    <div className="alinhamento_imagens">
                        <div className="image_voltar">
                            <Link to={"/"} className="botao_voltar">
                                {" "}
                                <img src={imgseta} alt="" />
                            </Link>
                            <div>
                                <Link to={"/"} className="botao_voltar">
                                    {" "}
                                    Voltar
                                </Link>
                            </div>
                        </div>
                        {/* <img class="logo" src="../geral/img_login/logo2.png" alt=""> */}
                        <img
                            className="ilustracao"
                            src={imgilustra}
                            alt=""
                        />
                    </div>
                    <div className="pagina">
                        <div className="image_voltar_responsivo">
                            <Link to={"#"} className="botao_voltar">
                                {""}
                                <img src="../geral/img_login/seta.png" alt="" />
                            </Link>

                        </div>
                        <div className="bem_vindo">
                            <span>Bem vindo!</span>
                            <h1>Redefinir sua senha</h1>
                        </div>
                        <div className="dados_usuario">
                            <form action="">
                                <div>
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" id="senha" placeholder="Digite sua senha" />
                                </div>
                                <div>
                                    <label htmlFor="email">Confirmar senha</label>
                                    <input type="password" id="senha" placeholder="Digite sua senha" />
                                </div>
                                <div>
                                    <div className="form_checkbox">
                                        <div>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id="checkbox"
                                            // onChange={(e) => setCheckboxLogado(e.target.value)}
                                            />
                                            <Link to={"#"}>Lembrar de mim</Link>
                                        </div>

                                        <Link to={"#"}>
                                            Esqueci minha senha
                                        </Link>
                                    </div>
                                    <div className="bc">
                                        <Link className="button_cont" to={"#"}>
                                            Enviar
                                        </Link>




                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RedefinirSenha;

