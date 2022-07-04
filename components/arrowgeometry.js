import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from '@react-three/fiber'

export default function ArrowGeometry(props) {

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.y += 0.01))
    console.log(mesh.current)

    return (
        
        <mesh
            {...props}
            ref={mesh}
            scale={[1,2,1]}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={'cream'} />
        </mesh>
        
        
    )

}