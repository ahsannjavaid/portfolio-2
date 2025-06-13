import React from "react";
// @ts-ignore
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import ParticleBg from "../components/particleBg";

function Experience() {

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-start min-h-max w-screen bg-primary"
    >
      <ParticleBg />
      <div className="w-[70%] h-[20vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold after:content-[''] after:block after:pt-2 after:border-b-[#3BB5DB] after:border-b-4">
          My Experience
        </h1>
      </div>
      <div className="w-[80%] sm:w-[40%] pt-10">
        <VerticalTimelineElement
          className="vertical-timeline-element--work cursor-pointer"
          contentStyle={{ background: "rgb(24, 28, 102)", color: "#fff" }}
          date="June 2023 - Current"
          iconStyle={{ background: "rgb(24, 28, 102)", color: "#fff" }}
          icon={<MdWork />}
          onTimelineElementClick={() => window.open("https://www.thedevsaar.com/", '_blank', 'noopener,noreferrer')}
        >
          <h3 className="vertical-timeline-element-title">Junior MERN Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hybrid - Gulberg II, Lahore
          </h4>
          <p>Devsaar IT Solutions</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work cursor-pointer"
          contentStyle={{ background: "rgb(121, 199, 159)", color: "#fff" }}
          date="Aug 2024 - Oct 2024"
          iconStyle={{ background: "rgb(121, 199, 159)", color: "#fff" }}
          icon={<MdWork />}
          onTimelineElementClick={() => window.open("https://www.skilovate.site/", '_blank', 'noopener,noreferrer')}
        >
          <h3 className="vertical-timeline-element-title">MERN Stack Trainer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hybrid - Gulberg II, Lahore
          </h4>
          <p>Skilovate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work cursor-pointer"
          contentStyle={{ background: "rgb(24, 28, 102)", color: "#fff" }}
          date="Nov 2023 - Feb 2024"
          iconStyle={{ background: "rgb(24, 28, 102)", color: "#fff" }}
          icon={<MdWork />}
          onTimelineElementClick={() => window.open("https://www.thedevsaar.com/", '_blank', 'noopener,noreferrer')}
        >
          <h3 className="vertical-timeline-element-title">iOS Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>Devsaar IT Solutions</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work cursor-pointer"
          contentStyle={{ background: "rgb(9, 120, 133)", color: "#fff" }}
          date="Apr 2022 - Feb 2023"
          iconStyle={{ background: "rgb(9, 120, 133)", color: "#fff" }}
          icon={<MdWork />}
          onTimelineElementClick={() => window.open("https://www.instagram.com/careercounselingsociety?utm_source=ig_web_button_share_sheet&igsh=enlvbzU1ZjNrNndk", '_blank', 'noopener,noreferrer')}
        >
          <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            FAST University, Lahore
          </h4>
          <p>Career Counseling Society (CCS)</p>
        </VerticalTimelineElement>
      </div>
    </section>
  );
}

export default Experience;
