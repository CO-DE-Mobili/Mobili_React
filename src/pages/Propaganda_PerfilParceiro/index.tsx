import "./style.css"
// import { IonIcon } from '@ionic/react';
// import { arrowRedoCircleOutline } from 'ionicons/icons';
import Menu_parceiro from "../../components/Menu_Aside";
import { defaultMethod } from "react-router-dom/dist/dom";
import propaganda_perfil from "../../assets/images/propaganda.svg"
import { useState } from "react";


function Propaganda_PerfilParceiro() {

    const [titulo, setTitulo] = useState<string>("");
    const [endereco, setEndereco] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");


    const propagandaObj={
        titulo:titulo,
        endereco:endereco,
        valor:valor,
        descricao:descricao,
        categoria:categoria
    }

    function CadastroFormPropaganda(event:any){
		event.preventDefault()
		console.log(propagandaObj);
    }





    return (
        <main id="main_pro_perfilparceiro">
<Menu_parceiro/>
            
            
            <div className="conteudo_propaganda_parceiro">
                <div className="header_propaganda_parceiro">
                    <h1>Nova Propaganda</h1>
                    <p>Crie uma propaganda</p>
                </div>
                {/* formulario */}
                <div className="posicionamneto_propaganda_parceiro">
                    <div className="ilustra_propaganda_parceiro">
                        <img src={propaganda_perfil} alt="" />
                    </div>
                    <div className="card_propaganda_parceiro">
                        <form onSubmit={CadastroFormPropaganda}>
                            <div className="drop-zone">
                                <span className="drop-zone__prompt">
                                    <img src="./img/cloud.svg" alt="" srcSet="" /> <br />
                                    Solte o arquivo aqui ou clique para fazer upload
                                </span>
                                <input type="file" name="myFile" className="drop-zone__input" />
                            </div>
                            <div className="posicionamento_inputs_parceiro">
                                <div className="campo_parceiro">
                                    <label htmlFor="titulo">Título:</label>
                                    <input type="text" id="titulo" name="titulo"
                                    onChange={(event) => setTitulo(event.target.value)}
                                     />
                                </div>
                                <div className="campo_parceiro">
                                    <label htmlFor="opcoes">Selecione a categoria:</label>
                                    <select id="opcoes" name="opcoes">
                                        <option value="opcao1">Combustível</option>
                                        <option value="opcao2">Restaurante</option>
                                        <option value="opcao3">Cafeteria</option>
                                        <option value="opcao4">Supermercados</option>
                                        <option value="opcao5">Hospedagem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="posicionamento_inputs_parceiro">
                                <div className="campo_parceiro">
                                    <label htmlFor="endereco">Endereço:</label>
                                    <input type="text" id="endereco" name="endereco"
                                     onChange={(event) => setEndereco(event.target.value)}
                                     />
                                </div>
                                <div className="campo_parceiro">
                                    <label htmlFor="valor">Valor:</label>
                                    <input type="text" id="valor" name="valor"
                                     onChange={(event) => setValor(event.target.value)}
                                     />
                                </div>
                            </div>
                            <div className="campo_parceiro">
                                <label htmlFor="descricao">Descrição:</label>
                                <textarea
                                    id="descricao"
                                    name="descricao"
                                    rows={4}
                                    cols={50}
                                    defaultValue={""}
                                    onChange={(event) => setDescricao(event.target.value)}
                                />
                            </div>
                            <div className="posicionamento_inputs_parceiro_btn">
                                <div>
                                    <a href="">Cancelar</a>
                                </div>
                                <div className="paiEnviar">
                                    <input
                                        type="submit"
                                        defaultValue="Enviar"
                                        className="upload-button"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* fim formulario */}
            </div>
        </main>

    )

}
 
export default Propaganda_PerfilParceiro;