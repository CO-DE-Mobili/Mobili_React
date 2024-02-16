//estilização
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";

import api from '../../utils/api';
import secureLocalStorage from "react-secure-storage";
//images

// import imgLogo2 from "../../assets/images/logo2.png";
import imgIlustra from "../../assets/images/ilustra_login.svg";
import imgSeta from "../../assets/images/seta.png";
import Input from "react-select/dist/declarations/src/components/Input";


function Login() {

    //variavel navigate que utiliza a funcao useNavigate para navegar entre os componentes

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    // // TROCAR TIPO PARA BOOLEANO
    // const [checkboxLogado, setCheckboxLogado] = useState<string>("")

    const usuario = {
        email: email,
        senha: senha
    }
    function CadastroFormLogin(event: any) {
        event.preventDefault()
        console.log(usuario);
        api.post("parceiro", usuario)
            .then((response: any) => {
                console.log(response);

                secureLocalStorage.setItem("user", response.data);

                navigate("/perfil/" + response.data.user.id);
                navigate(0);
            })
            .catch((error: any) => {
                console.log(error);
                alert("Erro ao efetuar o login!");

            })
    }



    return (
        <>
            <main className="container_principal_login posicionamento_login">
                <div className="conteudo ">
                    <div className="alinhamento_imagens">
                        <div className="image_voltar">
                            <Link to={"/"} className="botao_voltar">
                                <img src={imgSeta} />
                            </Link>
                            <div>
                                <Link to={"/"} className="botao_voltar">
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
                                <Link to={"#"} className="botao_voltar">
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
                            <form onSubmit={CadastroFormLogin} method="POST">
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Digite aqui seu e-mail:"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        placeholder="Digite aqui sua senha:"
                                        id="senha"
                                        onChange={(e) => setSenha(e.target.value)}
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
                                        <Link to={"#"}>Lembrar de mim</Link>
                                    </div>
                                    <Link to={"/redefinir/senha"}>
                                        Esqueci minha senha
                                    </Link>
                                </div>
                                <div className="bc">
                                    <input type={"submit"} className="button_cont"
                                    />
                                </div>
                                <div className="conta_cadastro">
                                    <Link to={"#"}>
                                        <span>Não tem uma conta?</span>
                                    </Link>
                                    <Link to="../Cadastro/usuario" className="spanVerde_login">Cadastrar-se</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}




export default Login;