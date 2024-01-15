"use client"
import { motion,useAnimation } from "framer-motion"

const Box13 = () => {

     const control =  useAnimation()
     return (
          <div className=" col-span-4">
               <div className=" grid grid-cols-5 gap-2 mb-4">
               <button onClick={()=>{
                    control.start({
                         x:1080,
                         transition:{ duration:2}
                    })
               }} className=" bg-blue-600 text-white font-bold p-2 rounded">Right</button>
               <button onClick={()=>{
                    control.start({
                         x:0,
                         transition:{ duration:2}
                    })
               }} className=" bg-blue-600 text-white font-bold p-2 rounded">Left</button>
               <button
               onClick={()=>{
                    control.start({
                         borderRadius:"50%",
                         transition:{ duration:1}
                    })
               }} className=" bg-blue-600 text-white font-bold p-2 rounded">Circle</button>
               <button
               onClick={()=>{
                    control.start({
                         borderRadius:"0%",
                         transition:{ duration:1}
                    })
               }}
               className=" bg-blue-600 text-white font-bold p-2 rounded">Square</button>
               <button
               onClick={()=>{
                    control.stop()
               }}
               className=" bg-blue-600 text-white font-bold p-2 rounded">Stop</button>
               </div>
              <motion.div
               
               animate={control}
              className="bg-red-500 w-40 h-40 cursor-pointer  text-white font-bold text-center ">
               <h2 className="pt-14">BOX 13 <span className="uppercase text-black">refresh</span></h2>
              </motion.div>
          </div>
     );
};

export default Box13;