// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement } from "chart.js";
// import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import { setLabels } from "react-chartjs-2/dist/utils";
import { text } from "stream/consumers";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LineElement,
  LinearScale,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Done", "To Do", "Work", "Lag"],
  datasets: [
    {
      label: "Perfermance Data",
      data: [23, 20, 20, 3],
      backgroundColor: ["#22d3ee", "#facc15", "#4ade80", "#f472b6"],
      hoverOffset: 10,
      borderRadius: 20,
      borderWidth: 0,
    },
  ],
};
const settings = {};
function DoughnutChart() {
  return (
    <div className="px-8 relative">
      <h2 className="font-semibold text-2xl text-stone-500 pt-4 text-center">
        My Performance
      </h2>
      <div className="pt-4">
        <Doughnut
          className="relative"
          height={320}
          data={data}
          options={{
            spacing: 10,
            maintainAspectRatio: false,
            cutout: "79%",
            backgroundColor: "green",
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  padding: 15,
                  boxHeight: 20,
                  boxWidth: 20,
                  pointStyle: "circle",

                  // generateLabels: function (chart) {
                  //   // const labelText = chart.data.datasets.length;
                  //   // text: `${labelText}`;
                  //   text: "telor";
                  //   const label = chart.data.datasets.data;
                  // },
                },
              },
            },
            elements: {
              arc: {
                borderWidth: 0.5,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
