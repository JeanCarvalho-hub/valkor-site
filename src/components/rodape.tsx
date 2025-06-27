import Image from "next/image";
import "@/styles/page/rodape.css"

export default function Rodape(){
    return(
        <div className="footer">
            <div>
                <div className="logo-footer">
                    <Image src="/logo-grande.png" alt="vakor landing page sites e marketing" width={50} height={50}/>
                    <h2>Valkor</h2>
                </div>
            </div>
            <ul className="link-menu">
                <li><a href="#Home">Inicio</a></li>
                <li><a href="#Projects">Projetos</a></li>
                <li><a href="#Services">Serviços</a></li>
                <li><a href="#About">Sobre nós</a></li>
                <li><a href="#Contact">Contato</a></li>
            </ul>
            <ul className="link-menu">
                <li><a href="https://wa.me/5516992573047?text=Oi%2C%20gostei%20muito%20da%20ideia%20e%20quero%20saber%20mais!" target="_blank">Whatsapp</a></li>
                <li><a href="https://www.instagram.com/valkor.ong/" target="_blank">Instagram</a></li>
            </ul>
        </div>
    );
}