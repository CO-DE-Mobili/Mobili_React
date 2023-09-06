import "./style.css"

import { Link } from "react-router-dom";

//imagens
import seta from "../../../assets/images/seta.png";
import ilustracaologin from "../../../assets/images/ilustra_login.svg";

function CadastroUsuario() {

    // const [email, setEmail] = useState<String>("");
    // const [nome, setNome] = useState<string>("");


    // const cadastro={
    //     email: email,
    //     nome :nome,
    // }

    // function cadastro(event: any) {
    //     event.preventDefault()


    // }


    return (
        <>
            <main className="cadastro">
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
                        <img className="logo" src="../geral/img_login/logo2.png" alt=""/>
                        <img className="ilustracao" src={ilustracaologin} alt="" />
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
                                    <label htmlFor="nome">Nome completo</label>
                                    <input type="nome"
                                    // onChange={(e) => setNome(e.target.value)}
                                    id="nome" defaultValue="Maria Joana da Silva" />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" defaultValue="anamaria@yahoo.com" />
                                    
                                </div>
                                <div className="bc">
                                    <Link className="button_cont" to={"#"}>
                                        Continuar
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="conta_cadastro">
                            <span>Já tem uma conta?</span>
                            <Link to={"#"}>Se logar</Link>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )

}

export default CadastroUsuario;