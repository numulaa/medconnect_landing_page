import { FiBarChart2, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Smart Chatbot Integration",
    description:
      "Chat with our chatbot to open a new case and get notified when receiving responses",
    bullets: [
      {
        title: "Threaded Case Conversations",
        description:
          "Each request becomes its own thread, with replies stored chronologically.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Unified Platform",
        description:
          "One hub for verified doctors across specialities and regions.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Smart Filters",
        description:
          "Sort requests by specialty, urgency, number of replies, or time.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Auto-Close Threads",
        description:
          "Threads close after inactivity to reduce noise and bloat.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/phone-mockup.png",
  },
];
