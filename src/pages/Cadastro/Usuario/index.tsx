import "./style.css"

import { Link, useNavigate } from "react-router-dom";


//imagens
import seta from "../../../assets/images/seta.png";
import ilustracaologin from "../../../assets/images/ilustra_login.svg";
import { useState } from "react";

import api from '../../../utils/api';

import InputMask from 'react-input-mask';

function CadastroUsuario() {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const cadastroObj = {
        nome: nome,
        email: email,
        telefone: telefone
    }

function cadastro(event: any) {
    event.preventDefault();

    function emailValido(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    if (!emailValido(email))
        setError("Email inválido!");
    else {
        console.log(email, error);
        navigate("/cadastro/usuario/etapa2");

        // Corrigindo a variável usada para enviar os dados da postagem
        api.post("empresas", cadastroObj)
            .then((response: any) => {
                console.log(response);
                alert("USUÁRIO CADASTRADO COM SUCESSO!!!");
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao cadastrar um novo usuário");
            });
    }
}


    function vericarEmail(event: any) {
        let usuario: string = email.substring(0, email.indexOf("@"));
        usuario = email.substring(email.indexOf("@") + 1);
        console.log(usuario);
        navigate("/cadastro/usuario/etapa2")

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
                            <form method="POST" onSubmit={cadastro}>
                                <div>
                                    <label htmlFor="nome">Nome completo</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        placeholder="Digite aqui seu nome:"
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Digite aqui seu e-mail:"
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
                                    {/* <input
                                        type="text"
                                        id="telefone"
                                        placeholder="(11)1234-5678"
                                        onChange={(e) => setTelefone(e.target.value)}
                                        required /> */}

                                    <InputMask
                                        mask="(99)9999-9999"
                                        maskChar=""
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                        placeholder="Coloque seu telefone aqui"
                                        required
                                        style={{
                                            color: 'white',
                                            padding: '12px 20px',
                                            margin: '8px 0',
                                            display: 'inline-block',
                                            border: '2px solid rgba(203, 210, 220, 0.5)',
                                            borderRadius: '4px',
                                            height: '56px',
                                            width: '100%',
                                            letterSpacing: '-0.01em',
                                            fontFamily: 'var(--verdana)'
                                        }}

                                        
                                    />
                                </div>
                                <div className="bc">
                                    <input className="button_cont"
                                        type="submit"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="conta_cadastro">
                            <span>Já tem uma conta?</span>
                            <Link to={"/login"}> Se logar</Link></div>
                        <Link className="button_esqueceusenha" to={"/redefinir/senha"}>Esqueceu a senha?</Link>
                    </div>
                </div>
            </main>

        </>
    )

}

export default CadastroUsuario;