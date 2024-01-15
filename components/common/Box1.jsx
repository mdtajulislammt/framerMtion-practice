"use client"
import { motion } from "framer-motion"
import { useState } from "react";
const Box1 = () => {
     const [isAnimating,setIsAnimating] = useState(false)
     return (
          <div className="">
              <motion.div
              animate= {{
               x: isAnimating ? 1000 : 0,
               opacity:isAnimating ? 0.5 : 1,
               rotate: isAnimating ? 360 : 0

              }}
          //     initial={{
          //      opacity:0.5
          //     }}
              transition={{
               type:"spring",
               stiffness:40,
               damping:7,
              }}

              onClick={()=>setIsAnimating(!isAnimating)}

              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 1 <span className="uppercase text-black">click 1</span></h2>
              </motion.div>
          </div>
     );
};

export default Box1;