import { useState, useEffect } from "react";

type Comentario = {
  nome: string;
  user: string;
  texto: string;
};

const grupoA: Comentario[] = [
  {
    nome: "João Batista",
    user: "joaobtista",
    texto:
      "Design moderno, responsivo e com performance excelente. Superou minhas expectativas. Recomendo de olhos fechados!",
  },
  {
    nome: "Thiago Barbosa",
    user: "ths_",
    texto:
      "O trabalho ficou incrível! Muito acima do que eu esperava. O suporte também é excelente.",
  },
  {
    nome: "Breno Mandu",
    user: "styne",
    texto:
      "Meus clientes amaram o novo layout. Está tudo funcionando perfeitamente e com muito estilo.",
  },
  {
    nome: "João Chermonts",
    user: "chermonts",
    texto:
      "Ótima experiência, do início ao fim. Entrega rápida, atendimento impecável e um visual muito bonito.",
  },
  {
    nome: "Mauricio Ulysses",
    user: "mauriciouly",
    texto:
      "Melhor serviço que contratei nos últimos anos! Já indiquei para vários amigos.",
  },
  {
    nome: "Maria Eduarda",
    user: "maria_edu",
    texto:
      "Fiquei encantada com o resultado final. Profissionalismo nota 10! Voltarei a contratar.",
  },
  {
    nome: "Guilherme Dias",
    user: "g_dias",
    texto:
      "Layout moderno, rápido e exatamente do jeito que pedi. Recomendo demais!",
  },
  {
    nome: "Camila Freitas",
    user: "camifreitas",
    texto:
      "Trabalho impecável! Além de bonito, ficou super leve no mobile. Excelente!",
  },
  {
    nome: "Rodrigo Silva",
    user: "rodrigosilva",
    texto:
      "Sério, fiquei impressionado com o nível de detalhe. Muito bem feito!",
  },
  {
    nome: "Ana Clara",
    user: "ana.clara",
    texto:
      "Não esperava tanto, foi além! Atendimento atencioso e resultado maravilhoso.",
  },
];

export default function ComentariosScroll() {
  return (
    <div className="comentarios-carousel-container">
      <div className="comentarios-carousel-track">
        {grupoA.map((coment, i) => (
          <div key={i} className="comentario-card-carousel">
            <div className="comentario-pessoa-carousel">
              <div className="comentario-profile-carousel"></div>
              <div>
                <p className="comentario-nome-carousel">{coment.nome}</p>
                <p className="comentario-user-carousel">@{coment.user}</p>
              </div>
            </div>
            <p className="comentario-texto-carousel">{coment.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
