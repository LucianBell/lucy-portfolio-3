"use client";

import { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LalaComponent from "@/components/LalaComponent";
import LawComponent from "@/components/LawComponent";
import { FaGraduationCap } from "react-icons/fa";

export default function page() {
  return (
    <>
      <h2 className=" mx-72 text-xl">Let me tell you about...</h2>
      <div className=" flex items-center">
        <h1 className=" ml-72 my-3 text-6xl">My Education</h1>
        <FaGraduationCap className=" ml-4 pt-2 text-5xl" />
      </div>

      <div className=" ml-80">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2023"
            icon={<LalaComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "10px",
            }}
          >
            <h3 className="vertical-timeline-element-title">
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
            icon={<LalaComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "10px",
            }}
          >
            <h3 className="vertical-timeline-element-title">
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
            icon={<LawComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "12px",
            }}
          >
            <h3 className="vertical-timeline-element-title">
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
