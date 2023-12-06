import ilustraPerfil from '../../assets/images/ilustra1_parceiro.svg';
import fotoPerfilUsuario from '../../assets/images/REBECA.png';
import { useState } from "react";

// componente

import Menu_parceiro from '../../components/Menu_Aside';

import './style.css';


function Editar_perfil_parceiro() {

    const [nome, setNome] = useState<string>("");
    const [sobrenome, setSobrenome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const propagrandaParceiroObj={
        nome:nome,
        sobrenome:sobrenome,
        email:email,
        telefone:telefone,
        senha:senha
    }

    function CadastroFormPropagandaParceiroObj(event:any){
		event.preventDefault()
		console.log(propagrandaParceiroObj);
    }



    return (
        <>

            <main id="main_perfil_parceiro">
                <Menu_parceiro />

                <section className="conteudo_EditarPerfilParceiro">
                    <div className="perfil_principal_EditarperfilParceiro">


                        <div className="header_EditarperfilParceiro">

                            <div>
                                <h1>Editar Perfil</h1>
                            </div>

                            <img src={fotoPerfilUsuario} alt="" className="foto_EditarperfilParceiro" style={{width: "20%"}} />


                        </div>

                        <div className="perfil_info_perfilParceiro">
                            <form  onSubmit={CadastroFormPropagandaParceiroObj}>
                                <div>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" placeholder="Rebeca"
                                        onChange={(event) => setNome(event.target.value)}
                                         />
                                    </div>
                                    <div>
                                        <label htmlFor="sobrenome">Sobrenome</label>
                                        <input type="text" id="sobrenome" placeholder="Flores"
                                        onChange={(event) => setSobrenome(event.target.value)}
                                         />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id="email" placeholder="eu@email.com"
                                        onChange={(event) => setEmail(event.target.value)}
                                         />
                                    </div>
                                    <div>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="tel" id="telefone" placeholder="1234-5678"
                                        onChange={(event) => setTelefone(event.target.value)}
                                         />
                                    </div>
                                </div>
                                <div className="form_submit">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        defaultValue="senhasuperforte"
                                        onChange={(event) => setSenha(event.target.value)}

                                    />
                                </div>
                                {/* <input type="submit" value="Editar" class="submit_button"> */}
                                <div className="botoes_editar_perfilParceiro">
                                    <input type={'submit'} value="Cancelar" className="submit_button_perfilParceiro_cancelar"/>

                                    <input type={'submit'} value="Enviar" className="submit_button_perfilParceiro_salvar"/>
                               
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src={ilustraPerfil} alt="" className="ilustracao_perfil"/>
                </section>
            </main>
        </>


    )
}

export default Editar_perfil_parceiro;