import {
  CheckCircleIcon,
  EmojiSadIcon,
  LightningBoltIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import React from "react";

function Overview() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 w-full justify-between  place-content-between px-4 pt-4">
      {/* <!-- Progress Card --> */}
      <div className="flex items-center justify-center space-x-3 rounded-lg bg-slate-50 py-3 text-slate-600 dark:bg-slate-900">
        <SparklesIcon className="h-12 w-12 flex-shrink-0 text-cyan-400" />
        <h4 className="text-3xl font-bold tracking-tighter dark:text-slate-400">
          24 <span className="text-lg font-light text-slate-400">Total</span>
        </h4>
      </div>
      <div className="flex items-center justify-center space-x-3 rounded-lg bg-slate-50 py-3 text-slate-600 dark:bg-slate-900">
        <CheckCircleIcon className="h-12 w-12 text-green-400" />
        <h4 className="text-3xl font-bold tracking-tighter dark:text-slate-400">
          20 <span className="text-lg font-light text-slate-400">Selesai</span>
        </h4>
      </div>
      <div className="flex items-center justify-center space-x-3 rounded-lg bg-slate-50 py-3 text-slate-600 dark:bg-slate-900">
        <LightningBoltIcon className="h-12 w-12 flex-shrink-0 text-yellow-400" />
        <h4 className="text-3xl font-bold tracking-tighter dark:text-slate-400">
          4{" "}
          <span className="text-lg font-light text-slate-400">Dikerjakan</span>
        </h4>
      </div>
      <div className="flex  items-center justify-center space-x-3 rounded-lg bg-slate-50 py-3 text-slate-600 dark:bg-slate-900">
        <EmojiSadIcon className="w-12 h-12 text-red-600" />
        <h4 className="text-3xl font-bold tracking-tighter dark:text-slate-400">
          3{" "}
          <span className="text-base font-light text-slate-400">Terlambat</span>
        </h4>
      </div>
    </div>
  );
}

export default Overview;
