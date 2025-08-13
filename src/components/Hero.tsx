import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Github, Linkedin, Twitter } from 'lucide-react';

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      {/* Fallback 3D shape - a simple rotating box */}
      <mesh rotation={[0, Math.PI * 0.01, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#8B5CF6'} />
      </mesh>
      
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={1}
      />
      <Preload all />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='font-bold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'
          >
            Hi, I'm <span className='text-accent'>NOOR ALI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-secondary text-[16px] sm:text-[18px] lg:text-[24px] lg:leading-[38px] mt-2 max-w-2xl'
          >
          Full stack Developer & BCA Student <br className='sm:block hidden' />
            Building beautiful, interactive experiences for the web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <a 
              href="#projects" 
              className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1kDVl_hGUBBNUui0SZMowuQgXAqH2W78s/view?usp=drive_link" 
              className="border border-accent text-accent hover:bg-accent/10 font-medium py-3 px-6 rounded-md transition-colors"
            >
            RESUME
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-6"
          >
            <a href="https://github.com/noorali78" className="text-white hover:text-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/noor-ali-7aa206274" className="text-white hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/NoorAli31198016" className="text-white hover:text-accent transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

   
      <div className='absolute right-0 bottom-0 w-full h-5/6 xl:h-full max-w-[600px]'>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;