import Image from "next/image";

function UserCard() {
  return (
    <div className="flex h-[100vh-1rem] w-full flex-shrink-0 flex-col items-center overflow-hidden bg-white px-4 py-4 my-4 rounded-md">
      <div className="relative mb-4 h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
        <img
          className="h-full w-full object-cover"
          src="https://randomuser.me/api/portraits/men/17.jpg"
          alt=""
        />
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-cyan-400"></div>
      </div>
      <h4 className="text-xl font-bold">Raja M. Zulfakar</h4>
      <p className="text-sm text-slate-400">raja@gmail.com</p>
      <p className="my-4 mb-8 rounded-md bg-cyan-200 px-1 py-1 text-sm text-cyan-400">
        JF Perencana
      </p>
      <div className="relative flex h-1 w-full flex-shrink-0 items-center justify-start rounded-full bg-slate-200">
        <p
          className="absolute -top-7 text-sm text-slate-400"
          style={{ left: "calc(83%-0.875rem)" }}
        >
          83%
        </p>
        <div
          className="absolute h-1 rounded-full bg-cyan-400"
          style={{ width: "83%" }}
        ></div>
        <div
          className="absolute h-4 w-4 rounded-full border-2 border-cyan-400 bg-cyan-50"
          style={{ left: "calc(83% - 0.5rem)" }}
        ></div>
      </div>
      <div className="my-4 mb-8 flex justify-center text-center">
        <h4 className="w-24 text-lg font-semibold">
          24 <br />
          <span className="text-sm font-normal text-slate-400">Tugas</span>
        </h4>
        <h4 className="w-24 border-x text-lg font-semibold">
          20 <br />
          <span className="text-sm font-normal text-slate-400">Selesai</span>
        </h4>
        <h4 className="w-24 text-lg font-semibold">
          4 <br />
          <span className="text-sm font-normal text-slate-400">Belum</span>
        </h4>
      </div>
      {/* <!-- Activity Feed --> */}
      <div className=" overflow-y-scroll dark:bg-slate-800 dark:text-white">
        <div className="flex mb-4 items-center justify-between">
          <h1 className="font-bold uppercase text-slate-700 dark:text-slate-50">
            Activity Feed
          </h1>
          <div className="flex items-center space-x-1">
            <p className="text-xs text-blue-500">Live</p>
            <div className="flex h-5 w-8 items-center justify-end rounded-full bg-blue-500">
              <div className="h-4 w-4 rounded-full bg-slate-50 ring-1"></div>
            </div>
          </div>
        </div>
        <div className="overflow-scroll h-full">
          {/* <!-- FEED One --> */}
          <div className="flex py-4 items-start space-x-2 rounded-md text-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 flex-shrink-0 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="dark:text-slate-300">
              <div className="mb-1 flex items-start">
                <img
                  className="h-10 w-10 rounded-md object-cover"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <p className="font-bold">Diah S. Sos</p>
                  <p className="text-sm">
                    in{" "}
                    <a className="text-blue-500" href="#">
                      Perencanaan 2023
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold">
                Menyelesaikan pekerjaan{" "}
                <a className="font-normal text-slate-500" href="#">
                  mengumpulkan rencana kerja Perangkat Daerah 2023
                </a>
              </p>
            </div>
            <p className="text-sm text-slate-500">10:10</p>
          </div>
          {/* <!-- FEED Two --> */}
          <div className="flex items-start space-x-2 rounded-md py-4 text-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 flex-shrink-0 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <div className="dark:text-slate-300">
              <div className="mb-1 flex items-start">
                <img
                  className="h-10 w-10 rounded-md object-cover"
                  src="https://randomuser.me/api/portraits/men/27.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <p className="font-bold">Achmad</p>
                  <p className="text-sm">
                    in{" "}
                    <a className="text-blue-500" href="#">
                      Perumusan Kebijakan DAK
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold">
                Mengomentari pekerjaan{" "}
                <a className="font-normal text-slate-500" href="#">
                  mengumpulkan bahan DAK 2023
                </a>
              </p>
            </div>
            <p className="text-sm text-slate-500">09:40</p>
          </div>
          {/* <!-- FEED Three --> */}
          <div className="flex items-start space-x-2 rounded-md py-4 text-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 flex-shrink-0 text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <div className="dark:text-slate-300">
              <div className="mb-1 flex items-start">
                <img
                  className="h-10 w-10 rounded-md object-cover"
                  src="https://randomuser.me/api/portraits/women/97.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <p className="font-bold">Puan Maharani</p>
                  <p className="text-sm">
                    in{" "}
                    <a className="text-blue-500" href="#">
                      Penyelesaian dana kelurahan
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold">
                Pekerjaan melewati batas waktu{" "}
                <a className="font-normal text-slate-500" href="#">
                  mengumpulkan bahan kebijakan dana kelurahan dan desa
                </a>
              </p>
            </div>
            <p className="text-sm text-slate-500">09:20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
