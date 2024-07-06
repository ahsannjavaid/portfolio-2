import React from "react";
import {
  SiReact,
  SiRedux,
  SiPostgresql,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
  SiExpress,
  SiSqlite,
  SiTailwindcss,
  SiMysql,
  SiVercel,
} from "react-icons/si";
import ProjectShowcase from "../../components/ProjectShowcase";

function Project() {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-start min-h-max w-screen z-40 bg-primary"
    >
      <div className="w-[70%] h-[20vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold after:content-[''] after:block after:pt-2 after:border-b-[#3BB5DB] after:border-b-4">
          My Projects
        </h1>
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] xl:w-[80%] h-[80vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#52409f"
          side="right"
          name="Viz"
          slogan="Diagramming Made Easy"
          paragraph="A web-based editor to help backend engineers create, edit,
                visualize and maitain their cloud infastructure diagrams."
          githubLink="https://github.com/nathan20021/VIZ-PROD"
          demoLink="https://viz.nathanluong.me"
          imagePath="/viz-logo.png"
          images={[
            "viz-screenshot.png",
            "IOT-Solution-Diagram.jpeg",
            "ML-in-Swimming.jpeg",
          ]}
          links={[
            {
              link: "https://reactjs.org/",
              icon: <SiReact />,
              name: "React",
            },
            {
              link: "https://redux.js.org/",
              icon: <SiRedux />,
              name: "Redux",
            },
            {
              link: "https://www.postgresql.org/",
              icon: <SiPostgresql />,
              name: "PostgreSQL",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] xl:w-[80%] h-[80vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#01529a"
          side="left"
          name="Personal Blogs"
          slogan="A place to share my thoughts"
          paragraph="A place where I can share my thoughts and technical experiences with the world. Aiming to improve my writting, and thought-orginization skills."
          githubLink="https://github.com/nathan20021/summer-portfolio"
          demoLink="https://nathanluong.me/blogs"
          imagePath="/viz-logo-no-grad.png"
          images={[
            "blog-1.png",
            "blog-3.png",
            "blog-2.png",
            "blog-5.png",
            "blog-4.png",
          ]}
          links={[
            {
              link: "https://vercel.com/",
              icon: <SiVercel />,
              name: "Vercel",
            },
            {
              link: "https://reactjs.org/",
              icon: <SiReact />,
              name: "React",
            },
            {
              link: "https://nextjs.org/",
              icon: <SiNextdotjs />,
              name: "Next.js",
            },
            {
              link: "https://www.mysql.com/",
              icon: <SiMysql />,
              name: "MySQL",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] xl:w-[80%] h-[80vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#7a003c"
          side="right"
          name="McMaster Rocketry"
          slogan="Fueling Innovation."
          paragraph="A platform for the McMaster Rocketry Team to showcase their advancements, recruiting members, publishing blogs, and seeking external sponsorships."
          githubLink={undefined}
          demoLink="https://www.macrocketry.ca/"
          imagePath="/rocketry_logo.webp"
          images={[
            "rocketry-landing.png",
            "void-lake-5.png",
            "flight-profile.png",
          ]}
          links={[
            {
              link: "https://reactjs.org/",
              icon: <SiReact />,
              name: "React",
            },
            {
              link: "https://nextjs.org/",
              icon: <SiNextdotjs />,
              name: "Next.js",
            },
            {
              link: "https://graphql.org/",
              icon: <SiGraphql />,
              name: "GraphQL",
            },
            {
              link: "https://firebase.google.com/",
              icon: <SiFirebase />,
              name: "Firebase",
            },
          ]}
        />
      </div>
      <div className="mb-[10vh] max-w-[1400px] md:mb-0 w-[90%] h-[65vh]  md:h-[90vh] flex justify-center items-center relative">
        <ProjectShowcase
          color="#666666"
          side="left"
          name="Oober 🎉"
          slogan="Connecting Riders and Drivers."
          paragraph="A mobile application that connects riders and drivers in a safe and efficient manner."
          githubLink={"https://github.com/nathan20021/3A04-Project"}
          demoLink={undefined}
          imagePath="/Oober.png"
          images={["Oober_Auth.png", "Oober_carpool.png", "Oober_end.png"]}
          links={[
            {
              link: "https://reactjs.org/",
              icon: <SiReact />,
              name: "React Native",
            },
            {
              link: "https://tailwindcss.com/",
              icon: <SiTailwindcss />,
              name: "Tailwind CSS",
            },
            {
              link: "https://sqlite.org/",
              icon: <SiSqlite />,
              name: "SQLite",
            },
            {
              link: "https://expressjs.com/",
              icon: <SiExpress />,
              name: "Express.js",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Project;
