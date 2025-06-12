import "@/styles/page/home.css";
import Image from "next/image";
import Divisor from "./div";

export default function Home() {
  return (
    <section className="section-home">
      <div className="background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="conteudo">
        <Image src="/logo-grande.png" alt="volker" width={100} height={100}/>
        <h1>Transformamos negócios com sites que vendem, estratégias que escalam e conteúdo que converte</h1>
        <p>Seu próximo salto digital começa com um projeto feito para performar.</p>
        <div className="div-btn">
            <a className="btn-home cta">Agendar reunião</a>
            <a className="btn-home more">Descubra mais</a>
        </div>
      </div>
      <Divisor/>
    </section>
  );
}
