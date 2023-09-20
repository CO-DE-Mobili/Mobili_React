import "./style.css"

import { Link, useNavigate } from "react-router-dom";


//imagens
import seta from "../../../assets/images/seta.png";
import ilustracaologin from "../../../assets/images/ilustra_login.svg";
import { useState } from "react";

function CadastroUsuario() {

    const [email, setEmail] = useState<String>("");
    const navigate = useNavigate();
    // const [nome, setNome] = useState<string>("");


    // const cadastro={
    //     email: email,
    //     nome :nome,
    // }

    // function cadastro(event: any) {
    //     event.preventDefault()


    // }

    function vericarEmail(event: any) {
        let usuario:string = email.substring(0, email.indexOf("@"));
        usuario = email.substring(email.indexOf("@")+1);
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
                            <form action="" onSubmit={vericarEmail}>
                                <div>
                                    <label htmlFor="nome">Nome completo</label>
                                    <input type="nome"
                                    // onChange={(e) => setNome(e.target.value)}
                                    id="nome" placeholder="Maria Joana da Silva" />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" placeholder="anamaria@yahoo.com" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="'telefone" id="email" placeholder="(11)5698-8974" />
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