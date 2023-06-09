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

export default function Experience() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  return (
    <>
      <Header openSidebarClick={openSidebar} />
      <Sidebar open={sidebarOpened} onClose={closeSidebar} />
      <div className=" xl: mx-80 my-10">
        <h2 className=" xl: text-base">Let me tell you about...</h2>
        <div className=" flex items-end">
          <h1 className=" xl: text-6xl">My Experience</h1>
          <BsFillRocketTakeoffFill className=" ml-4 text-5xl" />
        </div>
      </div>

      <div className=" ml-80">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2022 - 2023"
            icon={<LalaComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "10px",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Data-Team Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Medelin - Colômbia (Remotely)
            </h4>
            <p>
              Data cleaning - Process automation - Survey questionnaire design -
              Data science - Microsoft Excel - Data analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2022 - 2023"
            icon={<LalaComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "10px",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Care Guide Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Medelin - Colômbia (Remotely)
            </h4>
            <p>
              Interviewing - Public speaking - Success orientation - Qualitative
              and quantitative research methodologies - Data analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
            date="2018 - 2022"
            icon={<LawComponent />}
            iconStyle={{
              background: "rgb(20, 20, 21)",
              color: "#fff",
              padding: "12px",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              IT Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Giruá - Brasil
            </h4>
            <p>
              Microsoft Office - Customer service - Google Sheets - Social media
              - Secretary duties
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
