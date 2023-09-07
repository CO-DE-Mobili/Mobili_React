import "./style.css"

import { Link } from "react-router-dom";

//imagens
import ilutracaoCadastro from "../../../assets/images/ilustra_cadastro.svg";
import seta from "../../../assets/images/seta.png";

function UsuarioEtapa2() {
    return(
        <>
         <main className="main-cadastro-etapa2">
            <div className="conteudo">
                <div className="alinhamento_imagens">
                <div className="image_voltar">
                    <Link to={"#"} className="botao_voltar">
                    {" "}
                    <img src={seta} alt="" />
                    </Link>
                    <div>
                    <Link to={"#"} className="botao_voltar">
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
                    <form action="">
                    <div>
                        <label htmlFor="nome">Senha</label>
                        <input type="nome" id="nome" defaultValue="******" />
                    </div>
                    <div>
                        <label htmlFor="email">Confirmar senha</label>
                        <input type="email" id="email" defaultValue="******" />
                    </div>
                    <div className="bc">
                        <Link
                        className="button_cont"
                       to={"#"}
                        >
                        Finalizar
                        </Link>
                    </div>
                    </form>
                </div>
                <div className="conta_cadastro">
                    {/* <span href="">Já tem uma conta?</span> */}
                    <Link to={"#"}>Já tem uma conta? <span> Se logar</span></Link>
                </div>
                </div>
            </div>
        </main>

      </>
    )
}

export default UsuarioEtapa2;
    