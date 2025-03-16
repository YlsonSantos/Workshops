import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Workshop {
  participantes: string[]; 
}

interface GraficoBarrasProps {
  workshops: Workshop[]; 
}

const GraficoBarras: React.FC<GraficoBarrasProps> = ({ workshops }) => {
  const participantes = [...new Set(workshops.flatMap(workshop => workshop.participantes))];
  
  const participantesCount = participantes.map(participante => 
    workshops.reduce((count, workshop) => 
      workshop.participantes.includes(participante) ? count + 1 : count, 0
    )
  );

  const chartData = {
    labels: participantes,
    datasets: [{
      label: 'Participação nos Workshops', 
      data: participantesCount, 
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Participação dos Participantes nos Workshops",
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: any) {
            const participante = tooltipItem.label;
            const workshopsParticipados = tooltipItem.raw;
            return `${participante} está participando de ${workshopsParticipados} workshops`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true, 
        min: 0, 
        max: 4, 
        ticks: {
          stepSize: 1, 
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default GraficoBarras;
