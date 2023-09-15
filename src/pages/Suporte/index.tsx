import Footer from "../../components/Footer";
import Header from "../../components/Header";
import"./style.css";

function suporte() {
    return(

        <main id="main_suporte">
            <Header/>
        <section className="se1_suporte">
          <div className="duvida posicionamento_se1 posicionamento">
            <span>FAQs</span>
            <h1>Procure sua dúvida</h1>
            <span>Aqui a gente te ajuda!</span>
            <input type="text" placeholder="Posso ajudar?" />
          </div>
        </section>
        <section className="se2_suporte posicionamento_se2 ">
          <div className="ask">
            <h2>Perguntas frequentes</h2>
            <div className="contato_link">
              <div>
                <p>Não encontrou sua dúvida?</p>
              </div>
              <div>
                <span>
                  <a href="">Entre em contato conosco</a>
                </span>
              </div>
            </div>
          </div>
          <div className="cards_suporte posicionamento">
            <div className="card1">
              <img src="./img/icon_suporte.svg" alt="" />
              <h3>Como posso redefinir minha senha?</h3>
              <p>
                A opção de redefinir senha pode ser encontrada na página de login.
                Clique no link "Esqueceu a senha" ou "Redefinir senha" e siga as
                instruções para criar uma nova senha.
              </p>
            </div>
            <div className="card2">
              <img src="./img/icon_suporte.svg" alt="" />
              <h3>Como posso proteger minha senha?</h3>
              <p>
                Para proteger sua senha, evite compartilhá-la com outras pessoas, não
                a salve em dispositivos públicos ou em nuvens não seguras e não use
                senhas simples e fáceis de adivinhar. Além disso, ative a autenticação
                de dois fatores sempre que possível.
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
      

    )
}
export default suporte 