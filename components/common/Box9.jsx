"use client"
import { motion } from "framer-motion"

const Box9 = () => {

     return (
          <div className="">
              <motion.div
               animate={{
                    scale: [3,2,1],
               }}
               transition={{
                    duration: 0.5
               }}
               
              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 9 <span className="uppercase text-black">refresh</span></h2>
              </motion.div>
          </div>
     );
};

export default Box9;