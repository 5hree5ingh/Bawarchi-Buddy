import React from "react";
import Heading from "../Heading/Heading";
import { SiCrowdsource } from "react-icons/si";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbToolsKitchen } from "react-icons/tb";
import { MdOutlineCleanHands } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    logo: <SiCrowdsource className="w-12 h-12" />,
    color: "from-orange-400 to-red-500",
    shadowColor: "shadow-orange-200",
    para: "We begin our process by carefully selecting only the highest quality spices from trusted farms and suppliers, ensuring purity and freshness in every grain.",
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Cleaning",
    logo: <MdOutlineCleanHands className="w-12 h-12" />,
    color: "from-orange-400 to-red-500",
    shadowColor: "shadow-orange-200",
    para: "Every spice goes through rigorous cleaning and sorting procedures to remove impurities, so what reaches your kitchen is 100% safe and premium.",
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Grinding",
    logo: <TbToolsKitchen className="w-12 h-12" />,
    color: "from-orange-400 to-red-500",
    shadowColor: "shadow-orange-200",
    para: "We use traditional grinding methods combined with modern technology to retain natural aroma, flavor, and medicinal values — all under strict hygiene standards.",
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Packaging",
    logo: <LuPackageCheck className="w-12 h-12" />,
    color: "from-orange-400 to-red-500",
    shadowColor: "shadow-orange-200",
    para: "Once packed, our spices are sealed with freshness and delivered to your doorstep, ready to add magic to your everyday meals.",
  },
];

const Process = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative background blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <Heading highlight="Our" content="Process" />
          <p className="mt-4 text-zinc-500 text-lg max-w-2xl mx-auto">
            Experience the journey of our premium spices, from trusted farms directly to your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-default"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 text-6xl text-slate-100 opacity-80 group-hover:opacity-100 group-hover:text-orange-100 transition-colors duration-500 drop-shadow-md z-0">
                {step.number}
              </div>

              {/* Icon Container with Gradient */}
              <div className={`relative z-10 w-24 h-24 mb-8 rounded-2xl bg-gradient-to-br ${step.color} ${step.shadowColor} shadow-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {step.logo}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  {step.para}
                </p>
              </div>

              {/* Connector dot for desktop (only visible in row layout) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[4.5rem] -right-4 w-8 h-[2px] bg-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
