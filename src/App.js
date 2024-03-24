import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import React from "react";
import { SkillBox } from "./components/SkillBox";
import { BranchBox } from "./components/BranchBox";
import { useNavigate } from "react-router-dom";



function App() {
  const parallaxRef = React.useRef();
  const [techSkills, setTechSkills] = useState(true);
  console.log("awfg");
  
  const onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/andrew-kim-19171a1b7/");
  }

  const onGithubClick = () => {
    window.open("https://github.com/AndrewKim09");
  }



  const softSkills = [
    {
        "title": "Communication Skills",
        "text": "Effective communication is crucial for me to collaborate with team members, understand client requirements, and convey technical concepts to non-technical stakeholders.",
        "image": "communication"
      },
    {
        "title": "Problem Solving",
        "text": "Web development often involves identifying and solving complex problems. I need strong problem-solving skills to troubleshoot issues, optimize code, and implement efficient solutions.",
        "image": "problemSolving"
      },
    {
        "title": "Adaptability",
        "text": "The field of web development is constantly evolving with new technologies and frameworks. I must be adaptable to learn new tools and adapt to changing project requirements.",
        "image": "adaptability"
      },
    {
        "title": "Time Management",
        "text": "Web development projects often have tight deadlines. I need effective time management skills to prioritize tasks, meet deadlines, and deliver high-quality work on time.",
        "image": "timeManagement"
      },
    {
        "title": "Teamwork",
        "text": "Web development projects are typically collaborative efforts involving designers, developers, and other stakeholders. Strong teamwork skills are essential for me to work effectively in a team environment.",
        "image": "teamwork"
      },
    {
        "title": "Attention to Detail",
        "text": "Small errors in code or design can have significant consequences in web development. I must have a keen attention to detail to identify and fix bugs, ensure cross-browser compatibility, and create polished user interfaces.",
        "image": "attentionToDetail"
      }
]

  useEffect(() => {

    window.onload = function(){
      console.log(parallaxRef.current.container.current.style.overflow)
      parallaxRef.current.container.current.style.overflow = 'hidden';

      setTimeout(() => {
        parallaxRef.current.container.current.style.overflow = 'hidden scroll';
      }, 1200);
      
      if (parallaxRef.current) {
        const path = document.querySelector('.progressBar');
        const PathLength = path.getTotalLength();
        path.style.strokeDashOffset = 0;
  
        path.style.strokeDasharray = `${PathLength} ${PathLength}`;
        path.style.strokeDashOffset = PathLength;
  
        const handleScroll = () => {
          const scrollPercentage = (parallaxRef.current.current / parallaxRef.current.space) / 5;
  
          const drawLength = PathLength * scrollPercentage;
  
          path.style.strokeDashoffset = PathLength - drawLength;
        };

        console.log(parallaxRef.current.container.current);
  
        parallaxRef.current.container.current.addEventListener('scroll', handleScroll);
        
      }

      const skillContainer = document.querySelector('.skillsBoxContainer');

      skillContainer.addEventListener('wheel', (e) => {
        console.log(e.deltaY);
        e.preventDefault();
        parallaxRef.current.container.current.scrollBy(0, e.deltaY)
      });

      const leftObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          
          if(entry.isIntersecting){
            entry.target.classList.add('fadeInLeft');
            return;
          }
        });
      });
    
      const rightObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          
          if(entry.isIntersecting){
            console.log(entry.target);
            entry.target.classList.add('fadeInRight');
            return;
          }
        });
      });
    
      document.querySelectorAll('.leftBranchBox').forEach(leftBranchBox => {
        leftObserver.observe(leftBranchBox);
      });

      document.querySelectorAll('.rightBranchBox').forEach(rightBranchBox => {
        rightObserver.observe(rightBranchBox);
      });


      document.querySelector('.skillsTab').addEventListener('click', () => {
        const skillsBall = document.querySelector('.skillsBall');
        skillsBall.classList.toggle('left-1');
        skillsBall.classList.toggle('left-10');
        console.log(techSkills)
        setTechSkills(techSkills => !techSkills);
      });
        
      
      }
  }, [])
  
  return (
    <div className="App">
      <Parallax pages={4.3} ref={parallaxRef} className="overflow-hidden">
        <ParallaxLayer sticky={{start: 0, end: 6}}>
          <div className="sm:hidden fixed top-0 right-0 flex flex-col items-center pt-10 w-[200px] h-[200px] overflow-hidden text-center progressBarContainer xl:fixed">
              <svg className="height-[100%] inline-block" viewBox="0 0 210 297" preserveAspectRatio="xMidYMax meet">
                <path className="progressBar" d="m88.991 54.987 48.475 53.901-90.438 57.881 107.8 49.199-78.139 60.051" fill="none" stroke="blue" strokeLinecap="round" strokeWidth="2.6162"/>
              </svg>
        </div>
        
        </ParallaxLayer>
        <ParallaxLayer speed={1} sticky={{start: 0, end:1}} factor={1}>
          <div className="overflow-hidden openingAnimationBox">
            <div className="leftAnimationBox absolute top-0 left-0 bottom-0 w-0 h-[100vh] bg-black">
              <div className="absolute top-0 right-0 w-0 h-0 bg-blue-900"/>
            </div>
            <div className="rightAnimationBox absolute top-0 right-0 bottom-0 w-0 h-[100vh] bg-black ">
              <div className="absolute top-0 left-0 w-0 h-0 bg-blue-900"/>
            </div>
          </div>

        <div className=" contentBox">
            <div className="flex items-center justify-center pt-20">
              <div className="photo h-[500px] w-[500px] border-solid border-2 border-black"/>
              <div className="ml-2">
                <h1 className="text-4xl font-bold">My name is Andrew Kim</h1>
                <p className="text-xl">I am an aspiring web/software developer with the passion to <b>learn</b> and <b>create</b></p>
                <b className="block mt-10">Current Goals:</b>
                <ul className="ml-10">
                  <li>-Utilize proper coding at <b>industry standard</b> and above</li>
                  <li>-Learn all of the niche functions provided <b>HTML</b> <b>CSS</b> and <b>JavaScript</b></li>
                  <li>-Enhance my ability to bring <b>UI designs</b> to <b>life</b></li>
                  <li>-Learn more about <b>databases</b></li>
                  <li>-Start using <b>cool apis</b> to make <b>projects</b></li>
                </ul>
              </div>
            </div>
        </div>
          <div className="flex flex-col w-[120px] arrowBox items-center absolute bottom-0 left-0">
            <b className="text-sm">for more info :D</b>
            <FontAwesomeIcon icon={faArrowDown}  className="w-10 h-10 aspect-square"/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} factor={3} sticky={{start: 1, end: 1}} speed={1} className="overflow-scroll bg-black skillsBoxContainer">
            <div className="items-center pt-2 text-4xl font-bold text-center text-white bg-transparent">{techSkills ? "Technical Skills" : "Soft Skills"}</div>

            <div className="grid items-center justify-center pt-10 overflow-scroll overflow-x-hidden text-white sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6">
              <div className="absolute flex flex-col top-5 right-5">
                <div className=" bg-white h-5 w-[60px] rounded-full flex items-center px-0.5 cursor-pointer skillsTab relative">
                  <div className="absolute w-4 h-4 ml-0 bg-black rounded-full left-1 skillsBall "/>
                </div>
                <div className="flex justify-between">
                  <div className="text-xs font-bold text-white">tech</div>
                  <div className="text-xs font-bold text-white">soft</div>

                </div>
              </div>

              { techSkills ?
                <>
                  <SkillBox 
                    text={"As the first language I've learned, I have a good understanding of the language and its concepts and have used it to create a variety of projects. It was my coding foundation to learn other languages."}
                    title={"Java"}
                    image={"javaLogo"}
                  />
                  <SkillBox 
                    text={"Using HTML, I have created a variety of web pages and believe I have a good understanding of the language and its concepts."}
                    title={"HTML"}
                    image={"HTML"}
                  />
                  <SkillBox 
                    text={"Javascript was the second language I've gone into outside of school in order to create interactive web pages. I also have a good understanding of data structures and algorithms using Javascript from leetcode problems."}
                    title={"JavaScript"}
                    image={"JavaScript"}
                  />
                  <SkillBox 
                    text={"As the styling language of HTML I've learned how to not only create animations, layered designs, and responsive designs, but also center a div! "}
                    title={"CSS"}
                    image={"CSS"}
                  />
                  <SkillBox 
                    text={"TailwindCSS is a library I've learned once and constantly have gone back to for its ease of use and the efficiency of work it provies. I've used it to create this website!"}
                    title={"TailwindCSS"}
                    image={"Tailwind"}
                  />
                  <SkillBox 
                    text={"SpringBoot was my foot in the door for APIs and I've created a variety of projects using it. I've also learned how to use it to connect to databases and create a full stack website. Check out my Link Generator project!"}
                    title={"SpringBoot"}
                    image={"springBoot"}
                  />
                  <SkillBox 
                    text={"Due to its popularity and its massive community, I've decided to learn React to create websites at a much faster rate, and have easy access to libraries and components. I've used it to create this website!"}
                    title={"React"}
                    image={"react"}
                  />
                  <SkillBox 
                    text={"As the first language I've learned, I have a good understanding of the language and its concepts and have used it to create a variety of projects."}
                    title={"Node.js"}
                    image={"Node"}
                  />
                  <SkillBox 
                    text={"Jquery is my favorite library to use for animations and simple functions. Its easy to understand API docuemntation and its simplicity makes it a great tool to use for small projects."}
                    title={"jQuery"}
                    image={"jquery"}
                  />
                  <SkillBox 
                    text={"Using Firebase I was able to create full stack websites without fully understanding the backend. I've used it to create my Hoop Tracker project and Eureka project"}
                    title={"Firebase"}
                    image={"firebase"}
                  />
                  <SkillBox 
                    text={"Started with MySQL from my database classes i transitioned to MongoDB to learn more about NoSQL databases."}
                    title={"MongoDB"}
                    image={"mongodb"}
                  />
                </>
                :

                <>
                  {softSkills.map(skill => (
                    <SkillBox 
                      text={skill.text}
                      title={skill.title}
                      image={skill.image}
                    />
                  ))}
                  </>
              }

              
            </div>
            
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed={1} factor={1.2} className="bg-white">
          <div className="items-center pt-2 text-4xl font-bold text-center ">Projects</div>
          <div className="flex flex-col items-center mt-[300px]">
            <BranchBox side="leftBranchBox" title="Link Generator" image="linkGenerator" text="this full stack website is used for creating and saving links. I created this personally so that I could send big files to my friends on discord. I used React as the front end and spring boot as my backend"/>
            <BranchBox side="rightBranchBox" title="Connect 4" image="connect" text="this was a fun website i developed based off a figma design file provided by frontEndMentor. It utilizes animations and response design that makes it very appealing"/>
            <BranchBox side="leftBranchBox" title="Hoop Tracker" image="hoopTracker" text="Hoop tracker was made so that I could track my stats in a mens league basketball division I entered with peers. it uses Firebase for authentication and its backend. The front end was built with React"/>
            <BranchBox side="rightBranchBox" title="Eureka" image="eureka" text="Eureka was a website I developed to copy the funcitonality of an online classroom website."/>
            <BranchBox side="leftBranchBox" title="Github" image="github" text="to see 5+ more of my projects, check out my github!"/>
            </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={1} factor={0.8} className="flex flex-col justify-between bg-black" sticky={{start: 3.8, end: 3.8}}>
            <div className="items-center pt-2 text-4xl font-bold text-center text-white">Education</div>

            <div className="flex flex-col items-center pt-10">
              <div className="w-[400px] h-[200px] yorkPhoto border-2 border-solid border-red-900"></div>
              <p className="px-10 pt-10 text-2xl text-white">I am currently in my 3rd year learning about operating systems, software designs and professional practice.</p>
            </div>

            <div className="grid grid-cols-3 h-[100px]">
            <div className="flex items-center justify-center font-bold text-center text-black align-middle bg-blue-600 cursor-pointer" onClick={() => {onLinkedInClick()}}>Visit my LinkedIn</div>
            <div className="flex items-center justify-center font-bold text-center text-black align-middle bg-white cursor-pointer">contact me!: andrewkim09@hotmail.com</div>
            <div className="flex items-center justify-center font-bold text-center text-white align-middle bg-black cursor-pointer" onClick={() => {onGithubClick()}}>Visit my Github</div>
          </div>
            
        </ParallaxLayer>
      </Parallax>

      

      
    </div>
  );
}

export default App;
