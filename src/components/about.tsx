import Image from "next/image";
import "@/styles/page/about.css"
import Divisor from "./div";

export default function About(){
    return(
        <section id="About" className="section-about">
            <div className="div-about">
                <div className="div-about-text">
                    <h2>Quem somos</h2>
                    <p>Somos uma agência que usa a tecnologia para alavancar as empresas, desde posts estratégicos para redes sociais até artes visuais impactantes, identidade visual completa (branding), Consultoria para o seu time de venda e desenvolvimento de sites modernos e funcionais. Combinamos design criativo, comunicação eficaz e tecnologia de ponta para entregar soluções que tornam sua empresa bonita, profissional e preparada para impressionar no digital.</p>
                    <a className="btn-about" href="https://www.instagram.com/valkor.ong/" target="_blank"><Image src="/icone/insta.png" alt="Instagram" width={25} height={25}/>Seguir no Instagram</a>
                </div>
                <div className="div-equipe">
                    <div className="bloco-equipe">
                        <div className="line-1">
                            <div className="text-equipe jean">
                                <Image src="/icone/50.png" alt="Jean Carvalho" width={50} height={50}/>
                                <i>Jean Carvalho</i>
                                <i><span>Desenvolvedor fullstack</span></i>
                            </div>
                            <div className="text-equipe diogo">
                                <Image src="/icone/50.png" alt="Diogo Caetano" width={50} height={50}/>
                                <i>Diogo Caetano</i>
                                <i><span>Designer fullstack</span></i>
                            </div>
                        </div>
                        <div className="text-equipe davi">
                            <Image src="/icone/50.png" alt="Davi Pereira" width={50} height={50}/>
                            <i>Davi Pereira</i>
                            <i><span>Consultor de marketing</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}