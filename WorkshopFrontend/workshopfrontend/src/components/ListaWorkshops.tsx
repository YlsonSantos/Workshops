import React from "react";  
import { Link } from "react-router-dom";  
import { Workshop } from "../models/Workshop";  

const workshops: Workshop[] = [  
  { id: 1, nome: "Workshop de C# - Introdução", descricao: "Aprenda os fundamentos de C#.", dataRealizacao: "2022-05-01" },
  { id: 2, nome: "Workshop de JavaScript - Avançado", descricao: "Aprofunde seus conhecimentos em JS.", dataRealizacao: "2022-06-15" },
  { id: 3, nome: "Workshop de C# - Web", descricao: "Desenvolva aplicações web com C#.", dataRealizacao: "2022-07-10" },
  { id: 4, nome: "Workshop de JavaScript - React", descricao: "Domine React com JavaScript.", dataRealizacao: "2022-08-20" }
];

const ListaWorkshops = () => {  
  return (
    <div>
      <h2>Lista de Workshops</h2>  
      <ul>  
        {workshops.map((workshop) => ( 
          <li key={workshop.id}>  
            <h3>{workshop.nome}</h3>  
            <p>{workshop.descricao}</p>  
            <p><strong>Data:</strong> {workshop.dataRealizacao}</p>  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaWorkshops;  
