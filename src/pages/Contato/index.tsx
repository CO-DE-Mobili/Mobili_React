import "./style.css";
import ilustracao_um from "../../assets/images/ilustra_1_contato.png";
import ilustracao_dois from "../../assets/images/ilustra_2_contato.png";

function Contato() {
	return (
		<>
			<main className="main-contato">
				<h1>Entre em contato conosco</h1>
				<div className="posicionamento_main_contato posicionamento">
					<div className="forms_contato">
					<form action="">
						<div className="coluna_form_contato">
						<div className="input_contato">
							<label htmlFor="nome">Nome</label>
							<input type="text" id="nome" name="nome" defaultValue="" />
						</div>
						<div className="input_contato">
							<label htmlFor="lname">Sobrenome:</label>
							<input
							type="text"
							id="sobrenome"
							name="sobrenome"
							defaultValue=""
							/>
						</div>
						</div>
						<div className="coluna_form_contato">
						<div className="input_contato">
							<label htmlFor="email">E-mail:</label>
							<input type="text" id="email" name="email" defaultValue="" />
						</div>
						<div className="input_contato">
							<label htmlFor="telefone">Telefone:</label>
							<input type="text" id="telefone" name="telefone" defaultValue="" />
						</div>
						</div>
						<div className="coluna_form_contato_mensagem">
						<div className="input_contato">
							<label htmlFor="mensagem">Mensagem:</label>
							<textarea
							name="mensagem"
							id="mensagem"
							cols={30}
							rows={4}
							defaultValue={""}
							/>
							<input
							type="submit"
							defaultValue="Enviar"
							className="enviar_contato"
							id="enviar_contato"
							/>
						</div>
						</div>
					</form>
					</div>
				</div>
				<img src={ilustracao_um} alt="" className="ilustra1_contato" />
				<img src={ilustracao_dois} alt="" className="ilustra2_contato" />
			</main>
		</>
	)
}

export default Contato;
