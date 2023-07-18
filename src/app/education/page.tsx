"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import UriComponent from "@/components/UriComponent";
import UofAkronComponent from "@/components/UofAkronComponent";
import DaPazComponent from "@/components/DaPazComponent";
import LawComponent from "@/components/LawComponent";
import { FaGraduationCap } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="  sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-36 xl:ml-80 xl:mr-44 my-10">
        <h2 className="  smallmobile:text-sm md:text-base xl:text-xl lg:text-lg">
          Let me tell you about...
        </h2>
        <div className=" flex items-end">
          <h1 className=" smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl">
            My Education
          </h1>
          <FaGraduationCap className=" smallmobile:text-3xl lg:text-4xl ml-4 xl:text-6xl" />
        </div>
      </div>

      <div className=" smallmobile:ml-5 md:ml-64 lg:ml-72 ml-80">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2023"
            icon={<UofAkronComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "11px",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              The University Of Akron
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Business Summer Course
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2022 - 2026"
            icon={<UriComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "11px",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Universidade Regional Integrada do Alto do Uruguai e das Missões
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Computer Science Degree
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2018 - 2021"
            icon={<DaPazComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "12px",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Instituto Sinodal Da Paz
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              High School Diploma
            </h4>
            <p>GPA: 8.2/10 &lpar;Top 4 on class rank&rpar;</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
