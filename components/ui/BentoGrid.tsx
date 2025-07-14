"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BGgradient";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
//import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "MongoDB",
    "ExpressJs",
    "ReactJs",
    "NodeJs",
  ];
  const rightLists = [
    "PyTorch",
    "Keras",
    "LangChain",
    "LangGraph",
    "HuggingFace",
    "Docker",
    "N8N",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "rishrash2712@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-zblack dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        // Add explicit height constraints for items 5 and 6
        ...(id === 5 && {
          maxHeight: "300px",
          minHeight: "250px",
        }),
        ...(id === 6 && {
          maxHeight: "300px",
          minHeight: "250px",
        }),
      }}
    >
      {/* add img divs */}
      <div
        className={`${id === 6 && "flex justify-center"} ${
          id === 5 ? "h-full max-h-[250px]" : "h-full"
        }`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80 max-h-[200px] overflow-hidden" : ""
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                "object-cover object-center w-full h-full",
                id === 5 && "max-h-[200px]"
              )}
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <div className="absolute inset-0 max-h-[250px] overflow-hidden">
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-5xl"></div>
            </BackgroundGradientAnimation>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            (id === 5 || id === 6) && "max-h-[250px] overflow-hidden"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-screen md:text-xs lg:text-sm text-xs text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-sm lg:text-xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {/*{id === 2 && <GlobeDemo />}*/}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* Left column - scrolling up */}
              <div className="h-48 lg:h-64 overflow-hidden">
                <div className="animate-scroll-up flex flex-col gap-3 lg:gap-8">
                  {/* Triple the items for seamless loop */}
                  {[...leftLists, ...leftLists, ...leftLists].map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-sm opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E] flex-shrink-0 min-h-fit"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column - scrolling down */}
              <div className="h-48 lg:h-64 overflow-hidden">
                <div className="animate-scroll-down flex flex-col gap-3 lg:gap-6">
                  {/* Triple the items for seamless loop */}
                  {[...rightLists, ...rightLists, ...rightLists].map(
                    (item, i) => (
                      <span
                        key={i}
                        className="lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-sm opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E] flex-shrink-0 min-h-fit"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className=" relative h-full">
              <div className="flex flex-col space-y-5">
                {/* Rotating facts about you */}
                <div className="animate-fade-cycle">
                  <div className="text-xl lg:text-lg font-bold text-white/80">
                    "I love building user experiences that make people's lives
                    easier"
                  </div>
                </div>

                {/* Your current status/mood */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white/60">
                    Currently exploring AI & Web3
                  </span>
                </div>

                {/* Fun stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold">1+</div>
                    <div className="text-white/60">Years Coding</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold">9+</div>
                    <div className="text-white/60">Projects Built</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
