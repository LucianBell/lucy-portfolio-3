"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import UriComponent from "@/components/logo-components/UriComponent";
import UofAkronComponent from "@/components/logo-components/UofAkronComponent";
import DaPazComponent from "@/components/logo-components/DaPazComponent";
import UPFComponent from "@/components/logo-components/UPFComponent";
import { FaGraduationCap } from "react-icons/fa";
import { Playfair_Display } from "@next/font/google";

const playfair_display: any = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function Education() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  return (
    <>
      <div className=" bg-color-black">
        <Header openSidebarClick={openSidebar} />
        <Sidebar open={sidebarOpened} onClose={closeSidebar} />
        <div className="  sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-36 xl:ml-80 xl:mr-44 my-10">
          <h2 className="  smallmobile:text-sm md:text-base xl:text-xl lg:text-lg text-second-title-gray">
            Let me tell you about...
          </h2>
          <div className=" flex items-end">
            <h1
              className={` smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl ${playfair_display.variable} font-serif`}
            >
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
              date="2024 - 2026"
              icon={<UPFComponent />}
              iconStyle={{
                background: "rgb(20, 20, 21)",
                color: "#fff",
                padding: "11px",
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Universidade de Passo Fundo
              </h3>
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Computer Science Degree
              </h4>
              <p>GPA: 9.4/10 &#40;Top 3 on class rank&#41;</p>
              <h5 className=" font-bold mt-1">Activities</h5>
              <ul className=" list-disc ml-1">
                <li>Mosaico Research Group - Computational Modeling and Simulation</li>
              </ul>
            </VerticalTimelineElement>
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
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Business Summer Course
              </h4>
              <h5 className=" font-bold mt-1">Learned about</h5>
              <ul className=" list-disc ml-1">
                <li>Corporate communication</li>
                <li>Business English</li>
                <li>Product innovation</li>
                <li>Product marketing</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
              date="2022 - 2024"
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
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Computer Science (Transfered to Universidade de Passo Fundo)
              </h4>
              <p>GPA: 9.3/10 &#40;Top 3 on class rank&#41;</p>
              <h5 className=" font-bold mt-1">Activities</h5>
              <ul className=" list-disc ml-1">
                <li>Research internship</li>
                <li>Google Cloud Computing Foundations Academy Scholar</li>
                <li>
                  UNIGOU Training Program for International Research Publication
                </li>
              </ul>
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
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                High School Diploma
              </h4>
              <p>GPA: 8.2/10 &#40;Top 4 on class rank&#41;</p>
              <h5 className=" font-bold mt-1">Activities</h5>
              <ul className=" list-disc ml-1">
                <li>Founded the school&#39;s first Model UN</li>
                <li>Created a mobile application for students</li>
                <li>
                  Candidate for vice-president of the Student Council
                  &#40;election canceled due to the pandemic&#41;
                </li>
                <li>
                  Top 11% on the National High School Examination &#40;ENEM&#41;
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}
