import React from 'react'
import { Bar } from 'react-chartjs-2';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Card.css';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function Card() {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
          {
            data: [100, 65, 60, 50, 20, 25, 35, 80],
            backgroundColor: 'rgba(0, 149, 255, 1)', // Azul oscuro
            borderColor: 'transparent',
            borderRadius: 5,
            barPercentage: 0.9,
            categoryPercentage: 0.3,
            barThickness: 9,
          },
          {
            data: [-90, -90, -100, -15, -40, -30, -25, -10],
            backgroundColor: 'rgba(135, 206, 255, 1)', // Azul claro
            borderColor: 'transparent',
            borderRadius: 5,
            barPercentage: 0.9,
            categoryPercentage: 0.3,
            barThickness: 9,
          }
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: { display: false },
          y: { display: false, beginAtZero: true },
        },
        layout: {
          padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
      };

  return (
    <div className='container__card'>
        <div className="container__card__header">
            <div className="container__card__header__title">
                <h2 className="card__title">Tu banlance</h2>
                <h3 className='card__balacne'>900.000</h3>
            </div>
            <div className="container__card__header__puntos">
                <BiDotsHorizontalRounded size={24} />
            </div>
        </div>
        <div className="container__card__grafica">
            <Bar data={data} options={options}/>
        </div>
    </div>
  )
}

export default Card