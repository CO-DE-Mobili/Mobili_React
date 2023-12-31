import "./style.css"
import { Link } from "react-router-dom";
import Select from 'react-select'
import Menu_parceiro from "../../components/Menu_Aside";
import { useState } from "react";

const categorias = [
	{ value: 'restaurante', label: 'Restaurante' },
	{ value: 'hamburgueria', label: 'Hamburgueria' },
	{ value: 'posto de Gasolina', label: 'Posto de Gasolina' },
	{ value: 'pizzaria', label: 'Pizzaria' },
	{ value: 'floricultura', label: 'Floricultura' }
]

const paises = [
	{ value: 'brasil', label: 'Brasil' }
]


function CadastroEmpresa() {

	const [nome, setNome] = useState<string>("");
	const [nomeFantasia, setnomeFantasia] = useState<string>("");
	const [razaoSocial, setrazaoSocial] = useState<string>("");
	const [telefoneContato, settelefoneContato] = useState<string>("");
	const [cpfCnpj, setcpfCnpj] = useState<string>("");
	const [categoriaServico, setcategoriaServico] = useState<string>("");
	const [cnae, setcnae] = useState<string>("");
	const [paisRegiao, setpaisRegiao] = useState<string>("");
	const [endereco, setendereco] = useState<string>("");
	const [numero, setnumero] = useState<string>("");
	const [complemento, setcomplemento] = useState<string>("");
	const [bairro, setbairro] = useState<string>("");
	const [cidade, setcidade] = useState<string>("");
	const [estado, setestado] = useState<string>("");

	const empresaObj = {

		nome: nome,
		nomeFantasia: nomeFantasia,
		razaoSocial: razaoSocial,
		telefoneContato: telefoneContato,
		cpfCnpj: cpfCnpj,
		categoriaServico: categoriaServico,
		cnae: cnae,
		paisRegiao: paisRegiao,
		endereco: endereco,
		numero: numero,
		complemento: complemento,
		bairro: bairro,
		cidade: cidade,
		estado: estado
	}

	function CadastroFormEmpresa(event: any) {
		event.preventDefault()
		console.log(empresaObj);
	}

	return (
		<>
			<main className="main-cadastro_empresa">
				<Menu_parceiro />
				<section className="container">
					<h1>Cadastro de Empresa</h1>
					<div className="formulario">
						<form action="POST" onSubmit={CadastroFormEmpresa}>
							<div className="nome">
								<div>
									<label htmlFor="nome_loja">Nome</label>
									<input
										type="text"
										placeholder="Informe o nome da sua empresa"
										id="nome_empresa"
										onChange={(e) => setNome(e.target.value)}
										required
									/>
								</div>

								<div>
									<label htmlFor="nome_fantasia">Nome Fantasia</label>
									<input
										type="text"
										placeholder="Informe o nome fantasia da sua empresa"
										id="nome_fantasia"
										onChange={(e) => setnomeFantasia(e.target.value)}
										required
									/>
								</div>
								<div>
									<label htmlFor="razao_social">Razão Social</label>
									<input
										type="text"
										placeholder="Informe a razão social da sua empresa"
										id="razao_social"
										onChange={(e) => setrazaoSocial(e.target.value)}
										required
									/>
								</div>
								<div>
									<label htmlFor="telefone">Telefone de contato</label>
									<input
										type="text"
										placeholder="(00) 1234-5678"
										id="razao_social"
										onChange={(e) => settelefoneContato(e.target.value)}
										required
									/>
								</div>
							</div>
							<hr></hr>
							<div>
								<label htmlFor="cpf">CPF/CNPJ</label>
								<input
									type="text"
									id="cpf"
									placeholder="CPF/CNPJ"
									onChange={(e) => setcpfCnpj(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="select_categorias">Categoria de serviço</label>
								<Select options={categorias} id="select_categorias" className="select_categorias" />
							</div>
							<div>
								<label htmlFor="cnae">CNAE</label>
								<input
									type="text"
									placeholder="Informe o CNAE da sua empresa"
									id="cnae"
									onChange={(e) => setcnae(e.target.value)}
									required
								/>
							</div>
							<hr></hr>
							<div>
								<label htmlFor="select_categorias">País/Região</label>
								<Select options={paises} id="select_categorias"
								//  onChange={(e) => setpaisRegiao(e.target.value)}
								//  required
								/>

							</div>
							<div>
								<label htmlFor="endereco">Endereço</label>
								<input
									type="text"
									placeholder="Nome da rua"
									id="endereco"
									onChange={(e) => setendereco(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="numero">Numero do estabelecimento</label>
								<input
									type="text"
									placeholder="00"
									id="numero"
									onChange={(e) => setnumero(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="complemento">Complemento (opcional)</label>
								<input
									type="text"
									placeholder="Apartamento, sala, conjunto, edificio, etc."
									id="complemento"
									onChange={(e) => setcomplemento(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="bairro">Bairro</label>
								<input
									type="text"
									placeholder="Nome do bairro"
									id="bairro"
									onChange={(e) => setbairro(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="cidade">Cidade</label>
								<input
									type="text"
									placeholder=""
									id="cidade"
									onChange={(e) => setcidade(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="estado">Estado</label>
								<input
									type="text"
									placeholder=""
									id="estado"
									onChange={(e) => setestado(e.target.value)}
									required
								/>
							</div>
							<div className="botao_submit">
								<input type={"submit"} className="confirmar" />
							</div>
						</form>
					</div>
				</section>
			</main>
		</>
	)
}

export default CadastroEmpresa;
