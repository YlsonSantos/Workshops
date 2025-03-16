import React, { useState, useEffect } from "react";

import CSharpImage from "../assets/Sharp.png";
import JavaScriptImage from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import JavaImage from "../assets/java.webp";

const workshops = [
  { 
    id: 1, 
    nome: "Workshop C#", 
    descricao: "Aprofundamento no desenvolvimento com C#, abordando desde a sintaxe básica até conceitos avançados, como LINQ, manipulação de arquivos e desenvolvimento de aplicações desktop e web.", 
    dataRealizacao: "2022-05-01",
    imagemFundo: CSharpImage, 
    participantes: ["João Silva", "Carlos Souza", "Ana Costa", "Paulo Almeida", "Fernanda Souza", "Juliana Santos"],
    totalParticipantes: 10
  },
  { 
    id: 2, 
    nome: "Workshop JavaScript", 
    descricao: "Foco em como utilizar JavaScript para desenvolvimento web, abrangendo funções, manipulação do DOM, promessas e async/await. Essencial para quem quer trabalhar com front-end e back-end.", 
    dataRealizacao: "2022-06-15",
    imagemFundo: JavaScriptImage, 
    participantes: ["Lucas Pereira", "Juliana Santos", "Roberto Lima", "Carla Rocha", "João Silva", "Carlos Souza", "Paulo Almeida"], 
    totalParticipantes: 10 
  },
  { 
    id: 3, 
    nome: "Workshop React", 
    descricao: "Aborda os conceitos principais do React, como componentes, hooks, JSX e o estado da aplicação. Voltado para quem quer desenvolver interfaces interativas e dinâmicas para web.", 
    dataRealizacao: "2022-07-20",
    imagemFundo: ReactImage, 
    participantes: ["Ana Costa", "Paulo Almeida", "Fernanda Souza", "Juliana Santos", "Lucas Pereira"], 
    totalParticipantes: 10 
  },
  { 
    id: 4, 
    nome: "Workshop Java", 
    descricao: "Enfoque nos conceitos fundamentais de Java, como orientações a objetos, manipulação de exceções, coleções e threads. Ideal para quem quer aprender a criar aplicações robustas em Java.", 
    dataRealizacao: "2022-08-10",
    imagemFundo: JavaImage, 
    participantes: ["Lucas Pereira", "Juliana Santos", "Roberto Lima", "Carla Rocha"], 
    totalParticipantes: 10 
  }
];

import GraficoBarras from "../components/GraficoBarras";
import GraficoPizza from "../components/GraficoPizza";

const WorkshopPage = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState<number | null>(null);

  const handleFlip = (id: number) => { 
    setFlipped((prev) => (prev === id ? null : id));
  };

  const handleZoom = (id: number) => { 
    setZoomed((prev) => (prev === id ? null : id)); 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Espaço com os Workshops Disponíveis */}
      <div className="collaborators-box2">
        <h2>WORKSHOPS DISPONÍVEIS</h2>
        <div className="collaborators2">
          {workshops.map((workshop) => {
            const porcentagemConclusao = (workshop.participantes.length / workshop.totalParticipantes) * 100;

            return (
              <div 
                key={workshop.id} 
                className={`collaborator2 ${flipped === workshop.id ? 'flipped' : ''}`}
                onClick={() => handleFlip(workshop.id)}
              >
                <div className="front">
                  <div className="image" style={{ backgroundImage: `url(${workshop.imagemFundo})` }}></div>
                </div>
                <div className="back">
                  <h3>{workshop.nome}</h3>
                  <p>{workshop.descricao}</p>
                  <p><strong>Data:</strong> {workshop.dataRealizacao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* progresso */}
      <div className="retangulos-container">
        {workshops.map((workshop) => {
          const porcentagemConclusao = (workshop.participantes.length / workshop.totalParticipantes) * 100;

          return (
            <div 
              key={workshop.id} 
              className={`retangulo ${zoomed === workshop.id ? 'zoomed' : ''}`}
            >
              <div className="imagem-workshop" style={{ backgroundImage: `url(${workshop.imagemFundo})` }}></div>
              <h3>{workshop.nome}</h3>
              <p>Conclusão de colaboradores</p>
              <hr />
              <p><strong>Participação:</strong> {porcentagemConclusao.toFixed(2)}%</p>
              <p><strong>Participantes:</strong> {workshop.participantes.join(", ")}</p>
            </div>
          );
        })}
      </div>

      {/* gráficos */}
      <div className="collaborator4">
        <h2>GRÁFICOS DE PARTICIPAÇÃO</h2>
        <div className="grafico-container">
          {/* Gráfico de Barras */}
          <div className="grafico">
            <GraficoBarras workshops={workshops} />
          </div>

          {/* Gráfico de Pizza */}
          <div className="grafico-pizza">
            <GraficoPizza workshops={workshops} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ylson Santos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default WorkshopPage;
