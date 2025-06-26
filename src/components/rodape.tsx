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
                <li>Inicio</li>
                <li>Projetos</li>
                <li>Serviços</li>
                <li>Sobre nós</li>
                <li>Contato</li>
            </ul>
            <ul className="link-menu">
                <li>Whatsapp</li>
                <li>Instagram</li>
                <li>Linkedin</li>
            </ul>
        </div>
    );
}