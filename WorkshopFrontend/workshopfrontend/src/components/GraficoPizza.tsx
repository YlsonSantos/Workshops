import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Definindo o tipo para o Workshop
interface Workshop {
  nome: string;
  participantes: { length: number };
}

// Tipando as propriedades do componente GraficoPizza
interface GraficoPizzaProps {
  workshops: Workshop[];
}

const GraficoPizza: React.FC<GraficoPizzaProps> = ({ workshops }) => {
  const labels = workshops.map(workshop => workshop.nome); 
  const data = workshops.map(workshop => workshop.participantes.length); 

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distribuição de Participantes por Workshop",
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default GraficoPizza;
