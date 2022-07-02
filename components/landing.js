import { useDrag } from "@use-gesture/react";
import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Landing() {
  const bgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({x:0,y:0})
  

  const [styles, api] = useSpring(() => ({ x: 0, y: 0, scale: 1, rotate: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0.5)" }))
  const bind = useDrag(({ down, offset: [ox, oy], velocity: [vx, vy], direction: [dx, dy] }) => {
    api.start({ x: ox, y: oy, scale: down ? 1.2 : 1, rotate: down ? (dy*vy + dx*vx)*10 : 0, boxShadow: down ? "0px 4px 7px rgba(100, 100, 100, 0.5)" : "0px 0px 0px rgba(0,0,0,0.5)" })
    setIsDragging(true)
    setVelocity({x:vx,y:vy})
    }, { bounds: bgRef }
  )




  return (
    <div ref={bgRef} className="bg-stone-900 h-screen w-full items-center border-b-2 flex flex-col justify-center">
      <animated.div {...bind()} style={styles} className="rounded-full w-10 h-10 bg-blue-100"></animated.div>
      <h2 className="text-center text-7xl font-bold italic text-blue-300">Hey! I&apos;m</h2>
      <h1 className="text-center text-8xl font-bold text-white">Jordan Wells</h1>
      <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce sticky mt-10 bottom-0 h-10 w-10 text-white z-50" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}
