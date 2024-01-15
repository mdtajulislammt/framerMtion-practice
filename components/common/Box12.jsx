"use client";
import { motion, useTransform, useViewportScroll } from "framer-motion";
const Box12 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="">
      <motion.div
      style={{
          scale:1
        }}
      className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
        <motion.div
        style={{
          scaleY: scrollYProgress
        }}
        className="w-full h-full bg-black"></motion.div>
      </motion.div>
    </div>
  );
};

export default Box12;
