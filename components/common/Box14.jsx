
"use client"
import { motion } from "framer-motion"

const Box14 = () => {

     return (
          <div className="">
              <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                 duration: 0.8,
                 delay: 0.5,
                 ease: [0, 0.71, 0.2, 1.01],
               }}
               
              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 14 <span className="uppercase text-black">refresh</span></h2>
              </motion.div>
          </div>
     );
};

export default Box14;