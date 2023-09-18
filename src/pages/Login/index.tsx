//estilização
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";

//images

// import imgLogo2 from "../../assets/images/logo2.png";
import imgIlustra from "../../assets/images/ilustra_login.svg";
import imgSeta from "../../assets/images/seta.png";


function Login() {

    //variavel navigate que utiliza a funcao useNavigate para navegar entre os componentes

    // const navigate = useNavigate();
    
    // const [email, setEmail] = useState<string>("");
    // const [senha, setSenha] = useState<string>("");
    // // TROCAR TIPO PARA BOOLEANO
    // const [checkboxLogado, setCheckboxLogado] = useState<string>("")

    return (
        <>
            <main className="container_principal_login posicionamento_login">
                <div className="conteudo ">
                    <div className="alinhamento_imagens">
                        <div className="image_voltar">
                            <Link to= {"/"} className="botao_voltar">
                                {" "}
                                <img src={imgSeta}/>

                            </Link>
                            <div>
                                <Link to= {"/"} className="botao_voltar">
                                    {" "}
                                    Voltar
                                </Link>
                            </div>
                        </div>
                        {/* <img class="logo" src="../geral/img_login/logo2.png" alt=""> */}
                        <img className="ilustracao" src={imgIlustra} />
                    </div>
                    <div className="pagina">
                        <div className="image_voltar_responsivo">
                            <div>
                                <Link to= {"#"} className="botao_voltar">
                                    {" "}
                                    Voltar
                                </Link>
                            </div>
                        </div>
                        <div className="bem_vindo">
                            <span>Bem vindo!</span>
                            <h1>Acesse sua conta!</h1>
                        </div>
                        <div className="dados_usuario">
                            <form action="POST">
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Seu E-mail aqui"
                                        // onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        placeholder="Digite sua senha"
                                        id="senha"
                                        // onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                                <div className="form_checkbox">
                                    <div>
                                        <input
                                            type="checkbox" 
                                            name="" 
                                            id=""
                                            // onChange={(e) => setCheckboxLogado(e.target.value)}
                                        />
                                        <Link to= {"#"}>Lembrar de mim</Link>
                                    </div>
                                    <Link to={"/redefinir/senha"}>
                                        Esqueci minha senha
                                    </Link>
                                </div>
                                <div className="bc">
                                    <Link className="button_cont" to={"/perfil_parceiro/"}>
                                        Enviar
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="conta_cadastro">
                            <Link to={"#"}>
                                <span>Não tem uma conta?</span>
                            </Link>
                            <Link to="../Cadastro/usuario" className="spanVerde_login">Cadastrar-se</Link>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}




export default Login;