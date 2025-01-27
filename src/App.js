import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import React from "react";
import { SkillBox } from "./images/components/SkillBox";
import { BranchBox } from "./images/components/BranchBox";
import {hover, motion} from 'motion/react';

import {ReactComponent as AppleVsSamsung} from './images/projects/AppleVsSamsung.svg';
import AppleVsSamsungPic1 from './images/projects/appleVsSamsungpic1.jpg';
import AppleVsSamsungPic2 from './images/projects/appleVsSamsungpic2.JPG';

import {ReactComponent as LinkSvg} from './images/projects/link.svg';
import invoiceApp from './images/projects/invoiceApp.jpg';
import { animate } from "framer-motion";

import {ReactComponent as SchoolLogo} from './images/projects/school.svg';
import schoolpic1 from './images/projects/schoolpic1.JPG';

function App() {
  const parallaxRefs = React.useRef({});
  const [techFilter, setTechFilter] = useState();
  const [techFilterText, setTechFilterText] = useState("all");

  const [languageAnimation, setLanguageAnimation] = useState();
  const [webAnimation, setWebAnimation] = useState();
  const [backendAnimation, setBackendAnimation] = useState();
  const [toolAnimation, setToolAnimation] = useState();

  

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

      // document.querySelector(".skillsTab").addEventListener("click", () => {
      //   const skillsBall = document.querySelector(".skillsBall");
      //   skillsBall.classList.toggle("left-1");
      //   skillsBall.classList.toggle("left-10");
      //   console.log(techSkills);
      //   setTechSkills((techSkills) => !techSkills);
      // });
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

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  hover(".projectBox", (element) => {
    const animation = animate(element,{scale: 1.1, boxShadow: "0px 0px 10px 0px #210c2e"});

    return (endEvent) => {
      animate(element, {scale: 1, boxShadow: "0px 0px 0px 0px #210c2e"});
    }
  })

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
                  I am a software developer with the passion to <b>learn</b> and{" "}
                  <b>create</b>.{" "}
                </p>
                <b className="block mt-10 gradient-text">I have recently:</b>
                <p className="mt-4 text-lg md:pr-[50px] lg:pr-[200px] xl:pr-[400px]">
                  developed an <b>interactive website</b> that compares{" "}
                  <b>Apple's</b> and <b>Samsung's</b> flagship phone models
                  during some of their major years in innovation. It features
                  react three fiber and models I've created in blender
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
                    text={
                      "As the first language I've learned, I have a good understanding of the language and its concepts and have used it to create a variety of projects. It was my coding foundation to learn other languages."
                    }
                    title={"Java"}
                    image={"javaLogo"}
                    animate={languageAnimation}
                  />
                  <SkillBox
                    text={
                      "Javascript was the second language I've gone into outside of school in order to create interactive web pages. I also have a good understanding of data structures and algorithms using Javascript from leetcode problems."
                    }
                    title={"JavaScript"}
                    image={"JavaScript"}
                    animate={languageAnimation}
                  />
                  <SkillBox 
                    title="C#" 
                    image="CSharp" 
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
                    text={
                      "Using HTML, I have created a variety of web pages and believe I have a good understanding of the language and its concepts."
                    }
                    title={"HTML"}
                    image={"HTML"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    text={
                      "As the styling language of HTML I've learned how to not only create animations, layered designs, and responsive designs, but also center a div!"
                    }
                    title={"CSS"}
                    image={"CSS"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    text={
                      "TailwindCSS is a library I've learned once and constantly have gone back to for its ease of use and the efficiency of work it provies. I've used it to create this website!"
                    }
                    title={"TailwindCSS"}
                    image={"Tailwind"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    text={
                      "Due to its popularity and its massive community, I've decided to learn React to create websites at a much faster rate, and have easy access to libraries and components. I've used it to create this website!"
                    }
                    title={"React"}
                    image={"react"}
                    animate={webAnimation}
                  />
                  <SkillBox
                    text={
                      "Jquery is my favorite library to use for animations and simple functions. Its easy to understand API docuemntation and its simplicity makes it a great tool to use for small projects."
                    }
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
                    text={
                      "SpringBoot was my foot in the door for APIs and I've created a variety of projects using it. I've also learned how to use it to connect to databases and create a full stack website. Check out my Link Generator project!"
                    }
                    title={"SpringBoot"}
                    image={"springBoot"}
                    animate={backendAnimation}
                  />
                  <SkillBox
                    text={
                      "As the first language I've learned, I have a good understanding of the language and its concepts and have used it to create a variety of projects."
                    }
                    title={"Node.js"}
                    image={"Node"}
                    animate={backendAnimation}
                  />
                  <SkillBox
                    text={
                      "Started with MySQL from my database classes I transitioned to MongoDB to learn more about NoSQL databases."
                    }
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
                    text={
                      "Using Firebase I was able to create full stack websites without fully understanding the backend. I've used it to create my Hoop Tracker project and Eureka project"
                    }
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
                  <SkillBox title="Blender" image="blender"  animate={toolAnimation}/>
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
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
              className="flex min-w-full w-auto h-[1000px] justify-between items-center px-[2%] lg:px-[10%] overflow-x-auto scroll-smooth projectsContainer" // Apply consistent gaps
            >
              <motion.div variants={childVariants} className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative cursor-pointer projectBox" onClick={() => {window.location.href = "https://master.d1a1fvsqctjek5.amplifyapp.com/"}}>
                  <AppleVsSamsung className=" aspect-auto h-[150px] w-auto absolute top-[-143px] left-[-50px]"/>
                  <img src={AppleVsSamsungPic1} alt="appleVsSamsung" className=" w-[400px] h-[220px] top-[40px] border-4 border-gray-200 border-solid  rounded-xl leftImage mt-4"/>
                  <h1 className="text-white mt-[50px] text-xl text-center font-semibold">Apple Vs Samsung</h1>
                  <p className="p-[10px] text-gray-200 text-lg ">
                    This is an interactive website I made using React Three Fiber and Blender. It compares Apple and Samsungs flagship models
                    over its past major years. I made this as a result of the increasing debates over the two companies and the many misconceptions of the two.
                  </p>

                  <p className="mt-4 text-center text-gray-200 text-md">hosted on aws</p>
              </motion.div>
              <motion.div variants={childVariants} className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative projectBox cursor-pointer"  onClick={() => {window.location.href = "https://andrewkim09.github.io/Eureka/#/"}}>
                <SchoolLogo className="aspect-auto h-[150px] w-auto absolute top-[-113px] left-[-50px] text-gray-400"/>
                  <img src={schoolpic1} alt="Eureka" className=" w-[400px] border-4 border-gray-200 border-solid aspect-auto rounded-xl mt-[40px]"/>

                <h1 className="text-white mt-[50px] text-xl text-center">Eureka</h1>
                <p className="p-[10px] text-gray-200 text-lg ">
                  This is a full stack website I made using Firebase and React. It is a fun project I decided to do in my early years of university upon analyzing the universities e-class.

                </p>
              </motion.div>

              <motion.div variants={childVariants} className="min-w-[400px] max-w-[400px] h-[600px] border-4 border-solid border-[#210c2e] bg-[#1e1725] rounded-lg shadow-xl relative projectBox cursor-pointer" onClick={() => {window.location.href = "https://dev.d3hu1k9aj04e16.amplifyapp.com/"}}>
                  <LinkSvg className="aspect-auto h-[150px] w-auto absolute top-[-73px] left-[-50px] text-gray-400"/>
                  <img src={invoiceApp} alt="invoiceapp" className=" w-[400px] border-4 border-gray-200 border-solid aspect-auto rounded-xl rightImage mt-4"/>

                  <h1 className="text-white mt-[50px] text-xl text-center">Invoice App</h1>
                  <p className="p-[10px] text-gray-200 text-lg ">
                    This is a full stack website I made using SpringBoot and React. It is a simple invoice app that allows users to create, edit, and delete invoices.
                    It features pixel perfect design that dynamically changes on different screen sizes and a simple user interface.
                  </p>
              </motion.div>
            </motion.div>

          <div className="flex items-center justify-center">
            <button className=" w-[400px] mt-[-100px] border-2 border-blue-600 h-[70px] flex items-center justify-center align-middle border-solid rounded-[10px] card-inner" 
            onClick={() => {onGithubClick();}}>
              <div class="card-front">Visit my github!</div>
              <div class="card-back">https://github.com/AndrewKim09</div>
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
