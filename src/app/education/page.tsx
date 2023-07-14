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
      <div className=" mx-80 my-10">
        <h2 className=" text-base mt-10">Let me tell you about...</h2>
        <div className=" flex items-center">
          <h1 className=" text-6xl">My Education</h1>
          <FaGraduationCap className=" ml-4 pt-2 text-5xl" />
        </div>
      </div>

      <div className=" ml-80">
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
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
