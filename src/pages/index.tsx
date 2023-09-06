import { PersonOutline, GridOutline, CreateOutline, SettingsOutline, ExitOutline } from 'react-ionicons';


function perfil_adm() {

<main>
  <aside>
    <img
      src="./gerenciamento_parceiros_adm/img/logo_footer.svg"
      alt="logo Mobili"
    />
    <div className="aside_top">
      <h2>Menu</h2>
      <div className="link_perfil">
        <a href="./perfil_adm.html">
          <img src="../img/perfil.svg" alt="" /> Meu Perfil
        </a>
      </div>
      <div
        className="link_gerenciamento"
        style={{ backgroundColor: "#001E50" }}
      >
        <a href="./gerenciamento_parceiros_adm/gerenciamento_parceiros.html">
          <img src="../img/gerenciamento.svg" alt="" /> Gerenciamento
        </a>
      </div>
    </div>
    <div className="rede_social">
      <h2>Redes Sociais</h2>
      <nav>
        <div>
          <a href="">
            <img
              src="./gerenciamento_parceiros_adm/img/facebook_perfil.svg"
              alt=""
            />{" "}
          </a>
          <a href="">
            <img
              src="./gerenciamento_parceiros_adm/img/twitter_perfil.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="./gerenciamento_parceiros_adm/img/linkedin_perfil.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="./gerenciamento_parceiros_adm/img/instagram_perfil.svg"
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
    <div className="divisoria" />
    <div className="perfil">
      <img src="./gerenciamento_parceiros_adm/img/foto_perfil.svg" alt="" />
      <div>
        <div>
          <a href="#">Maria Santos</a>
          <span>eu@gmail.com</span>
        </div>
        <a href="../index.html">
          <img src="./gerenciamento_parceiros_adm/img/sair_perfil.svg" alt="" />
        </a>
      </div>
    </div>
  </aside>
  {/* menu responsivo */}
  <div className="posicao_geral_perfil_parceiro" />
  <div className="phone">
    <div className="navigation">
      <ul>
        <li className="list">
          <a href="#">
            <span className="icon">
              <IonIcon name="person-outline" />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="./gerenciamento_parceiros_adm/gerenciamento_parceiros.html">
            <span className="icon">
              <ion-icon name="grid-outline" />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="./editarperfil.html">
            <span className="icon">
              <ion-icon name="settings-outline" />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="../index.html">
            <span className="icon">
              <ion-icon name="exit-outline" />
            </span>
          </a>
        </li>
        <div className="indicator" />
      </ul>
    </div>
  </div>
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