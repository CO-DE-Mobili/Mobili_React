import "./style.css";
import ilustracao_um from "../../assets/images/ilustra_1_contato.png";
import ilustracao_dois from "../../assets/images/ilustra_2_contato.png";
import { useState } from "react";

function Contato() {
	const [nome, setNome] = useState<string>("");
	const [sobrenome, setSobrenome] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [telefone, setTelefone] = useState<string>("");
	const [mensagemTexto, setMensagem] = useState<string>("");

	function enviarFormulario(event: any) {
		event.preventDefault();
		
		const mensagem = {
			nome: nome,
			sobrenome: sobrenome,
			email: email,
			telefone: telefone,
			mensagemTexto: mensagemTexto
		}

		console.log(mensagem);
		
	}

	return (
		<>
			<main className="main-contato">
				<h1>Entre em contato conosco</h1>
				<div className="posicionamento_main_contato posicionamento">
					<div className="forms_contato">
					<form action="POST" onSubmit={enviarFormulario}>
						<div className="coluna_form_contato">
						<div className="input_contato">
							<label htmlFor="nome">Nome</label>
							<input type="text" id="nome" name="nome" defaultValue="" 
								onChange={(event) => setNome(event.target.value)}
							/>
						</div>
						<div className="input_contato">
							<label htmlFor="lname">Sobrenome:</label>
							<input
							type="text"
							id="sobrenome"
							name="sobrenome"
							defaultValue=""
							onChange={(event) => setSobrenome(event.target.value)}
							/>
						</div>
						</div>
						<div className="coluna_form_contato">
						<div className="input_contato">
							<label htmlFor="email">E-mail:</label>
							<input type="text" id="email" name="email" defaultValue=""
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="input_contato">
							<label htmlFor="telefone">Telefone:</label>
							<input type="text" id="telefone" name="telefone" defaultValue="" 
								onChange={(event) => setTelefone(event.target.value)}
							/>
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
							onChange={(event) => setMensagem(event.target.value)}
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
