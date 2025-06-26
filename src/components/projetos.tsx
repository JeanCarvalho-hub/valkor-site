import Image from "next/image";
import "@/styles/page/projetos.css";

export default function Project(){
    return(
        <section id="Projects" className="section-projects">
            <h3>Casos de sucesso</h3>
            <h2>Projetos em <span style={{color: "rgb(168, 0, 219)"}}>destaque</span></h2>
            <div className="cards-projetos">
                <div className="card">
                    <div className="banner wallpaper"></div>
                    <div className="description">
                        <Image src="/icone/titulo-navio.png" alt="site para empresa" width={200} height={50} />
                        <ul className="list-services">
                            <li>Landing page</li>
                            <li>Post</li>
                            <li>Branding</li>
                            <li>Gestão de Tráfego</li>
                        </ul>
                        <p>
                                Criamos uma landing page simples, mas entendemos que, para atrair clientes qualificados, era preciso ir além.
Ajustamos o posicionamento online, tornamos o perfil mais estratégico e iniciamos campanhas de tráfego pago para captar leads com mais qualidade.
                        </p>
                        <a className="btn-projeto">Ver projeto</a>
                    </div>
                </div>
                <div className="card">
                    <div className="neon wallpaper"></div>
                    <div className="description">
                        <Image src="/icone/titulo-neon.png" alt="site para empresa" width={200} height={50} />
                        <ul className="list-services">
                            <li>Post</li>
                            <li>Branding</li>
                            <li>Cartão de visita</li>
                        </ul>
                        <p>Perfil bonito? Entregamos uma marca que nunca será esquecida no que faz.
Criamos posts que destacam sua marca nas redes sociais, com cores que chamam atenção e imagens que se conectam com o seu público.</p>
                        <a className="btn-projeto">Ver projeto</a>
                    </div>
                </div>
                <div className="card">
                    <div className="grocha wallpaper"></div>
                    <div className="description">
                        <Image src="/icone/grocha.png" alt="site para empresa" width={200} height={50} />
                        <ul className="list-services">
                            <li>Post</li>
                            <li>Branding</li>
                        </ul>
                        <p>Você não vende o seu tempo. Você entrega transformações.
E foi exatamente isso que comunicamos com uma identidade visual renovada e posts estrategicamente pensados para destacar o seu real valor.</p>
                        <a className="btn-projeto">Ver projeto</a>
                    </div>
                </div>
            </div>
        </section>
    );
}