import "@/styles/page/home.css";
import Image from "next/image";
import Divisor from "./div";

export default function Home() {
  return (
    <section id="Home" className="section-home">
      <div className="background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="conteudo">
        <Image src="/logo-grande.png" alt="volker" width={100} height={100}/>
        <h1><span>Transformamos negócios</span> com sites que vendem, estratégias que escalam e conteúdo que converte</h1>
        <p>Seu próximo salto digital começa com um projeto feito para performar.</p>
        <div className="div-btn">
            <a className="btn-home cta" href="https://wa.me/5516992573047?text=Olá%2C%20gostaria%20de%20agendar%20uma%20reunião." target="_blank">Agendar reunião</a>
            <a className="btn-home more" href="#Projects">Descubra mais</a>
        </div>
      </div>
      <Divisor/>
    </section>
  );
}
