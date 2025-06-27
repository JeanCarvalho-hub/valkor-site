import Divisor from "./div"
import "@/styles/page/contato.css";
import Rodape from "./rodape";

export default function Contato(){
    return(
        <section id="Contact" className="contato">
            <div className="divisor-contato">
                <img src="/divisor-bottom.png"></img>
            </div>
            <div className="background-contato">
                <div className="blob-contato blob-contato-1"></div>
                <div className="blob-contato blob-contato-2"></div>
                <div className="blob-contato blob-contato-3"></div>
            </div>
            <div className="text-contato">
                <h2>Vamos escalar seu negócio ?</h2>
                <div className="btn-div-contato">
                    <nav>
                        <a href="https://wa.me/5516992573047?text=Olá%2C%20gostaria%20de%20agendar%20uma%20reunião." target="_blank">Agendar reunião</a>
                        <a href="https://wa.me/5516992573047?text=Oi%2C%20gostei%20muito%20da%20ideia%20e%20quero%20saber%20mais%20sobre%20seus%20serviços!" target="_blank">Chamar no Whatsapp</a>
                    </nav>
                </div>
            </div>
            <Rodape/>
        </section>
    );
}