import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement } from "chart.js";

ChartJS.register(BarElement);

const labels = ["Diah", "Achmad", "Puan", "Nani", "Dila"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Performa",
      data: [-65, 59, 30, 81, 56],
      backgroundColor: [
        "#f472b68d",
        "#22d3ee8d",
        "#facc158d",
        "#4ade808d",
        "#22d3ee8d",
      ],
      borderColor: ["#f472b6", "#22d3ee", "#facc15", "#4ade80", "#22d3ee"],
      borderWidth: 2,
    },
  ],
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  },
};

function BarChart() {
  return (
    <div className="px-2">
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              // display: false,
              position: "bottom",
            },
          },
          scales: {
            y: {
              display: false,
              beginAtZero: true,
            },
          },
          elements: { bar: {} },
        }}
      />
    </div>
  );
}

export default BarChart;
