import React from "react";
import { Link } from "react-router-dom";

const colaboradores = [
  { id: 1, nome: "João Silva", imagem: "https://randomuser.me/api/portraits/men/1.jpg" },  
  { id: 2, nome: "Maria Oliveira", imagem: "https://randomuser.me/api/portraits/women/2.jpg" },  
  { id: 3, nome: "Carlos Souza", imagem: "https://randomuser.me/api/portraits/men/3.jpg" },  
  { id: 4, nome: "Ana Costa", imagem: "https://randomuser.me/api/portraits/women/4.jpg" },  
  { id: 5, nome: "Paulo Almeida", imagem: "https://randomuser.me/api/portraits/men/5.jpg" },  
  { id: 6, nome: "Fernanda Souza", imagem: "https://randomuser.me/api/portraits/women/6.jpg" }, 
  { id: 7, nome: "Lucas Pereira", imagem: "https://randomuser.me/api/portraits/men/7.jpg" },  
  { id: 8, nome: "Juliana Santos", imagem: "https://randomuser.me/api/portraits/women/8.jpg" },  
  { id: 9, nome: "Roberto Lima", imagem: "https://randomuser.me/api/portraits/men/9.jpg" },  
  { id: 10, nome: "Carla Rocha", imagem: "https://randomuser.me/api/portraits/women/10.jpg" }  
];

const Home = () => {
  return (
    <div>
      <header>
        <h1>Workshop Fast Solutions</h1>
      </header>
      
      <div className="collaborators-box">
        <h2>COLABORADORES</h2>
        
        <div className="collaborators">
          {colaboradores.map((colaborador) => (
            <div className="collaborator" key={colaborador.id}>
              {/* Exibição da imagem do colaborador */}
              <div className="collaborator-image">
                <img src={colaborador.imagem} alt={colaborador.nome} />
              </div>

              <div className="collaborator-name">{colaborador.nome}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      <footer className="footer">
        <p>&copy; 2025 Ylson Santos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
