import ParticleBg from "@/components/particleBg";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

function HonorableMentions() {
  return (
    <section
      id="Honorable Mentions"
      className="z-20 flex flex-col items-center justify-start bg-primary min-h-max w-screen mt-16 relative"
    >
      <ParticleBg />
      <div className="w-full lg:w-[90%] min-h-max flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold after:content-[''] after:block after:pt-2 after:border-b-[#3BB5DB] after:border-b-4">
          Honorable Mentions
        </h1>

        <div
          id="project-box-container"
          className="w-[85%] min-w-[320px] max-w-[1050px] z-20 flex justify-around gap-[5%] flex-wrap min-h-max"
        >
          <ProjectCard
            imagePath="chess.png"
            title="Online Chess"
            des="A chess.com clone where players can play real-time chess. Created with ReactJS, Flask, nextJS, TailwindCSS, and SocketIO"
            hasDemo={true}
            isPrivate={false}
            GhLink="https://github.com/nathan20021/chess.com-clone"
            demoLink="https://www.youtube.com/watch?v=u94ONgnwnus"
            style={{ backgroundColor: "#11723d" }}
          />
          <ProjectCard
            imagePath="Computer.png"
            title="Personal Portfolio"
            des="A tech repository aiming to share my personal industry experience. Created with ReactJs and nextJS"
            hasDemo={false}
            isPrivate={false}
            GhLink="https://github.com/nathan20021/summer-portfolio"
            demoLink="#"
            style={{ backgroundColor: "#4f3f89" }}
          />
          <ProjectCard
            imagePath="live.png"
            title="Live Telemetry"
            des="A real-time data visualizer works over LORA. Processing, graphing, and analyzing avionic telemetry on ground."
            hasDemo={true}
            isPrivate={true}
            GhLink="#"
            demoLink="https://www.linkedin.com/feed/update/urn:li:activity:6904194822161461248/"
            style={{ backgroundColor: "#024381" }}
          />
          <ProjectCard
            imagePath="cube.png"
            title="L.E.D Cube"
            des="A programable 3x3x3 Led cube which has multiple pre-set lighting configurations. You can also play 3d snake on this low resolution display!"
            hasDemo={false}
            isPrivate={false}
            GhLink="https://github.com/nathan20021/Complete-LED-Cube-project"
            demoLink="#"
            style={{ backgroundColor: "#0C3B5B" }}
          />
          <ProjectCard
            imagePath="A_star.png"
            title="A* Visualization"
            des="Visualize the famous A* path finding algorithm with an interactive UI. Written in Java Processing"
            hasDemo={true}
            isPrivate={false}
            GhLink="https://github.com/nathan20021/A_star_visualization"
            demoLink="https://youtu.be/82DPwMUWq1Q"
            style={{ backgroundColor: "#9E6A31" }}
          />

          <ProjectCard
            imagePath="minesweeper.png"
            title="Minesweeper"
            des="A desktop minesweeper playgorund where user can enjoy the good-old vibe. Written in Processing."
            hasDemo={false}
            isPrivate={false}
            GhLink="https://github.com/nathan20021/MineSweeper"
            demoLink="#"
            style={{ backgroundColor: "#7f1822" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HonorableMentions;
