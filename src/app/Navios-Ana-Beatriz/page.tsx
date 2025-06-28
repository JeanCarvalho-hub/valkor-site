
import Image from "next/image";
import "@/styles/projetos/layout.css";
import Contato from "@/components/contanto";

export default function NaviosAnaBeatriz() {
  return (
    <main className="projeto-main">
      <section className="projeto-section">
        <header className="header-projeto">
          <div className="background-header-projeto">
            <div className="blob-projeto blob-projeto-1"></div>
            <div className="blob-projeto blob-projeto-2"></div>
            <div className="blob-projeto blob-projeto-3"></div>
          </div>
          <a><Image src="/icone/back.png" alt="" width={50} height={50} className="logo-projeto-back"/></a>
          <Image
            src="/icone/titulo-navio.png"
            alt="Navios Ana Beatriz"
            width={400}
            height={100}
            className="logo-projeto-navio"
          />
        </header>

        <article>
          <h2>Serviços:</h2>
          <ul>
            <li>Landing Page</li>
            <li>Identidade visual</li>
            <li>Posicionamento online</li>
            <li>Post</li>
            <li>Gestão de tráfego</li>
          </ul>

          <h2>Descrição:</h2>
          <p>
            Tivemos o prazer de transformar a presença digital de uma empresa do setor de turismo.
            Desenvolvemos uma <strong>Landing Page moderna</strong>, criamos <strong>campanhas estratégicas</strong>
            para atrair clientes qualificados e reforçamos o <strong>branding da marca</strong>.
          </p>
          <p>
            Também otimizamos as redes sociais da empresa com um visual mais atrativo e profissional, o que resultou em
            <strong> maior engajamento</strong> e <strong>aumento nas conversões</strong>. Estamos prontos para fazer o
            mesmo pelo seu negócio.
          </p>
        </article>
      </section>

      <section className="contato-section">
        <Contato/>
      </section>
    </main>
  );
}
