//estilização
import "./style.css";

//imagens

import imgIlustra1 from "../../assets/images/ilustra1_home.svg";
import imgsemParar from "../../assets/images/semParar.png";
import imgMicrosoft from "../../assets/images/microsoft.png";
import imgmcDonalds from "../../assets/images/mcDonalds.png";
import imgIlustra2 from "../../assets/images/ilustra2_home.png";
import imgUser from "../../assets/images/home_user.svg";
import imgEdit from "../../assets/images/edit.svg";
import imgSmile from "../../assets/images/home_smile.svg";
import imgAna from "../../assets/images/ANA.png";
import imgRebeca from "../../assets/images/REBECA.png";



//rotas
import { Link } from "react-router-dom";

function home() {


    return (
        <main className="home">
  <h1>home</h1>
  <div className="banner_home">
    <div className="posicionamento posicionamento_texto_home">
      <div className="texto_banner_home">
        <h2>
          Anuncie seus produtos ou serviços para um público amplo e
          diversificado!
        </h2>
        <p>
          Promova sua marca com campanhas de marketing e vendas exclusivas,
          aproveite a reputação da marca Volkswagen para melhorar sua oferta de
          produtos e serviços. Seja reconhecido como um parceiro de sucesso.
          Cadastre-se agora e torne-se nosso parceiro!
        </p>
        <Link to="/cadastro/usuario">Cadastrar</Link>
      </div>
      <div className="ilustra_banner">
      <img src= {imgIlustra1} />
      </div>
    </div>
  </div>
  <section className="sessao1_home">
    <div className="posicionamento">
      <h3>Nossos parceiros</h3>
      <div className="filaParceiros_home">
        <div>
          <img src={imgsemParar} />
        </div>
        <div>
          <img src={imgMicrosoft} />
        </div>
        <div>
          <img src={imgmcDonalds} />
        </div>
      </div>
    </div>
  </section>
  <section className="sessao2_home">
    <div className="posicionamento posicionamento_texto_home">
      <div className="texto_sessao2_home">
        <span>Conheça a gente</span>
        <h4>A credibilidade que todos desejam ter</h4>
        <p>
          Está com dificuldades para promover sua marca e conquistar novos
          clientes? Não se preocupe, temos a solução para o seu problema! a
          reputação da marca Volkswagen pode ajudar a melhorar sua oferta de
          produtos e serviços. Não perca mais tempo tentando promover sua marca
          sozinho. Torne-se um parceiro da Volkswagen agora e deixe-nos ajudá-lo
          a alcançar seus objetivos de negócios!
        </p>
        <Link to="/quem_somos/quem_somos.html">Quem somos</Link>
      </div>
      <div className="ilustra_banner">
        <img src={imgIlustra2} />
      </div>
    </div>
  </section>
  <section className="sessao3_home">
    <div className="posicionamento">
      <h5>Etapas seguintes</h5>
      <div className="filaCards_home">
        <div className="card_etapas_home">
          <div className="header_card_home">
            <div className="icon">
              <img src={imgUser} />
            </div>
            <div className="numero_card">
              <p>1</p>
            </div>
          </div>
          <div className="conteudo_card_home">
            <p>Cadastro</p>
          </div>
        </div>
        <div className="card_etapas_home">
          <div className="header_card_home">
            <div className="icon">
              <img src={imgEdit} />
            </div>
            <div className="numero_card">
              <p>2</p>
            </div>
          </div>
          <div className="conteudo_card_home">
            <p>Solicitação de publicidade</p>
          </div>
        </div>
        <div className="card_etapas_home">
          <div className="header_card_home">
            <div className="icon">
              <img src={imgSmile} />
            </div>
            <div className="numero_card">
              <p>3</p>
            </div>
          </div>
          <div className="conteudo_card_home">
            <p>Aprovação</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sessao4_home">
    <div className="posicionamento">
      <h5>O que nossos clientes estão dizendo</h5>
      <div className="feedDepoimentos_home">
        <div className="cardDepoimento">
          <div className="perfil_depoimento">
            <img src={imgAna} />
          </div>
          <div className="textoDepoimento">
            <h6>Ana Nascimento</h6>
            <span>Fundadora da “Gasolina Lina”</span>
            <p>“Meu negócio melhorou muito depois de virar parceira”</p>
          </div>
        </div>
        <div className="cardDepoimento">
          <div className="perfil_depoimento">
            <img src={imgRebeca} />
          </div>
          <div className="textoDepoimento">
            <h6>Rebeca Flores</h6>
            <span>Fundadora da “hot dog”</span>
            <p>“Posso continuar vivendo meu sonho”</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>



    )
    
}

export default home
