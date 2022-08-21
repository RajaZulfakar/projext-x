// Ini Untuk Donut Chart
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
  ArcElement,
  ArcOptions,
} from "chart.js";
import { type } from "os";
import { Bar, Line, Scatter, Bubble, Doughnut } from "react-chartjs-2";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

const data = {
  backgroundColor: ["#10b981", "#eab308", "#ec4899"],
  labels: ["Selesai", "Sedang", "Belum"],
  datasets: [
    {
      label: "Data aja",
      data: [20, 2, 1],
      backgroundColor: ["#10b981", "#eab308", "#ec4899"],
      hoverOffset: 4,
    },
  ],
};

const options = {
  elements: {
    showAllTooltips: true,
    arc: {
      weight: 0.5,
      borderWidth: 0,
    },
  },
  cutout: 145,
};

function DoughnutChart() {
  return (
    <div className="w-full h-full md:w-[31.25rem] md:h-[31.25rem] flex-shrink-0 flex justify-center shadow-lg p-4 border rounded-md items-center relative ">
      <Doughnut
        // className=" w-ful h-full"
        data={data}
        // width={40}
        // height={40}
        options={options}
      />
      <div className="absolute ">
        <div className="relative w-40 h-40 mt-10 border border-green-500 shadow-md rounded-full overflow-hidden ">
          <Image
            objectFit="contain"
            src="https://randomuser.me/api/portraits/women/12.jpg"
            layout="fill"
          />
        </div>
      </div>
      {/* <h2 className="absolute font-extralight text-7xl text-green-500">
          86,95%
        </h2> */}
    </div>
  );
}

export default DoughnutChart;

//   INI UNTUK LINE CHART

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
  ArcElement,
  ArcOptions,
} from "chart.js";
import { type } from "os";
import { Bar, Line, Scatter, Bubble, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
  //   ArcOptions
);
const data = {
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
      data: [1, 10, 30, 54, 100, 90, 27, 53, 23, 78, 55, 67],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.275,
      borderWidth: 2,
      borderColor: "rgba(255,255,255, 0.5)",
      fill: "start",
      backgroundColor: "rgba(255,255,255, 0.05)",
    },
    point: {
      radius: 10,
      hitRadius: 1,
      bacgroundColor: "rgba(255,255,255, 0.5)",
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};

function LineChart() {
  return (
    <div className="relative px-1 w-full md:h-[500px]  border shadow-xl rounded-xl m-8 text-white bg-green-700">
      <h4 className="text-2xl font-semibold">Kinerja Bulanan</h4>
      <Line
        className="w-full h-44"
        data={data}
        options={options}
        // height={"65%"}

        height={50}
        //   width={100}
      />
    </div>
  );
}

export default LineChart;
