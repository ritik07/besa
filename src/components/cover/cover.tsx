import React from "react";
import Ripple from "../magicui/ripple";
import TextRevealByWord from "../magicui/text-reveal";

const Cover = () => {
  return (
    <div>
      <div className="relative z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-black dark:bg-black">
        <div className="z-10">
          <TextRevealByWord
            className="text-white/20 dark:text-white/50"
            text="Illuminate Your Brand. Unveil Your Potential. Capture Attention—Scroll to Bring It All to Light."
          />
        </div>
        <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
          <Ripple mainCircleSize={200} />
        </div>
      </div>
    </div>
  );
};

export default Cover;
