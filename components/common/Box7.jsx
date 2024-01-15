"use client"
import { motion } from "framer-motion"

const Box7 = () => {

     return (
          <div className="">
              <motion.div

              
               animate={{x:-0}}
               
               initial={{x:1000}}
              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 7 <span className="uppercase text-black">refresh</span></h2>
              </motion.div>
          </div>
     );
};

export default Box7;