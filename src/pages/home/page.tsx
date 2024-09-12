import AboutBrief from "@/components/about-brief/aboutBrief";
import Cover from "@/components/cover/cover";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Cover />
      <div> 
        <AboutBrief />
      </div>
    </div>
  );
};

export default HomePage;
