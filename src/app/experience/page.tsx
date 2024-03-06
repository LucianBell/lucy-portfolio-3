"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LalaComponent from "@/components/logo-components/LalaComponent";
import LawComponent from "@/components/logo-components/LawComponent";
import HNCComponent from "@/components/logo-components/HistoriasNaoContadasComponent";
import LBBCComponent from "@/components/logo-components/LbbcComponent";
import { Playfair_Display } from "@next/font/google";

const playfair_display: any = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function Experience() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  return (
    <>
      <div className=" bg-color-black">
        <Header openSidebarClick={openSidebar} />
        <Sidebar open={sidebarOpened} onClose={closeSidebar} />
        <div className=" bg-color-black sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-36 xl:ml-80 xl:mr-44 my-10">
          <h2 className="  smallmobile:text-sm md:text-base xl:text-xl lg:text-lg text-second-title-gray">
            Let me tell you about...
          </h2>
          <div className=" flex items-end">
            <h1
              className={` smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl ${playfair_display.variable} font-serif`}
            >
              My Experience
            </h1>
            <BsFillRocketTakeoffFill className=" smallmobile:text-3xl lg:text-4xl ml-5 xl:text-5xl" />
          </div>
        </div>

        <div className=" bg-color-black smallmobile:ml-5 md:ml-64 lg:ml-72 ml-80">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
              date="DEC / 2023 - MOMENT"
              icon={<LBBCComponent />}
              iconStyle={{
                background: "rgb(20, 20, 21)",
                color: "#fff",
                padding: "8px",
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Data Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Laboratório de Bioinformática e Biologia Computacional (LBBC) |
                Rio de Janeiro - Brazil (Remotely)
              </h4>
              <p>
                Python - Bash - Linux - Nextflow - Data Pipelines - GitLab -
                Docker
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
              date="APR / 2023 - OCT / 2023"
              icon={<HNCComponent />}
              iconStyle={{
                background: "rgb(20, 20, 21)",
                color: "#fff",
                padding: "10px",
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Histórias Não Contadas | Sergipe - Brazil (Remotely)
              </h4>
              <p>React - TypeScript - Next.js - Git - Github - TailwindCSS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
              date="OCT / 2022 - APR / 2023"
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
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Latin American Leadership Academy | Medellín - Colombia
                (Remotely)
              </h4>
              <p>
                Data cleaning - Process automation - Survey questionnaire design
                - Data science - Microsoft Excel - Data analysis
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
              date="SEP / 2022 - JAN / 2023"
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
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Latin American Leadership Academy | Medellín - Colombia
                (Remotely)
              </h4>
              <p>
                Interviewing - Public speaking - Success orientation -
                Qualitative and quantitative research methodologies - Data
                analysis
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(49, 52, 56)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(49, 52, 56)" }}
              date="JAN / 2018 - MAY / 2022"
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
              <h4 className="vertical-timeline-element-subtitle italic text-second-title-gray">
                Bellini Advocacia (Law Office) | Giruá - Brazil
              </h4>
              <p>
                Microsoft Office - Customer service - Google Sheets - Social
                media - Secretary duties
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}
