import React from "react";
import Heading from "../Heading/Heading";
import { SiCrowdsource } from "react-icons/si";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { MdOutlineCleanHands } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";

const Process = () => {
  const RenderProcess = steps.map((step, index) => {
    return (
      <div key={index}>
        <div>
          <span>{step.number}</span>
        </div>
        <div>
          <div>
            <span>{step.logo}</span>
          </div>
          <div>
            <h4>{step.title}</h4>
            <p>{step.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1440px] mx-auto px-10 py-20">
      <div>
        {RenderProcess}
      </div>
    </section>
  );
};

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    logo: <SiCrowdsource />,
    para: "We begin our process by carefully selecting only the highest quality spices from trusted farms and suppliers, ensuring purity and freshness in every grain.",
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Cleaning",
    logo: <MdOutlineCleanHands />,
    para: "Every spice goes through rigorous cleaning and sorting procedures to remove impurities, so what reaches your kitchen is 100% safe and premium.",
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Grinding",
    logo: <TbToolsKitchen />,
    para: "We use traditional grinding methods combined with modern technology to retain natural aroma, flavor, and medicinal values — all under strict hygiene standards.",
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Packaging",
    logo: <LuPackageCheck />,
    para: "Once packed, our spices are sealed with freshness and delivered to your doorstep, ready to add magic to your everyday meals.",
  },
];

export default Process;
