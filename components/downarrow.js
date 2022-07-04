import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import ArrowGeometry from './arrowgeometry'

export default function DownArrow(props) {

        return (
            <div className="animate-bounce pt-5">
            <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ArrowGeometry position={[0, 0, 0]} />
          </Canvas>
          </div>
    )

}