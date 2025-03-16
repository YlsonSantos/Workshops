import { Colaborador } from './Colaborador';  

export interface Workshop {  
  id: number;  
  nome: string;  
  dataRealizacao: Date; 
  descricao: string; 
  colaboradores: Colaborador[]; 
}
