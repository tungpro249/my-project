"use client";
import React, { useEffect } from "react";
import { Layout, Avatar, Typography, Row, Col, Card, Space } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import AOS from "aos";

const { Content } = Layout;
const { Link } = Typography;

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Vue", icon: <FaVuejs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <a
        href="/assets/Doan-Thanh-Tung-cv.pdf"
        download
        className="fixed bottom-10 right-6 z-50 bg-red-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300 transform"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Download CV
      </a>

      <Content className="p-6 md:p-12 max-w-7xl mx-auto">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={8} data-aos="zoom-in" data-aos-delay="100">
            <Avatar
              size={200}
              src="/assets/my-avatar.png"
              className="border-4 border-transparent group-hover:border-blue-500 group-hover:scale-105 transition duration-300"
            />
          </Col>

          <Col xs={24} md={16}>
            <h2
              data-aos="fade-right"
              className="dark:text-blue-400 text-4xl font-bold mb-3"
            >
              Doan Thanh Tung
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-gray-700 dark:text-gray-300 mb-3"
            >
              I’m a Frontend Developer with 2 years of experience in React and 1
              year with Vue.js. I’m proficient in UI libraries such as Ant
              Design, Material UI, and Bootstrap, with strong knowledge of HTML,
              CSS, JavaScript, and TypeScript. I also have experience in web
              performance optimization, responsive design, and teamwork in
              Agile/Scrum environments.
            </p>

            <Space size="middle">
              <Link
                href="https://github.com/tungpro249"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Doan Thanh Tung's GitHub profile"
              >
                <GithubOutlined className="text-2xl text-gray-700 dark:!text-gray-100 hover:text-blue-500 transition duration-300" />
              </Link>

              <Link
                href="https://linkedin.com/in/t%C3%B9ng-%C4%91o%C3%A0n-3b1292236"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Doan Thanh Tung's LinkedIn profile"
              >
                <LinkedinOutlined className="text-2xl text-gray-700 dark:!text-gray-100 hover:text-blue-500 transition duration-300" />
              </Link>
            </Space>
          </Col>
        </Row>

        {/* Work Experience */}
        <div className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            Work Experience
          </h2>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="100">
            <Timeline
              mode="left"
              items={[
                {
                  label: (
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      2022-04-01
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold dark:text-blue-400">
                      Internship at Comit
                    </p>
                  ),
                },
                {
                  label: (
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      2022-09-01
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold dark:text-blue-400">
                      Became Full-time Employee
                    </p>
                  ),
                },
                {
                  children: (
                    <p className="text-blue-600 font-semibold dark:text-blue-400">
                      Frontend Developer
                    </p>
                  ),
                },
                {
                  label: (
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      2024-06-01
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold dark:text-blue-400">
                      VDTSol
                    </p>
                  ),
                },
                {
                  label: (
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      2025-01-01
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold dark:text-blue-400">
                      Minh Tri Thanh Academy JSC
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="space-y-6">
            {[
              {
                company: "Minh Tri Thanh Academy JSC",
                duration: "01/2025 - Present",
                tasks: [
                  "Frontend Developer.",
                  "- Build reusable components across the system.",
                  "- Integrate and work with backend APIs.",
                  "- Collaborate with BA and design teams.",
                  "- Build landing pages and responsive web layouts.",
                ],
              },
              {
                company: "VDTSol",
                duration: "06/2023 - 12/2024",
                tasks: [
                  "Frontend Developer.",
                  "- Build reusable UI components.",
                  "- Work with backend APIs.",
                  "- Support interns in the frontend team.",
                ],
              },
              {
                company: "Comit Corporation",
                duration: "04/2022 - 05/2023",
                tasks: [
                  "Intern → Full-time Employee.",
                  "- Learn and assist in building internal systems.",
                  "- Build reusable components.",
                  "- Integrate and collaborate with backend developers.",
                ],
              },
            ].map((exp, index) => (
              <div
                key={exp.company}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                <ul className="list-disc pl-5 text-gray-700">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            Skills
          </h2>
          <Row gutter={[16, 16]}>
            {skills.map((skill, index) => (
              <Col xs={12} md={8} key={skill.name}>
                <Card
                  className="hover:scale-105 hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800 dark:text-gray-100"
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Projects */}
        <div className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            Projects
          </h2>
          <Row gutter={[16, 16]} className="p-4">
            {[
              {
                title: "AI Face Recognition Attendance System",
                description:
                  "An AI-powered attendance system using facial recognition, reducing delays and improving monitoring for employees.",
                tech: "React.js, Material-UI, Context, WebSocket, React Router DOM",
              },
              {
                title: "PN-Stack",
                description:
                  "An ERP system providing management solutions for warehouse, employees, sales, and analytics.",
                tech: "React.js, Ant Design, React Query",
              },
              {
                title: "ERP-SPACE",
                description:
                  "An ERP platform for business management including inventory, HR, and sales statistics.",
                tech: "Vue 3, Ant Design, Pinia",
              },
            ].map((project, index) => (
              <Col xs={24} md={12} key={project.title}>
                <div
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <Card
                    title={
                      <span className="text-lg font-semibold text-blue-700">
                        {project.title}
                      </span>
                    }
                    bordered={false}
                  >
                    <p className="text-gray-700 mb-2">
                      <strong className="text-gray-600">Description:</strong>{" "}
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong className="text-gray-600">Tech Stack:</strong>{" "}
                      {project.tech}
                    </p>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            Education
          </h2>
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-gray-800 font-semibold">
              University of Transport and Communications
            </p>
            <p className="text-gray-600">Major: Computer Networks</p>
            <p className="text-gray-600">English Level: B1 (Intermediate)</p>
          </div>
        </div>
      </Content>
    </div>
  );
}
