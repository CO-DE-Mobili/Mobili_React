import "./style.css"
// import { IonIcon } from '@ionic/react';
// import { arrowRedoCircleOutline } from 'ionicons/icons';
import Menu_parceiro from "../../components/Menu_Aside";
import { defaultMethod } from "react-router-dom/dist/dom";
import propaganda_perfil from "../../assets/images/propaganda.svg"
import { useState } from "react";
import api from "../../utils/api";


function Propaganda_PerfilParceiro() {

    const [select, setSelect] = useState<string>(""); // state que contém a opção de skill selecionada pelo usuário


    const [titulo, setTitulo] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [imagem, setImagem] = useState<any>();



    function CadastroFormPropaganda(event: any) {
        event.preventDefault()

        const formData = new FormData();


        formData.append("nome", titulo);
        formData.append("imagem", imagem);
        formData.append("servico", categoria);
        formData.append("descricao", descricao);
        formData.append("valor", valor);
        formData.append("duracao_parceria", duracao);


        api.post("servico", formData)
            .then((response: any) => {
                console.log(response);
                alert("Propaganda cadastrada com sucesso!😊🤗");
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao cadastrar um nova propaganda");
            })

    }



    function verificarCampoUpload(event: any) {
        console.log(event.target.files[0]);
        //atualiza o state foto com o valor do file
        setImagem(event.target.files[0]);
    }


    return (
        <main id="main_pro_perfilparceiro">
            <Menu_parceiro />


            <div className="conteudo_propaganda_parceiro">
                <div className="header_propaganda_parceiro">
                    <h1>Nova Propaganda</h1>
                    <p>Crie uma propaganda</p>
                </div>
                {/* formulario */}
                <div className="posicionamneto_propaganda_parceiro" onSubmit={CadastroFormPropaganda}>
                    <div className="ilustra_propaganda_parceiro">
                        <img src={propaganda_perfil} alt="" />
                    </div>
                    <div className="card_propaganda_parceiro">
                        <form onSubmit={CadastroFormPropaganda}>
                            {/* <div className="drop-zone">
                                <span className="drop-zone__prompt">
                                    <img src="./img/cloud.svg" alt="" srcSet="" /> <br />
                                    Solte o arquivo aqui ou clique para fazer upload
                                </span>
                                <input
                                    type="file"
                                    name="myFile"
                                    className="drop-zone__input"
                                />
                            </div> */}
                            <div className="posicionamento_inputs_parceiro">
                                <div className="campo_parceiro">
                                    <label htmlFor="titulo">Título:</label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        name="titulo"
                                        onChange={(event) => setTitulo(event.target.value)}
                                    />
                                </div>
                                <div className="campo_parceiro">
                                    <label htmlFor="opcoes">Selecione a categoria:</label>
                                    <select id="opcoes" name="opcoes"
                                        onChange={(event) => setCategoria(event.target.value)}
                                    >

                                        <option value="Combustível">Combustível</option>
                                        <option value="Restaurante">Restaurante</option>
                                        <option value="Cafeteria">Cafeteria</option>
                                        <option value="Supermercados">Supermercados</option>
                                        <option value="Hospedagem">Hospedagem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="posicionamento_inputs_parceiro">
                                {/* <div className="campo_parceiro">
                                    <label htmlFor="endereco">Endereço:</label>
                                    <input type="text" id="endereco" name="endereco"
                                        onChange={(event) => setEndereco(event.target.value)}
                                    />
                                </div> */}

                                <div className="campo_parceiro">

                                    <label htmlFor="titulo">Duração:</label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        name="duracao"
                                        onChange={(event) => setDuracao(event.target.value)}
                                    />
                                </div>
                                <div className="campo_parceiro">
                                    <label htmlFor="valor">Valor:</label>
                                    <input type="text" id="valor" name="valor"
                                        onChange={(event) => setValor(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="posicionamento_inputs_parceiro">
                                <div className="campo_parceiro">
                                    <input type="file"
                                        onChange={verificarCampoUpload}
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