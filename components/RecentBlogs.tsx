"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Link from "next/link";

const RecentBlogs = () => {
  return (
    <section className="w-full py-20">
        <h1 className="heading">
            Recent <span className="text-purple"> Blogs</span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-14">
        <Link href="https://my-langgraph-journey.hashnode.dev/graphs-over-chains-my-first-steps-with-langgraph-part-1" className="block w-full max-w-sm">
          <Card title="Graphs over Chains" icon={<AceternityIcon order="Blog 1"/>} description="Explored the limitations of chain-based orchestration in LangChain and transitioned to LangGraph to build more modular, stateful AI workflows.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
          {/*<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />*/}
          </Card>
        </Link>
        <Link href="https://my-langgraph-journey.hashnode.dev/how-langgraph-transformed-my-coding-journey-from-hello-world-to-ai-assistants" className="block w-full max-w-sm">
        <Card title="Transformation with LangGraph" icon={<AceternityIcon order="Blog 2"/>} description="Documented early experiments showing how graph-based execution offers better control and scalability for real-world LLM applications.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black-100"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/*<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />*/}
        </Card>
        </Link>
        <Link href="https://machine-learning-for-beginners.hashnode.dev/hands-on-machine-learning-a-beginners-guide-20252026" className="block w-full max-w-sm">
        <Card title="Hands on Machine Learning" icon={<AceternityIcon order="Blog 3"/>} description="Introduced core machine learning concepts with hands-on examples, aiming to demystify key algorithms, workflows, and tools for beginners.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
        </Link>
      </div>
    </ section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border lg:h-[35rem] border-black/[0.2] group/canvas-card flex items-center justify-center rounded-3xl dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center absolute top-[50%] bottom-[50%] group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div className="">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-xl font-bold text-white backdrop-blur-3xl">
        {order}
      </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default RecentBlogs;