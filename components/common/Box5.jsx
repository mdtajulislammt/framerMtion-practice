"use client"
import { motion } from "framer-motion"
const Box5 = () => {

     return (
          <div className="">
              <motion.div

               drag
               dragConstraints
              whileHover={{
               scale:1.1
              }}
              whileTap={{
               scale:0.9
              }}


              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 5 <span className="uppercase text-black">drag un</span></h2>
              </motion.div>
          </div>
     );
};

export default Box5;