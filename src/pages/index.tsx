import { PersonOutline, GridOutline, CreateOutline, SettingsOutline, ExitOutline } from 'react-ionicons';


function perfil_parceiro() {

<main>

  {/* fim menu responsivo */}
  <section className="conteudo">
    <div className="perfil_principal">
      <img src="./gerenciamento_parceiros_adm/img/foto_perfil.svg" alt="" />
      <div className="perfil_info">
        <form action="">
          <div>
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Maria" />
            </div>
            <div>
              <label htmlFor="sobrenome">Sobrenome</label>
              <input type="text" id="sobrenome" placeholder="Santos" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="eu@email.com" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" placeholder="1234-5678" />
            </div>
          </div>
          <div className="form_submit">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" defaultValue="senhasuperforte" />
          </div>
          {/* <input type="submit" value="Editar" class="submit_button"> */}
          <a className="submit_button" href="./editarperfil.html">
            Editar
          </a>
        </form>
      </div>
    </div>
    <img src="../img/ilustra1_parceiro.svg" alt="" />
  </section>
</main>

    
}