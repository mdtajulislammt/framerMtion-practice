"use client"
import { motion } from "framer-motion"
const Box4 = () => {

     return (
          <div className="">
              <motion.div

               drag
               dragConstraints={{
                    right:20,
                    left:-20,
                    top:2,
                    bottom:2
               }}
              whileHover={{
               scale:1.1
              }}
              whileTap={{
               scale:0.9
              }}


              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 4 <span className="uppercase text-black">drag</span></h2>
              </motion.div>
          </div>
     );
};

export default Box4;