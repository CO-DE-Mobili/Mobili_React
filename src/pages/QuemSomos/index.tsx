import "./style.css";

function QuemSomos() {
    return (
        <>
            <main className="quem_somos">
                <section className="facilitando posicionamento">
                    <h1>Quem Somos</h1>
                    <div>
                    <h2>Facilitando a vida dos clientes e agregando valor!</h2>
                    <p>
                        Acreditamos que a tecnologia pode ser uma grande aliada na facilitação
                        da vida dos clientes. Somos uma marca comprometida em oferecer produtos
                        exclusivos que tornem a rotina de nossos clientes mais fácil. Contamos
                        com uma plataforma web para parceiros, que ajuda a gerenciar os seus
                        negócios. Através dela, é possível ter acesso a informações importantes
                        sobre seus clientes e suas operações, permitindo uma tomada de decisão
                        mais acertada e estratégica.
                    </p>
                    </div>
                    <img src="./imgs/qs_img.svg" alt="" />
                </section>
                <section className="nossa_missao posicionamento">
                    <h2>Nossa Missão</h2>
                    <div className="cards">
                    <div className="card">
                        <img src="./imgs/qs_foguete.svg" alt="" />
                        <h3>Missão</h3>
                        <p>
                        Nossa missão é fornecer soluções tecnológicas inovadoras e
                        sustentáveis que facilitem a vida de nossos clientes e parceiros,
                        impulsionando seu sucesso e aumentando sua credibilidade no mercado.{" "}
                        </p>
                    </div>
                    <div className="card">
                        <img src="./imgs/qs_olho.svg" alt="" />
                        <h3>Visão</h3>
                        <p>
                        Queremos ser reconhecidos como líderes em soluções tecnológicas
                        inovadoras, oferecendo produtos exclusivos que tornem a vida de nossos
                        clientes e parceiros mais fácil.
                        </p>
                    </div>
                    </div>
                    <div className="valores card">
                    <img src="./imgs/qs_alvo.svg" alt="" />
                    <h3>Valores</h3>
                    <p>
                        Nós acreditamos em soluções tecnológicas inovadoras e sustentáveis para
                        atender às necessidades dos nossos clientes e parceiros. Além disso, nos
                        esforçamos para fornecer produtos e serviços de alta qualidade e manter
                        relacionamentos transparentes e duradouros com eles. Acreditamos que a
                        credibilidade é fundamental para o sucesso de nossos clientes e
                        parceiros e nos esforçamos para apoiá-los com soluções tecnológicas
                        inovadoras e sustentáveis.
                    </p>
                    </div>
                </section>
                </main>

        </>
    )
}

export default QuemSomos;
