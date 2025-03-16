import React from "react"; 
import { Colaborador } from "../models/Colaborador";  

const colaboradores: Colaborador[] = [  
  { id: 1, nome: "João Silva" },
  { id: 2, nome: "Maria Oliveira" },
  { id: 3, nome: "Carlos Pereira" },
  { id: 4, nome: "Ana Souza" },
  { id: 5, nome: "Lucas Ferreira" },
  { id: 6, nome: "Juliana Costa" },
  { id: 7, nome: "Felipe Lima" },
  { id: 8, nome: "Larissa Almeida" },
  { id: 9, nome: "Eduardo Silva" },
  { id: 10, nome: "Patricia Santos" }
];

const ListaColaboradores = () => {  
  return (
    <div>
      <h2>Lista de Colaboradores</h2>  
      <ul>  
        {colaboradores.map((colaborador) => ( 
          <li key={colaborador.id}>  
            <div className="collaborator4">
              <h3>{colaborador.nome}</h3>  
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaColaboradores;
