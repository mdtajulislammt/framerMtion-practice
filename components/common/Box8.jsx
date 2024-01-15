"use client";
import { motion } from "framer-motion";

const Box8 = () => {
  const boxVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
     x: 0,
     transition: {
     delay:0.5,
     when:'beforeChildren',
     staggerChildren: 0.2
      },
    },
  };

  const listVariants = {
     hidden: {
          pageYOffset: -10,
          opacity:0
        },
        visible: {
          y: 0,
          opacity:1,
          delay:1,
          
        },
  }

  return (
    <div className="">
      <motion.div
        variants={boxVariants}
        animate="visible"
        initial="hidden"
        className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center "
      >
        <div className=" flex flex-col gap-2 justify-center pl-16 py-7 ">
          {[1, 2,3].map((box,i) => {
            return (
              <motion.li
                key={i}
                variants={listVariants}
                className="w-7 h-7 bg-white"
              ></motion.li>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Box8;
