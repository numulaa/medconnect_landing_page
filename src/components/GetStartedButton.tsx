import React from "react";
import clsx from "clsx";

const GetStartedButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href="https://spiffy-llama-4c1046.netlify.app/">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
          {
            "text-white bg-foreground": dark,
            "text-foreground bg-white": !dark,
          }
        )}>
        <div>
          <div className="-mt-1 font-sans text-xl font-semibold">
            Get Started
          </div>
        </div>
      </button>
    </a>
  );
};

export default GetStartedButton;
