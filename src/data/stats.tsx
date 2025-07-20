import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "Doctors",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Doctors in Gaza lack timely access to specialist advice",
  },
  {
    title: "Support",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Limited peer support for urgent clinical queries",
  },
  {
    title: "Connection",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "No shortage of specialists worldwide, but connection is disjointed through isolated group chats",
  },
];
