"use client"
import { motion } from "framer-motion"

const Box10 = () => {

     return (
          <div className="">
              <motion.div
               animate={{
                    scale: [1,1.4,1.4,1,1],
                    borderRadius:["20%","20%","50%","50%"]
               }}
               transition={{
                    duration: 2
               }}
               
              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 10 <span className="uppercase text-black">refresh</span></h2>
              </motion.div>
          </div>
     );
};

export default Box10;