import "./style.css"

import { Link, useNavigate } from "react-router-dom";


//imagens
import seta from "../../../assets/images/seta.png";
import ilustracaologin from "../../../assets/images/ilustra_login.svg";
import { useState } from "react";

function CadastroUsuario() {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    // const cadastro={
    //     nome :nome,
    //     email: email,
    //     telefone: telefone
    // }

    function cadastro(event: any) {
        event.preventDefault()

        function emailValido(email: string) {
            return /\S+@\S+\.\S+/.test(email);
        }

        if (!emailValido(email))
            setError("Email inválido!")
        else {
            console.log(email, error);
            navigate("/cadastro/usuario/etapa2")
        }
    }



    return (
        <>
            <main className="main-cadastro">
                <div className="conteudo">
                    <div className="alinhamento_imagens">
                        <div className="image_voltar">
                            <Link to={"/"} className="botao_voltar">
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
                        <img className="logo" src="../geral/img_login/logo2.png" alt="" />
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
                            <form action="" onSubmit={cadastro}>
                                <div>
                                    <label htmlFor="nome">Nome completo</label>
                                    <input type="text"
                                        // onChange={(e) => setNome(e.target.value)}
                                        id="nome"
                                        placeholder="Maria Joana da Silva"
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        id="email"
                                        placeholder="anamaria@yahoo.com"
                                        required
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {error && <span style={{
                                        color: 'crimson',
                                        fontFamily: 'var(--vw)',
                                        fontWeight: 'bold',
                                        letterSpacing: '2px'
                                    }}>{error}</span>}
                                </div>
                                <div>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="text"
                                        id="email"
                                        placeholder="(11)1234-5678"
                                        onChange={(e) => setTelefone(e.target.value)}
                                        required />
                                </div>
                                <div className="bc">
                                    <input className="button_cont"
                                        type={"submit"}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="conta_cadastro">
                            <span>Já tem uma conta?</span>
                            <Link to={"/login"}> Se logar</Link></div>
                        <Link className="button_esqueceusenha" to={"/redefinir/senha"}>Esqueceu a senha ?</Link>
                    </div>
                </div>
            </main>

        </>
    )

}

export default CadastroUsuario;