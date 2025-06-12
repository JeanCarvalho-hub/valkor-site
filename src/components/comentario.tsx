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
      "Meu site ficou simplesmente espetacular! Um design moderno de tirar o fôlego, totalmente responsivo e com uma performance que voa! Superou todas as minhas expectativas. Recomendo de olhos fechados e com aplausos!",
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
];

const grupoB: Comentario[] = [
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
export default function Comentarios() {
  const [comentarios, setComentarios] = useState<Comentario[]>(grupoA);
  const [flipIndex, setFlipIndex] = useState<number | null>(null);
  const [usandoGrupoA, setUsandoGrupoA] = useState(true);

  const trocarEmSequencia = (origem: Comentario[], destino: Comentario[]) => {
    destino.forEach((novo, i) => {
      setTimeout(() => {
        setFlipIndex(i); // ativa o flip
        setTimeout(() => {
          setComentarios((prev) => {
            const novoArray = [...prev];
            novoArray[i] = novo;
            return novoArray;
          });
          setFlipIndex(null); // remove o flip
        }, 300); // tempo do flip
      }, i * 1000); // atraso entre cada troca
    });
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      trocarEmSequencia(
        usandoGrupoA ? grupoA : grupoB,
        usandoGrupoA ? grupoB : grupoA
      );
      setUsandoGrupoA((prev) => !prev);
    }, 12000); // troca de grupo a cada 12s

    return () => clearInterval(intervalo);
  }, [usandoGrupoA]);

  return (
    <div className="list-comentario">
      {comentarios.map((coment, i) => (
        <div
          key={i}
          className={`card-comentario ${flipIndex === i ? "flip" : ""}`}
        >
          <div className="card-pessoa">
            <div className="profile-photo"></div>
            <div>
              <p>{coment.nome}</p>
              <p className="id-user">@{coment.user}</p>
            </div>
          </div>
          <p>{coment.texto}</p>
        </div>
      ))}
    </div>
  );
}
