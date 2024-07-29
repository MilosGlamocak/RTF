import React from 'react'
import '../styles/RtfHead.css'
import {Canvas} from '@react-three/fiber';
import  {Model} from '../assets/Glava2';
import '../styles/glitch.css'
import {Glitch, EffectComposer} from '@react-three/postprocessing';



function RtfHead() {

  return (
    <div className='rtfHeadCont'>
        <div className='rtfHead'>
            <Canvas>
                <directionalLight intensity={0.2} color={"cyan"} position={[700, -850, 1000]}/>
                <ambientLight intensity={0.05} color={"purple"}/>
                <Model scale={1.5}/>
                <EffectComposer>
                <Glitch
                    delay={[0.7, 3]} // min and max glitch delay
                    duration={[0.1, 0.2]} // min and max glitch duration
                    strength={1} // min and max glitch strength
                    ratio={0.1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                    dtSize={30}
                  />
              </EffectComposer>
            </Canvas>
        </div>  
    </div>
    
  )
}

export default RtfHead