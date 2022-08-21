import {
  AdjustmentsIcon,
  CalendarIcon,
  ChatAlt2Icon,
  ClockIcon,
  CubeTransparentIcon,
  DotsHorizontalIcon,
  HomeIcon,
  UsersIcon,
  ViewGridIcon,
  MenuAlt1Icon,
  BellIcon,
  ChipIcon,
  ViewGridAddIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {} from "@heroicons/react/solid";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-14 md:flex hidden flex-shrink-0 flex-col items-center justify-between bg-cyan-400 text-cyan-50 dark:bg-cyan-800">
      <ChipIcon className="mx-auto mt-2 h-9 w-9" />
      <div className="flex h-full flex-col items-center justify-center space-y-4">
        <HomeIcon className="h-6 w-6" />
        <ViewGridAddIcon className="h-6 w-6" />
        <CalendarIcon className="h-6 w-6" />
        <ChatAlt2Icon className="h-6 w-6" />
        <ClockIcon className="h-6 w-6" />
        <UserIcon className="h-6 w-6" />
        <AdjustmentsIcon className="h-6 w-6" />
      </div>
    </nav>
  );
}

export default Navbar;
