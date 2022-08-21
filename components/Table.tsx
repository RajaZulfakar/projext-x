import {
  ClockIcon,
  MenuAlt1Icon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function Table() {
  return (
    <div>
      {/* <!-- Project Table  --> */}
      <div className="">
        {/* <!-- Search --> */}
        <div className=" flex">
          <div className="flex w-full items-center justify-between text-slate-300">
            <div className="flex h-8 w-3/4 items-center space-x-3 rounded-md bg-slate-100">
              <SearchIcon className="h-5 w-5" />
              <input
                className="w-3/4 bg-slate-100 outline-none placeholder:text-slate-300"
                type="text"
                placeholder="Search a project"
              />
            </div>
            <div>
              <MenuAlt1Icon
                className="h-6 w-6 cursor-pointer"
                onClick={() => alert("dodol garut")}
              />
            </div>
          </div>
        </div>
        {/* <!-- Table --> */}
        <div className="">
          <table className="w-full table-auto text-sm text-slate-400">
            <thead className="border-b shadow-md shadow-slate-200/70">
              <tr className="text-left">
                <th className="px-2 py-4 text-left">
                  <input type="checkbox" name="all" id="all" />
                </th>
                <th>Project name</th>
                <th>Project Lead</th>
                <th>Team</th>
                <th>Progress</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-4">
                  <input type="checkbox" name="all" id="all" />
                </td>
                <td>Monitoring dan Evaluasi</td>
                <td>Silvia W.</td>
                <td className="flex -space-x-1 pt-4">
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/31.jpg"
                    alt=""
                  />
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/31.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="relative flex h-1 w-[70%] rounded-full bg-slate-200">
                      <div className="absolute h-1 w-[74%] rounded-full bg-cyan-300"></div>
                    </div>
                    <p className="ml-1 text-xs">74%</p>
                  </div>
                </td>
                <td>
                  <div className="inline-flex items-center rounded-lg bg-pink-200 px-2 py-1 text-pink-400">
                    <ClockIcon className="w-4 h-4" />
                    <p className="text-xs">2 hari lagi</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-4">
                  <input type="checkbox" name="all" id="all" />
                </td>
                <td>Perencanaan 2023</td>
                <td>Sri Mulyani</td>
                <td className="flex -space-x-1 pt-4">
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/31.jpg"
                    alt=""
                  />
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/31.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="relative flex h-1 w-[70%] rounded-full bg-slate-200">
                      <div className="absolute h-1 w-[94%] rounded-full bg-cyan-300"></div>
                    </div>
                    <p className="ml-1 text-xs">94%</p>
                  </div>
                </td>
                <td>
                  <div className="inline-flex items-center rounded-lg bg-slate-200 px-2 py-1 text-slate-400">
                    <ClockIcon className="w-4 h-4" />
                    <p className="text-xs">20 hari lagi</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-4">
                  <input type="checkbox" name="all" id="all" />
                </td>
                <td>Evaluasi Dana Kelurahan</td>
                <td>Imansyah</td>
                <td className="flex -space-x-1 pt-4">
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                    alt=""
                  />
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="relative flex h-1 w-[70%] rounded-full bg-slate-200">
                      <div className="absolute h-1 w-[59%] rounded-full bg-yellow-300"></div>
                    </div>
                    <p className="ml-1 text-xs">59%</p>
                  </div>
                </td>
                <td>
                  <div className="inline-flex items-center rounded-lg bg-yellow-200 px-2 py-1 text-yellow-600">
                    <ClockIcon className="h-4 w-4" />
                    <p className="text-xs">1 hari lagi</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-2 py-4">
                  <input type="checkbox" name="all" id="all" />
                </td>
                <td>MOU dengan Universitas se Kepri</td>
                <td>Silvya</td>
                <td className="flex -space-x-1 pt-4">
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt=""
                  />
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="relative flex h-1 w-[70%] rounded-full bg-slate-200">
                      <div className="absolute h-1 w-[14%] rounded-full bg-pink-300"></div>
                    </div>
                    <p className="ml-1 text-xs">14%</p>
                  </div>
                </td>
                <td>
                  <div className="inline-flex items-center rounded-lg bg-pink-200 px-2 py-1 text-pink-600">
                    <ClockIcon className="h-4 w-4" />
                    <p className="text-xs">12 hari lagi</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
