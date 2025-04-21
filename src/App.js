import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { SkillBox } from "./components/SkillBox";
import {hover, motion} from 'motion/react';
import { animate, distance, transform } from "framer-motion";
import {ReactComponent as AppleVsSamsung} from "./svg/AppleVsSamsung.svg";
import {ReactComponent as SchoolLogo} from "./svg/school.svg";
import {ReactComponent as LinkSvg} from "./svg/link.svg";

import invoicePic from './projectPics/invoiceApp.jpg';
import schoolPic from './projectPics/schoolpic1.JPG';
import AppleVsSamsungPic from './projectPics/appleVsSamsungpic1.jpg';
import karaokemepic from './projectPics/karaokemepic.JPG';
import micLogo from './svg/mic.png';


function App() {
  const parallaxRefs = React.useRef({});
  const [techFilter, setTechFilter] = useState();

  const [languageAnimation, setLanguageAnimation] = useState();
  const [webAnimation, setWebAnimation] = useState();
  const [backendAnimation, setBackendAnimation] = useState();
  const [toolAnimation, setToolAnimation] = useState();

  const projectBoxRefs = useRef([]);
  const projectBoxContainer = useRef(null);
  const projectContainerScales = useRef([1,1,1,1])

  const [_, setValue] = useState(0);

  const forceUpdate = () => {
    setValue((prev) => prev + 1);
  }

  const DistanceFromCenter = () => {
    const scales = [];
    for (const element of projectBoxRefs.current) {
      if (!element) continue;
      const viewWidth = window.innerWidth;
      const image = element.querySelector("#preview");
      
      const rect = element.getBoundingClientRect();
      const center = window.innerWidth / 2;
      const elementCenter = rect.left + rect.width / 2;
      const distance = center - elementCenter;
      
      const normalizedDistance = distance / center; 
      const scale = 1 - 0.6 * Math.pow(Math.abs(normalizedDistance), 1.3);

      const rotationAngle = normalizedDistance * 10;
      console.log("rotationAngle: " + rotationAngle)
      console.log(image)

      image.style.transform =`perspective(100px) rotate3D(0, 1, 0, ${rotationAngle}deg);` 
      
      // Clamp between min and max scale
      const finalScale = Math.max(scale, 0.4);
      scales.push(finalScale);
  
      animate(element, { 
        scale: finalScale 
      }, {
        delay: 0,
        duration: 0,
        ease: "easeOut"
      });

      animate(image, {
        transform: `perspective(100px) rotate3D(0, 1, 0, ${rotationAngle}deg)`
      }, {
        delay: 0,
        duration: 0,
        ease: "easeOut"
      })
    }
  
    projectContainerScales.current = scales;
  };

  const onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/andrew-kim-19171a1b7/");
  };

  const onGithubClick = () => {
    window.open("https://github.com/AndrewKim09");
  };
  useEffect(() => {
    window.onload = function () {
      parallaxRefs.current["Parallax"].container.current.style.overflow =
        "hidden";

      setTimeout(() => {
        parallaxRefs.current["Parallax"].container.current.style.overflow =
          "hidden scroll";
      }, 1200);
    };
  }, []);

  const onFilterAnimation = {scale: 1, opacity: 1};
  const offFilterAnimation = {scale: 0, opacity: 0};

  const onTechClick = (element, section) => {
    if(techFilter) techFilter.classList.toggle("text-purple-500");
    element.target.classList.toggle("text-purple-500");
    setTechFilter(element.target);

    const skillsBox = document.getElementById("skillsBox");

    if(section === "All") {
       setLanguageAnimation(onFilterAnimation);
        setWebAnimation(onFilterAnimation);
        setBackendAnimation(onFilterAnimation);
        setToolAnimation(onFilterAnimation);
      return;
    }

    switch (section) {
      case "language":
        setLanguageAnimation(onFilterAnimation);
        setWebAnimation(offFilterAnimation);
        setBackendAnimation(offFilterAnimation);
        setToolAnimation(offFilterAnimation);
        break;
      case "web":
        setLanguageAnimation(offFilterAnimation);
        setWebAnimation(onFilterAnimation);
        setBackendAnimation(offFilterAnimation);
        setToolAnimation(offFilterAnimation);
        break;
      case "backend":
        setLanguageAnimation(offFilterAnimation);
        setWebAnimation(offFilterAnimation);
        setBackendAnimation(onFilterAnimation);
        setToolAnimation(offFilterAnimation);
        break;
      case "tool":
        setLanguageAnimation(offFilterAnimation);
        setWebAnimation(offFilterAnimation);
        setBackendAnimation(offFilterAnimation);
        setToolAnimation(onFilterAnimation);
        break;
      default:
        break;
    }
  };

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust delay between children animations
        duration: 0.5,
      },
    },
  };

  const getVariant = (index) => {
    // Fallback to 1 if scale not calculated yet
    const scale = projectContainerScales.current[index] ?? 1;
    console.log("scale " + index + ": " + scale)
    
    return {
      hidden: { 
        opacity: 0, 
        y: 50,
        scale: scale
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: scale
      }
    };
  };

  const handleAnimation = (element, index) => {
    if (element) {
      const handleMouseEnter = () => {
        animate(element, { scale: (1.1 * projectContainerScales.current[index]), boxShadow: "0px 0px 10px 0px #210c2e"});
        element.style.zIndex = 200;
      };

      const handleMouseLeave = () => {
        animate(element, { scale: (projectContainerScales.current[index]), boxShadow: "0px 0px 0px 0px #210c2e"});
        element.style.zIndex = 0;
      };
      element.style.transition = "0";
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(projectBoxContainer.current) {
        window.addEventListener("resize", DistanceFromCenter);
        projectBoxContainer.current.addEventListener("scroll", DistanceFromCenter);
      }
    }, 500);
  
    return () => {
      clearTimeout(timer);
      if(projectBoxContainer.current) {
        window.removeEventListener("resize", DistanceFromCenter);
        projectBoxContainer.current.removeEventListener("scroll", DistanceFromCenter);
      }
    }
  }, []);

  useEffect(() => {
    // Wait for refs to be set
    const timer = setTimeout(() => {
      DistanceFromCenter();
      forceUpdate()
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  

  return (
    <div className="App">
      <Parallax
        pages={2.93}
        ref={(ref) => (parallaxRefs.current["Parallax"] = ref)}
        className="overflow-hidden"
      >
        {/* <ParallaxLayer sticky={{ start: 0, end: 6 }}></ParallaxLayer> */}
        <ParallaxLayer speed={1} factor={0.75} className="bg-white">
          <div className="overflow-hidden openingAnimationBox">
            <div className="leftAnimationBox absolute top-0 left-0 bottom-0 w-0 h-[100vh] bg-black">
              <div className="absolute top-0 right-0 w-0 h-0 bg-blue-900" />
            </div>
            <div className="rightAnimationBox absolute top-0 right-0 bottom-0 w-0 h-[100vh] bg-black ">
              <div className="absolute top-0 left-0 w-0 h-0 bg-blue-900" />
            </div>
          </div>

          <div className="px-[40px] contentBox">
            <div className="flex items-center justify-center sm:pt-10 md:pt-20 sm:flex-col md:flex-row">
              <div className="photo h-[300px] w-[300px] md:h-[500px] md:w-[500px] border-solid border-2 border-black" />
              <div className="ml-2 ">
                <h1 className="text-4xl font-bold sm:mt-10 md:mt-0 gradient-text">
                  My name is Andrew Kim
                </h1>
                <p className="mt-4 text-xl">
                  I am a <b>Full-Stack Developer</b> specializing in React, Typescript, And Java
                </p>
                <b className="block mt-10 gradient-text">I have recently:</b>
                <p className="mt-4 text-lg md:pr-[50px] lg:pr-[200px] xl:pr-[400px]">
                  devleoped a <b>full stack website</b> that utilizes <b>deep learning models</b> to generate Karaoke tracks from mp3 files. It also 
                  <b>generates mp4 files</b> using ffmpeg and allows users to download the files. This website uses <b>AWS amplify, Typescript, React, JoyUI</b> for the frontend and <b>Python, Flask, ngrok,</b> for the backend.

                  <br/>
                  
                </p>
                <ul className="ml-10">
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:hidden md:visible flex flex-col w-[120px] arrowBox items-center absolute bottom-0 left-0">
            <b className="text-sm">for more info :D</b>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="w-10 h-10 aspect-square"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          factor={0.75}
          offset={0.99}
          speed={1.5}
          className="flex flex-col bg-black skillsBoxContainer"
        >
          <div className="items-center pt-2 text-4xl font-bold text-center text-white bg-transparent">
            <span className="gradient-text2">Technologies</span> and{" "}
            <span className="gradient-text2">Tools</span> I use
          </div>
          <div className = 'flex flex-col items-center h-[100%] pt-4'>

            <div className="lg:w-[40%] w-[80%] md:w-[60%] flex items-center justify-between top-2 ">
              <button className="text-lg text-white border-b border-white border-slid hover:text-purple-400" onClick={(e) => {onTechClick(e, "All")}}>All</button>
              <button className="text-lg text-white border-b border-white border-slid hover:text-purple-400" onClick={(e) => {onTechClick(e, "language")}}>languages</button>
              <button className="text-lg text-white border-b border-white border-slid hover:text-purple-400" onClick={(e) => {onTechClick(e, "web")}}>Web Development</button>
              <button className="text-lg text-white border-b border-white border-slid hover:text-purple-400" onClick={(e) => {onTechClick(e, "backend")}}>Backend Development</button>
              <button className="text-lg text-white border-b border-white border-slid hover:text-purple-400" onClick={(e) => {onTechClick(e, "tool")}}>Tools</button>
            </div>

              <div className="relative h-[100%] w-[100%] pt-10 pb-10 overflow-scroll overflow-x-hidden text-white mt-[100px]" id="skillsBox">
              {/* <div className="absolute flex flex-col top-12 md:top-5 right-5">
                  <div className=" bg-white h-5 w-[60px] rounded-full flex items-center px-0.5 cursor-pointer skillsTab relative">
                    <div className="absolute w-4 h-4 ml-0 bg-black rounded-full left-1 skillsBall "/>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xs font-bold text-white">tech</div>
                    <div className="text-xs font-bold text-white">soft</div>

                  </div>
                </div> */}
              <>
                {/* Programming Languages */}
                <motion.span className="absolute flex w-auto gap-4 left-[50%] translate-x-[-50%] top-[30px]" id="language"
                  initial={{top: "-20px", opacity: 0}} 
                  whileInView={{top: "30px", opacity: 1}}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                >
                  <SkillBox
                    title={"Java"}
                    image={"javaLogo"}
                    animate={languageAnimation}
                  />
                  <SkillBox
                    title={"JavaScript"}
                    image={"JavaScript"}
                    animate={languageAnimation}
                  />
                  <SkillBox 
                    title="C#" 
                    image="CSharp" 
                    animate={languageAnimation}
                  />
                  <SkillBox
                    title={"Python"}
                    image={"python"}
                    animate={languageAnimation}
                  />
                </motion.span>

                {/* Web Development */}
                <motion.span className="absolute flex gap-2 left-[50%] translate-x-[-50%] top-[120px]" 
                  id="web"
                  initial={{top: "70px", opacity: 0}} 
                  whileInView={{top: "120px", opacity: 1}}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                >
                  <SkillBox
                    title={"HTML"}
                    image={"HTML"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    title={"CSS"}
                    image={"CSS"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    title={"TailwindCSS"}
                    image={"Tailwind"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    title={"React"}
                    image={"react"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    title={"jQuery"}
                    image={"jquery"}
                    animate={webAnimation}
                  />
                </motion.span>

                {/* Backend Development */}
                <motion.span className="absolute flex gap-2 left-[50%] translate-x-[-50%] top-[220px]" 
                  id="backend"
                  initial={{top: "170px", opacity: 0}} 
                  whileInView={{top: "220px", opacity: 1}}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                >
                  <SkillBox
                    title={"SpringBoot"}
                    image={"springBoot"}
                    animate={backendAnimation}
                  />
                  <SkillBox
                    title={"Node.js"}
                    image={"Node"}
                    animate={backendAnimation}
                  />
                  <SkillBox
                    title={"MongoDB"}
                    image={"mongodb"}
                    animate={backendAnimation}
                  />
                  <SkillBox 
                    title="MySQL" 
                    image="MySQL" 
                    animate={backendAnimation}
                  />
                  <SkillBox
                    title={"Firebase"}
                    image={"firebase"}
                    animate={backendAnimation}
                  />
                </motion.span>

                {/* Tools and Platforms */}
                <motion.span className="absolute z-30 flex gap-2 left-[50%] translate-x-[-50%] top-[310px]" 
                  id="tool" 
                  initial={{top: "260px", opacity: 0}} 
                  whileInView={{top: "310px", opacity: 1}}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                >
                  <SkillBox title="AWS Cloud" image="awsCloud"  animate={toolAnimation}/>
                  <SkillBox title="docker" image="docker"  animate={toolAnimation}/>
                  <SkillBox title="postman" image="postman"  animate={toolAnimation}/>
                  <SkillBox title="Blender" image="Blender"  animate={toolAnimation}/>
                  <SkillBox title="React Three Fiber" image="reactThreeFiber" animate={toolAnimation} />
                </motion.span>
              </>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1.2}
          className="z-50 bg-white"
        >
          <div className="items-center pt-2 text-4xl font-bold text-center mt-[0px]">
            Projects
          </div>
            <motion.div
              variants={parentVariants}
              initial="hidden"
              ref={projectBoxContainer}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
              className="flex min-w-full w-auto h-[800px] justify-between items-end px-[2%] sm:px-[18vw] md:px-[36vw] overflow-x-auto scroll-smooth projectsContainer gap-[40px] overflow-y-hidden pb-[20px]" // Apply consistent gaps
            >
              <motion.div 
                ref={(element) => {
                  if (element && !projectBoxRefs.current.includes(element)) {
                    projectBoxRefs.current.push(element); 
                  }
                }}
                variants={getVariant(0)} 
                className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative cursor-pointer projectBox" 
                onClick={() => {window.location.href = "https://master.d39gjbvu7ugqv4.amplifyapp.com/"}}
                onAnimationComplete={() => {handleAnimation(projectBoxRefs.current[0], 0)}}
              >
                  <img src={micLogo} className=" aspect-auto h-[150px] w-auto absolute top-[-143px] left-[-50px]"/>
                  <img src={karaokemepic} id="preview" alt="appleVsSamsung" className=" w-[400px] h-[220px] top-[40px] border-4 border-gray-200 border-solid  rounded-xl mt-4"/>
                  <h1 className="text-white mt-[50px] text-xl text-center font-semibold">KaraokeMe</h1>
                  <p className="p-[10px] text-gray-200 text-lg ">
                    This is a full stack website that I made using AWS amplify, Typescript, React, Flask, and Firebase. It allows users to upload mp3 files and generates karaoke tracks using deep learning models. It also generates mp4 files using ffmpeg and allows users to download the files.
                  </p>

                  <p className="mt-4 text-center text-gray-200 text-md">hosted on aws</p>
              </motion.div>
              <motion.div 
                ref={(element) => {
                  if (element && !projectBoxRefs.current.includes(element)) {
                    projectBoxRefs.current.push(element); 
                  }
                }}
                variants={getVariant(1)} 
                className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative cursor-pointer projectBox" 
                onClick={() => {window.location.href = "https://master.d1a1fvsqctjek5.amplifyapp.com/"}}
                onAnimationComplete={() => {handleAnimation(projectBoxRefs.current[0], 0)}}
              >
                  <AppleVsSamsung className=" aspect-auto h-[150px] w-auto absolute top-[-143px] left-[-50px]"/>
                  <img src={AppleVsSamsungPic} id="preview" alt="appleVsSamsung" className=" w-[400px] h-[220px] top-[40px] border-4 border-gray-200 border-solid  rounded-xl mt-4"/>
                  <h1 className="text-white mt-[50px] text-xl text-center font-semibold">Apple Vs Samsung</h1>
                  <p className="p-[10px] text-gray-200 text-lg ">
                    This is an interactive website I made using React Three Fiber and Blender. It compares Apple and Samsungs flagship models
                    over its past major years. I made this as a result of the increasing debates over the two companies and the many misconceptions of the two.
                  </p>

                  <p className="mt-4 text-center text-gray-200 text-md">hosted on aws</p>
              </motion.div>
              <motion.div   
                ref={(element) => {
                  if (element && !projectBoxRefs.current.includes(element)) {
                    projectBoxRefs.current.push(element);
                  }
                }}
                variants={getVariant(2)} 
                className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative projectBox cursor-pointer"  
                onClick={() => {window.location.href = "https://andrewkim09.github.io/Eureka/#/"}}
                onAnimationComplete={() => {handleAnimation(projectBoxRefs.current[1], 1)}}
              >
                <SchoolLogo className="aspect-auto h-[150px] w-auto absolute top-[-113px] left-[-50px] text-gray-400"/>
                <img src={schoolPic} alt="Eureka" id="preview" className=" w-[400px] border-4 border-gray-200 border-solid aspect-auto rounded-xl mt-[40px]"/>

                <h1 className="text-white mt-[50px] text-xl text-center">Eureka</h1>
                <p className="p-[10px] text-gray-200 text-lg ">
                  This is a full stack website I made using Firebase and React. It is a fun project I decided to do in my early years of university upon analyzing the universities e-class.                  
                </p>
                <p className="mt-4 text-center text-gray-200 text-md">hosted on github pages</p>
              </motion.div>

              <motion.div 
                ref={(element) => {
                  if (element && !projectBoxRefs.current.includes(element)) {
                    projectBoxRefs.current.push(element); 
                  }
                }}
                variants={getVariant(3)} 
                className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative projectBox cursor-pointer" 
                onClick={() => {window.location.href = "https://dev.d3hu1k9aj04e16.amplifyapp.com/"}}
                onAnimationComplete={() => {handleAnimation(projectBoxRefs.current[2], 2)}}
              >
                  <LinkSvg className="aspect-auto h-[150px] w-auto absolute top-[-73px] left-[-50px] text-gray-400"/>
                  <img src={invoicePic} alt="invoiceapp" id="preview" className=" w-[400px] border-4 border-gray-200 border-solid aspect-auto rounded-xl mt-4"/>

                  <h1 className="text-white mt-[50px] text-xl text-center">Invoice App</h1>
                  <p className="p-[10px] text-gray-200 text-lg ">
                    This is a full stack website I made using SpringBoot and React. It is a simple invoice app that allows users to create, edit, and delete invoices.
                    It features pixel perfect design that dynamically changes on different screen sizes and a simple user interface.
                  </p>
                  <p className="mt-4 text-center text-gray-200 text-md">hosted on aws</p>
              </motion.div>
            </motion.div>

          <div className="flex items-center justify-center">
            <button className=" w-[400px] mt-[50px] border-2 border-blue-600 h-[70px] flex items-center justify-center align-middle border-solid rounded-[10px] card-inner" 
            onClick={() => {onGithubClick();}}>
              <div className="card-front">Visit my github for 20+ more!</div>
              <div className="card-back">https://github.com/AndrewKim09</div>
            </button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.13}
          factor={0.8}
          speed={0}
          className="flex flex-col justify-between bg-black"
        >
          <div className="items-center pt-2 text-4xl font-bold text-center text-white">
            Education
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="w-[400px] h-[200px] yorkPhoto border-2 border-solid border-red-900"></div>
            <p className="px-10 pt-10 text-2xl text-white">
              I am currently in my last year learning about advanced data
              structures/aglorithms and systems.
            </p>
          </div>

          <div className="grid grid-cols-3 h-[100px]">
            <div
              className="flex items-center justify-center font-bold text-center text-black align-middle bg-blue-600 cursor-pointer"
              onClick={() => {
                onLinkedInClick();
              }}
            >
              Visit my LinkedIn
            </div>
            <div className="flex items-center justify-center font-bold text-center text-black align-middle bg-white cursor-pointer">
              <span className="sm:hidden md:visible">contact me!:</span>
              <span className="sm:text-[10px] sm:block md:inline md:text-[16px]">
                {" "}
                andrewkim09@hotmail.com
              </span>
            </div>
            <div
              className="flex items-center justify-center font-bold text-center text-white align-middle bg-black cursor-pointer"
              onClick={() => {
                onGithubClick();
              }}
            >
              Visit my Github
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
