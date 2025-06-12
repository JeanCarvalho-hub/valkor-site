import Image from "next/image";
import "@/styles/page/projetos.css"
import DivisorBottom from "./div2";


export default function Project(){
    return(
        <section className="section-projects">
            <h3>Casos de sucesso</h3>
            <h2>Projetos em <span style={{color: "rgb(168, 0, 219)"}}>destaque</span></h2>
            <div className="cards-projetos">
                <div className="card">
                    <div className="banner"></div>
                    <div className="description">
                        <Image src="/icone/titulo-navio.png" alt="site para empresa" width={200} height={50} />
                        <ul className="list-services">
                            <li>Landing page</li>
                            <li>Post's</li>
                            <li>Branding</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam praesentium veritatis eius totam maxime hic tempora culpa incidunt ipsam illum, consequatur, amet adipisci, alias repellat. Maiores iste magnam incidunt.</p>
                        <a className="btn-projeto">Ver projeto</a>
                    </div>
                </div>
                <div className="card">
                    <Image src="/navios-ana-beatriz.png" alt="landing page" width={400} height={300} className="banner"/>
                    <div className="description">
                        <Image src="/icone/titulo-neon.png" alt="site para empresa" width={200} height={50} />
                        <ul className="list-services">
                            <li>Landing page</li>
                            <li>Post's</li>
                            <li>Branding</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam praesentium veritatis eius totam maxime hic tempora culpa incidunt ipsam illum, consequatur, amet adipisci, alias repellat. Maiores iste magnam incidunt.</p>
                        <a className="btn-projeto">Ver projeto</a>
                    </div>
                </div>
            </div>
        </section>
    );
}