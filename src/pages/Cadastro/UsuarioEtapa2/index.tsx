import "./style.css"

import { Link, useNavigate } from "react-router-dom";

//imagens
import ilutracaoCadastro from "../../../assets/images/ilustra_cadastro.svg";
import seta from "../../../assets/images/seta.png";
import { useState } from "react";

function UsuarioEtapa2() {
    const navigate = useNavigate();
    const [senha, setSenha] = useState<string>("");
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")

    function verificarSenhasIguais(event: any) {
        event.preventDefault()

        if (senha != confirmarSenha)
            console.log("As senhas não conferem!");
        else {
            console.log("As senhas conferem!");
            navigate("/")
        }
    }
    return (
        <>
            <main className="main-cadastro-etapa2">
                <div className="conteudo">
                    <div className="alinhamento_imagens">
                        <div className="image_voltar">
                            <Link to={"/"} className="botao_voltar">
                                {" "}
                                <img src={seta} alt="" />
                            </Link>
                            <div>
                                <Link to={"./"} className="botao_voltar">
                                    {" "}
                                    Voltar
                                </Link>
                            </div>
                        </div>
                        {/* <img class="logo" src="../geral/img_login/logo2.png" alt=""> */}
                        <img className="ilustracao" src={ilutracaoCadastro} alt="" />
                    </div>
                    <div className="pagina">
                        <div className="image_voltar_responsivo">
                            <Link to={"#"} className="botao_voltar">
                                {" "}
                            </Link>
                            <div>
                                <Link to={"#"} className="botao_voltar">
                                    {" "}
                                    Voltar
                                </Link>
                            </div>
                        </div>
                        <div className="bem_vindo">
                            <span>Bem vindo!</span>
                            <h1>Crie sua conta!</h1>
                        </div>
                        <div className="dados_usuario">
                            <form action="" onSubmit={verificarSenhasIguais}>
                                <div>
                                    <label htmlFor="nome">Senha</label>
                                    <input type="password" id="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="senha">Confirmar senha</label>
                                    <input type="password" id="senha" placeholder="Digite sua senha" onChange={(e) => setConfirmarSenha(e.target.value)} />
                                </div>
                                <div className="bc">
                                    <input
                                        className="button_cont"
                                        type={"submit"}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="conta_cadastro">
                            {/* <span href="">Já tem uma conta?</span> */}
                            <Link to={"/login"}>Já tem uma conta? <span> Se logar</span></Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UsuarioEtapa2;
