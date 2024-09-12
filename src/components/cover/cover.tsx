import React from "react";
import Ripple from "../magicui/ripple";
import TextRevealByWord from "../magicui/text-reveal";

const Cover = () => {
  return (
    <div>
      <div className="relative z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-black dark:bg-black">
        <div>
          <Ripple mainCircleSize={800} />
        </div>
        <TextRevealByWord
          className="text-white/20 dark:text-white/50"
          text="Illuminate Your Brand. Unveil Your Potential. Capture Attention—Scroll to Bring It All to Light."
        />
      </div>
    </div>
  );
};

export default Cover;
