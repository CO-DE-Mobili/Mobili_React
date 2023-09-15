import "./style.css"
import { Link } from "react-router-dom";
import Select from 'react-select'
import Menu_parceiro from "../../components/Menu_Aside";

const categorias = [
  { value: 'restaurante', label: 'Restaurante' },
  { value: 'hamburgueria', label: 'Hamburgueria' },
  { value: 'posto de Gasolina', label: 'Posto de Gasolina' },
  { value: 'pizzaria', label: 'Pizzaria' },
  { value: 'floricultura', label: 'Floricultura' }
]

const paises = [
	{value: 'brasil', label: 'Brasil'}
]


function CadastroEmpresa() {
	return (
		<>
			<main className="main-cadastro_empresa">
				<Menu_parceiro />
				<section className="container">
					<h1>Cadastro de Empresa</h1>
					<div className="formulario">
						<form action="POST">
							<div className="nome">
								<div>
									<label htmlFor="nome_loja">Nome</label>
									<input
										type="text"
										placeholder="Informe o nome da sua empresa"
										id="nome_empresa"
										/>
								</div>
								<div>
									<label htmlFor="nome_fantasia">Nome Fantasia</label>
									<input
										type="text"
										placeholder="Informe o nome fantasia da sua empresa"
										id="nome_fantasia"
										/>
								</div>
								<div>
									<label htmlFor="razao_social">Razão Social</label>
									<input
										type="text"
										placeholder="Informe a razão social da sua empresa"
										id="razao_social"
										/>
								</div>
								<div>
									<label htmlFor="telefone">Telefone de contato</label>
									<input
										type="text"
										placeholder="(00) 1234-5678"
										id="razao_social"
										/>
								</div>
							</div>
							<hr></hr>
							<div>
								<label htmlFor="cpf">CPF/CNPJ</label>
								<input
									type="text"
									id="cpf"
									placeholder="Seu E-mail aqui"
									/>
							</div>
							<div>
								<label htmlFor="select_categorias">Categoria de serviço</label>
								<Select options={categorias} id="select_categorias" className="select_categorias"/>
							</div>
							<div>
								<label htmlFor="cnae">CNAE</label>
								<input
									type="text"
									placeholder="Informe o CNAE da sua empresa"
									id="cnae"
									/>
							</div>
							<hr></hr>
							<div>
								<label htmlFor="select_categorias">País/Região</label>
								<Select options={paises} id="select_categorias"/>
							</div>
							<div>
								<label htmlFor="endereco">Endereço</label>
								<input
									type="text"
									placeholder="Nome da rua"
									id="endereco"
								/>
							</div>
							<div>
								<label htmlFor="numero">Numero do estabelecimento</label>
								<input
									type="text"
									placeholder="00"
									id="numero"
								/>
							</div>
							<div>
								<label htmlFor="complemento">Complemento (opcional)</label>
								<input
									type="text"
									placeholder="Apartamento, sala, conjunto, edificio, etc."
									id="complemento"
								/>
							</div>
							<div>
								<label htmlFor="bairro">Bairro</label>
								<input
									type="text"
									placeholder="Nome do bairro"
									id="bairro"
								/>
							</div>
							<div>
								<label htmlFor="cidade">Cidade</label>
								<input
									type="text"
									placeholder=""
									id="cidade"
								/>
							</div>
							<div>
								<label htmlFor="estado">Estado</label>
								<input
									type="text"
									placeholder=""
									id="estado"
								/>
							</div>
							<div className="botao_submit">
								<input type={"submit"} className="confirmar"/>
							</div>
						</form>
					</div>
				</section>
			</main>
		</>
	)
}

export default CadastroEmpresa;
