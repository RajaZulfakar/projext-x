import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data = () => {
  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        data: [10, 21, 25, 18, 39, 29, 40, 35, 48, 28, 32, 41],
        label: " Capaian",
        fill: true,
        borderColor: "#22d3ee",

        pointStyle: "circle",
        pointBackgroundColor: "#22d3ee",
        pointBorderColor: "white",
        pointBorderWidth: 5,
        pointRadius: 7,
        pointHoverRadius: 10,
        pointHighlightStroke: "rgba(75, 192, 192, 0.2)",

        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(10, 10, 10, 220);
          gradient.addColorStop(0, "rgba(34, 211, 238,.5)");
          gradient.addColorStop(1, "rgba(34, 211, 238,.05)");
          return gradient;
        },
        // borderWidth: 5,
        // borderColor: "rgb(30 58 138)",
        // tension: 0.2,
      },
    ],
  };
};

function LineChart() {
  return (
    <Line
      data={data()}
      options={{
        maintainAspectRatio: false,
        // aspectRatio: 2,
        responsive: true,
        scales: {
          x: {
            ticks: { color: "gray" },
            grid: {
              display: true,
              drawBorder: false,
              color: "#e2e8f0",
              borderDash: [5],
            },
          },
          y: { display: true, grid: { drawBorder: false, borderDash: [5] } },
        },
        plugins: {
          title: {
            display: true,
            text: "Monthly Performance",
            color: "gray",
            padding: { bottom: 40 },
            font: {
              size: 20,
              weight: "bold",
              lineHeight: 1.2,
            },
            position: "top",
          },
          legend: { display: false, position: "bottom" },
        },
      }}
    />
  );
}

export default LineChart;
