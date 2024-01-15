"use client"
import { motion } from "framer-motion"

const Box3 = () => {

     return (
          <div className="">
              <motion.div

               drag='y'
              whileHover={{
               scale:1.1
              }}
              whileTap={{
               scale:0.9
              }}


              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 3 <span className="uppercase text-black">drag y</span></h2>
              </motion.div>
          </div>
     );
};

export default Box3;