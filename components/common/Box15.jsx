
"use client"
import { motion } from "framer-motion"

const Box15 = () => {

     return (
          <div className="">
              <motion.div
               whileHover={{ scale: [1, 1.5, 1.4] }}
               transition={{ duration: 0.5 }}
               
              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 15 <span className="uppercase text-black">Hover</span></h2>
              </motion.div>
          </div>
     );
};

export default Box15;