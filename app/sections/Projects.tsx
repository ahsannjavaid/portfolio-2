import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiCplusplus,
  SiAssemblyscript,
  SiCsharp,
  SiUnity,
} from "react-icons/si";
import ProjectShowcase from "../components/ProjectShowcase";
import { FaJava } from "react-icons/fa";
import { TbBrandNetbeans } from "react-icons/tb";
import { GrDos } from "react-icons/gr";

function Projects() {
  const mernStackIconsArray = [
    {
      link: "https://www.mongodb.com",
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      link: "https://expressjs.com",
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      link: "https://reactjs.org/",
      icon: <SiReact />,
      name: "React",
    },
    {
      link: "https://nodejs.org/en",
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      link: "https://getbootstrap.com",
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
  ];

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-start min-h-max w-screen bg-primary"
    >
      <div className="w-[70%] h-[20vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold after:content-[''] after:block after:pt-2 after:border-b-[#3BB5DB] after:border-b-4">
          My Projects
        </h1>
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] xl:w-[80%] h-[80vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#4D3189"
          side="right"
          name="UN Portal"
          slogan="(Web Application)"
          paragraph="A web-based application to help instructors evaluate the performance of students and help students to track their academic performance."
          githubLink="https://github.com/ahsannjavaid/un-portal"
          demoLink={["https://un-portalbyahsanjaved.netlify.app/#/"]}
          imagePath="/projects/unportal/square_icon_0.0.png"
          images={[
            "/projects/unportal/un-1.png",
            "/projects/unportal/un-2.png",
            "/projects/unportal/un-3.png",
            "/projects/unportal/un-4.png",
            "/projects/unportal/un-5.png",
            "/projects/unportal/un-6.png",
            "/projects/unportal/un-7.png",
            "/projects/unportal/un-8.png",
            "/projects/unportal/un-9.png",
            "/projects/unportal/un-10.png",
            "/projects/unportal/un-11.png",
            "/projects/unportal/un-12.png",
            "/projects/unportal/un-13.png",
            "/projects/unportal/un-14.png",
          ]}
          links={mernStackIconsArray}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] xl:w-[80%] h-[80vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#e41221"
          side="left"
          name="Build You"
          slogan="(Web Application)"
          paragraph="A web-based application through which we can create our basic portfolio and showcase our projects."
          githubLink="https://github.com/ahsannjavaid/buildyou"
          demoLink={["https://buildyoubyahsanjaved.netlify.app/#/"]}
          imagePath="/projects/buildyou/square_icon.png"
          images={[
            "/projects/buildyou/by-1.png",
            "/projects/buildyou/by-2.png",
            "/projects/buildyou/by-3.png",
            "/projects/buildyou/by-4.png",
            "/projects/buildyou/by-5.png",
            "/projects/buildyou/by-6.png",
            "/projects/buildyou/by-7.png",
            "/projects/buildyou/by-7.png",
            "/projects/buildyou/by-8.png",
            "/projects/buildyou/by-9.png",
            "/projects/buildyou/by-10.png",
            "/projects/buildyou/by-11.png",
          ]}
          links={mernStackIconsArray}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] xl:w-[80%] h-[80vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#8a2be2"
          side="right"
          name="Weather Forecast"
          slogan="(Web Application - No DB)"
          paragraph="A web-page which is capable of responding about weather conditions of several geographical locations through city or latitude and longitude values using a third-party API."
          githubLink="https://github.com/ahsannjavaid/weather-forecast"
          demoLink={["https://weatherforcastbyahsanjaved.netlify.app/#/"]}
          imagePath="https://www.freepnglogos.com/uploads/sun-png/patio-shades-sun-screens-phoenix-east-valley-arizona-7.png"
          images={[
            "/projects/weather_forecast/wf-1.png",
            "/projects/weather_forecast/wf-2.png",
            "/projects/weather_forecast/wf-3.png",
            "/projects/weather_forecast/wf-4.png",
          ]}
          links={[
            {
              link: "https://reactjs.org/",
              icon: <SiReact />,
              name: "React",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] h-[65vh]  md:h-[90vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#6c757d"
          side="left"
          name="Books"
          slogan="(Web Application)"
          paragraph="A web-based application which manages books as an inventory. It is a simple project to practice concepts of MVC architecture."
          githubLink={"https://github.com/ahsannjavaid/books"}
          demoLink={["https://booksbyahsanjaved.netlify.app/#/"]}
          imagePath="https://vdot.maps.arcgis.com/sharing/rest/content/items/c59ef69651d947a89f96a5c7f94b449f/data"
          images={[
            "/projects/books/b-1.png",
            "/projects/books/b-2.png",
            "/projects/books/b-3.png",
          ]}
          links={mernStackIconsArray}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] h-[65vh] md:h-[90vh] flex justify-center items-center relative mb-28 mt-10">
        <ProjectShowcase
          color="#D6D9DF"
          side="right"
          name="Invoice System"
          slogan="(Desktop Application)"
          paragraph="A desktop-based application which creates invoice of items purchased. It supports CRUD functionality."
          githubLink={"https://github.com/ahsannjavaid/invoice-system"}
          demoLink={undefined}
          imagePath="https://education.oracle.com/file/general/p-80-java.png"
          images={[
            "/projects/invoice_system/is-1.png",
            "/projects/invoice_system/is-2.png",
            "/projects/invoice_system/is-3.png",
            "/projects/invoice_system/is-4.png",
            "/projects/invoice_system/is-5.png",
            "/projects/invoice_system/is-6.png",
            "/projects/invoice_system/is-7.png",
            "/projects/invoice_system/is-8.png",
            "/projects/invoice_system/is-9.png",
          ]}
          links={[
            {
              link: "https://www.java.com/en/",
              icon: <FaJava />,
              name: "Java",
            },
            {
              link: "https://netbeans.apache.org/front/main/index.html",
              icon: <TbBrandNetbeans />,
              name: "Net Beans",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] h-[65vh]  md:h-[90vh] flex justify-center items-center relative mt-28 mb-10">
        <ProjectShowcase
          color="#153292"
          side="left"
          name="Space Shooter"
          slogan="(Game)"
          paragraph="A console-based game that contains two entities; spaceship of user and spaceship of enemies. This game has two modes; Classic (C) and Arcade (A)."
          githubLink={"https://github.com/ahsannjavaid/space-shooter"}
          demoLink={[
            "https://drive.google.com/file/d/1hKbCSzDzzLsgkIlqVjr1mSMBZIgGwZSl/view",
            "https://drive.google.com/file/d/1eFQgb8W6fB9r6foEHsexnzuMsiV7f2bT/view",
          ]}
          demoText={["Gameplay-C", "Gameplay-A"]}
          imagePath="/projects/space_shooter/1.1 Icon png.ico"
          images={[
            "/projects/space_shooter/ss-1.png",
            "/projects/space_shooter/ss-2.png",
            "/projects/space_shooter/ss-3.png",
            "/projects/space_shooter/ss-4.png",
            "/projects/space_shooter/ss-5.png",
            "/projects/space_shooter/ss-6.png",
            "/projects/space_shooter/ss-7.png",
            "/projects/space_shooter/ss-8.png",
          ]}
          links={[
            {
              link: "https://cplusplus.com",
              icon: <SiCplusplus />,
              name: "C++",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] h-[65vh]  md:h-[90vh] flex justify-center items-center relative mt-24 mb-10">
        <ProjectShowcase
          color="#FF70FF"
          side="right"
          name="Catch the Jewels"
          slogan="(Game)"
          paragraph="A console-based game that contains two entities; bucket and a jewels as rewards. The rewards worth 5, 10, and 15 points. The goal is to prevent bomb and collect as many rewards as possible in 2 minutes."
          githubLink={"https://github.com/ahsannjavaid/books"}
          demoLink={["https://screenrec.com/share/SP2whsknEF"]}
          demoText={["Gameplay"]}
          imagePath="/projects/catch_the_jewels/logo.png"
          images={[
            "/projects/catch_the_jewels/cj-1.png",
            "/projects/catch_the_jewels/cj-2.png",
            "/projects/catch_the_jewels/cj-3.png",
          ]}
          links={[
            {
              link: "https://en.wikipedia.org/wiki/Assembly_language",
              icon: <SiAssemblyscript />,
              name: "Assembly Language",
            },
            {
              link: "https://www.dosbox.com",
              icon: <GrDos />,
              name: "DOSBox",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] h-[65vh]  md:h-[90vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#020B1C"
          side="left"
          name="Flappy Bird"
          slogan="(Game)"
          paragraph="A GUI-based game in which the actor is a bird to which we have to flap in order to save it from collision and falling. The goal is to cross as many pipes as possible. The game speed increases as the game proceeds."
          githubLink={"https://github.com/ahsannjavaid/flappy-bird"}
          demoLink={["https://screenrec.com/share/vk5LToj0wR"]}
          demoText={["Gameplay"]}
          imagePath="/projects/flappy_bird/logo.png"
          images={[
            "/projects/flappy_bird/fb-1.png",
            "/projects/flappy_bird/fb-2.png",
            "/projects/flappy_bird/fb-3.png",
          ]}
          links={[
            {
              link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)#:~:text=C%23%20(%2Fˌsiː%20ˈ,C%23",
              icon: <SiCsharp />,
              name: "C#",
            },
            {
              link: "https://unity.com",
              icon: <SiUnity />,
              name: "Unity",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
