import {
  ClipboardListIcon,
  PresentationChartLineIcon,
  PrinterIcon,
  RefreshIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import type { NextPage } from "next";
import Head from "next/head";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Table from "../components/Table";
import UserCard from "../components/UserCard";

const Home: NextPage = () => {
  return (
    <div className="text-slate-700 bg-slate-100 min-h-screen">
      <Head>
        <title>Project - X | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Ubuntu">
        {/* Head */}
        <div className="mb-4">
          <div className="px-4 py-4 flex justify-between bg-white shadow-md">
            <ViewGridIcon className="w-6 h-6" />
            <div className="">
              <h4 className="font-bold">Sunday, 22 Aug 2022</h4>
            </div>
            <div className="text-blue-700 flex justify-center items-center space-x-3">
              <RefreshIcon className="w-6 h-6" />
              <PrinterIcon className="w-6 h-6" />
              <a href="#">Buat Project</a>
            </div>
          </div>
          {/* MAIN */}
          <div className="mt-4 px-4 grid grid-cols-2 lg:grid-cols-12 gap-4 ">
            {/* Blue Card */}
            <div className="flex items-center justify-between px-4 py-2 lg:col-span-2 h-32  bg-blue-700 text-white shadow-md rounded-xl ">
              <div>
                <p className="text-blue-200">Project Done</p>
                <h4 className="text-7xl">23</h4>
              </div>
              <ThumbUpIcon className="text-cyan-400 h-20 w-20" />
            </div>
            {/* Blue Card */}
            <div className="flex items-center justify-between px-4 py-2 lg:col-span-2 h-32  bg-blue-700 text-white shadow-md rounded-xl ">
              <div>
                <p className="text-blue-200">To Do</p>
                <h4 className="text-7xl">23</h4>
              </div>
              <ClipboardListIcon className="text-yellow-400 h-20 w-20" />
            </div>
            {/* Blue Card */}
            <div className="flex items-center justify-between px-4 py-2 lg:col-span-2 h-32  bg-blue-700 text-white shadow-md rounded-xl ">
              <div>
                <p className="text-blue-200">Work</p>
                <h4 className="text-7xl">23</h4>
              </div>
              <PresentationChartLineIcon className="text-green-400 h-20 w-20" />
            </div>
            {/* Blue Card */}
            <div className="flex items-center justify-between px-4 py-2 lg:col-span-2 h-32  bg-blue-700 text-white shadow-md rounded-xl ">
              <div>
                <p className="text-blue-200">Lag</p>
                <h4 className="text-7xl">3</h4>
              </div>
              <ThumbDownIcon className="text-pink-400 h-20 w-20" />
            </div>
            <div className="px-4 py-2 col-span-2 lg:col-span-4 row-span-2  bg-white shadow-md rounded-xl ">
              <DoughnutChart />
            </div>
            <div className="px-4 py-2 lg:col-span-8 col-span-2 bg-white shadow-md rounded-xl ">
              <LineChart />
            </div>
            <div className="px-4 py-2 lg:col-span-12 col-span-2 bg-white shadow-md rounded-xl ">
              <Table />
            </div>{" "}
          </div>
        </div>
      </main>

      {/* <footer className="flex h-14 w-full items-center justify-center border-t text-sm">
        Powered by @me
      </footer> */}
    </div>
  );
};

export default Home;
