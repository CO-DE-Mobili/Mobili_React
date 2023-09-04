import './style.css';

import Menu_parceiro from '../../components/menu_parceiro';


function Gerenciar_perfil_parceiro() {



    return (
        <>
            <body>

                <Menu_parceiro />

                <main id='main_editar_PerfilParceiro'>
                    <div className="conteudo_gerenciamento_parceiro">
                        <section className="sessao1_gerenciamento_parceiro">
                            <div className="cabecalho_gerenciamento_parceiro">
                                <h1>Gerenciamento</h1>
                                <p>Minhas propagandas</p>
                            </div>
                            <div className="botaoAdd_gerenciamento_parceiro">
                                <a href="../criar_propaganda/index.html">Adicionar</a>
                            </div>
                        </section>
                        <section className="sessao2_gerenciamento_parceiro">
                            <div className="tabelaepesquisa_parceiro">
                                <div className="box_busca_gerenciamento_parceiro">
                                    <div className="barra_pesquisa_gerenciamento_parceiro">
                                        <form className="search_container">
                                            <input type="text" id="search_bar" placeholder="Busca" />
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="search_icon"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeMiterlimit={10}
                                                        strokeWidth={32}
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeMiterlimit={10}
                                                        strokeWidth={32}
                                                        d="M338.29 338.29L448 448"
                                                    />
                                                </svg>
                                            </a>
                                            <input type="reset" className="limpa_input" defaultValue="X" />
                                        </form>
                                        {/* <div class="search_container">
                    <input type="submit" value="Pesquisar" class="btn_enviar_parceiro">
                    
                </div> */}
                                    </div>
                                </div>
                                <table className="tabela_gerenciamento_parceiro">
                                    <thead>
                                        <tr className="coluna coluna_responsivo_header">
                                            <th>Título</th>
                                            <th>Categoria</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="coluna coluna_responsivo ">
                                            <td data-label="Título">Promoção</td>
                                            <td data-label="Categoria">Restaurante</td>
                                            <td data-label="Ação">
                                                <a href="#">Ver mais</a>
                                            </td>
                                        </tr>
                                        <tr className="coluna coluna_responsivo ">
                                            <td data-label="Título">Promoção</td>
                                            <td data-label="Categoria">Restaurante</td>
                                            <td data-label="Ação">
                                                <a href="#">Ver mais</a>
                                            </td>
                                        </tr>
                                        <tr className="coluna coluna_responsivo ">
                                            <td data-label="Título">Promoção</td>
                                            <td data-label="Categoria">Restaurante</td>
                                            <td data-label="Ação">
                                                <a href="#">Ver mais</a>
                                            </td>
                                        </tr>
                                        <tr className="coluna coluna_responsivo ">
                                            <td data-label="Título">Promoção</td>
                                            <td data-label="Categoria">Restaurante</td>
                                            <td data-label="Ação">
                                                <a href="#">Ver mais</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="footer_tabela_gerenciamento_parceiro ">
                                <div className="contagem_paginacao_tabela_gerenciamento_parceiro">
                                    <p>1-5 de 56</p>
                                </div>
                                <div className="botoes_paginacao_parceiro">
                                    <div className="btn_paginacao_tabela_gerenciamento_parceiro">
                                        <div className="btn_paginacao_parceiro">
                                            <a href="">
                                                <svg
                                                    width={15}
                                                    height={15}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.0374 6.72915L3.28489 6.72915L7.98249 2.03156C8.35791 1.65614 8.35791 1.04006 7.98249 0.664637C7.60707 0.289214 7.00061 0.289214 6.62519 0.664637L0.281512 7.00831C0.192274 7.09737 0.121475 7.20315 0.0731694 7.3196C0.0248639 7.43605 6.50349e-07 7.56089 6.39328e-07 7.68696C6.28306e-07 7.81303 0.0248639 7.93787 0.0731694 8.05432C0.121475 8.17077 0.192274 8.27655 0.281512 8.36561L6.61556 14.7189C6.70469 14.808 6.81049 14.8787 6.92693 14.927C7.04337 14.9752 7.16818 15 7.29421 15C7.42025 15 7.54505 14.9752 7.66149 14.927C7.77794 14.8787 7.88374 14.808 7.97286 14.7189C8.06198 14.6298 8.13268 14.524 8.18091 14.4075C8.22914 14.2911 8.25397 14.1663 8.25397 14.0403C8.25397 13.9142 8.22914 13.7894 8.18091 13.673C8.13268 13.5565 8.06198 13.4507 7.97286 13.3616L3.28489 8.6544L14.0374 8.6544C14.5668 8.6544 15 8.22122 15 7.69177C15 7.16233 14.5668 6.72915 14.0374 6.72915Z"
                                                        fill="#001E50"
                                                        fillOpacity="0.75"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="btn_paginacao_parceiro">
                                            <a href="">
                                                <svg
                                                    width={15}
                                                    height={15}
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M0.962622 8.27086H11.7151L7.01751 12.9685C6.64209 13.3439 6.64209 13.96 7.01751 14.3354C7.39294 14.7108 7.99939 14.7108 8.37481 14.3354L14.7185 7.9917C14.8077 7.90264 14.8785 7.79686 14.9268 7.68041C14.9751 7.56396 15 7.43912 15 7.31305C15 7.18698 14.9751 7.06214 14.9268 6.94569C14.8785 6.82924 14.8077 6.72346 14.7185 6.6344L8.38444 0.281098C8.29531 0.191976 8.18951 0.121281 8.07307 0.073049C7.95663 0.0248169 7.83182 -7.62752e-06 7.70579 -7.62939e-06C7.57975 -7.63127e-06 7.45495 0.0248169 7.33851 0.073049C7.22206 0.121281 7.11626 0.191976 7.02714 0.281098C6.93802 0.370219 6.86732 0.476021 6.81909 0.592464C6.77086 0.708907 6.74603 0.83371 6.74603 0.959746C6.74603 1.08578 6.77086 1.21059 6.81909 1.32703C6.86732 1.44347 6.93802 1.54927 7.02714 1.63839L11.7151 6.34561H0.962622C0.43318 6.34561 0 6.77879 0 7.30824C0 7.83768 0.43318 8.27086 0.962622 8.27086Z"
                                                        fill="#001E50"
                                                        fillOpacity="0.75"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </body>

        </>
    )
}

export default Gerenciar_perfil_parceiro;