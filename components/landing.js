import { motion } from "framer-motion";
import Link from "next/link";
import SocialLinks from "./socials";
import {Snippet} from "@nextui-org/snippet";


export default function Landing() {
  // 50,100,200,300,400,500..,900
  return (
    <div
      id="home"
      className="bg-black h-screen w-full items-center flex flex-col justify-center"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-center text-7xl font-bold italic text-indigo-500"
      >
        Hey! I&apos;m
      </motion.h2>
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-center text-8xl font-bold text-white"
      >
        Jordan Wells
      </motion.h1>
      <SocialLinks />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 2, 1], scale: [1, 1.05, 1] }}
        transition={{ duration: 1, times: [0.3, 0.4, 1.0] }}
        className="text-center text-xl hover:cursor-pointer hover:text-stone-100 text-stone-300 pt-5 italic"
      >
      
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>
      Want to chat? <Snippet size="lg" className='text-white' variant="bordered" hideSymbol>jordantwells@gmail.com</Snippet>
      </div>
      </motion.h1>
    </div>
  );
}
