"use client";
import { useEffect } from "react";
import { Layout, Avatar, Row, Col, Card, Space, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import AOS from "aos";
import {
  skills,
  timelineEntries,
  workExperiences,
  projects,
  bio,
} from "./data";

const { Content } = Layout;
const { Link } = Typography;

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });
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
        {/* ── Hero / Bio ── */}
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
              {bio.name}
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-gray-700 dark:text-gray-300 mb-3"
            >
              {bio.description}
            </p>

            <Space size="middle">
              <Link
                href={bio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
              >
                <GithubOutlined className="text-2xl text-gray-700 dark:!text-gray-100 hover:text-blue-500 transition duration-300" />
              </Link>
              <Link
                href={bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <LinkedinOutlined className="text-2xl text-gray-700 dark:!text-gray-100 hover:text-blue-500 transition duration-300" />
              </Link>
            </Space>
          </Col>
        </Row>

        {/* ── Work Experience ── */}
        <section className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            Work Experience
          </h2>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="100">
            <Timeline
              mode="left"
              items={timelineEntries.map((entry) => ({
                label: entry.label ? (
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    {entry.label}
                  </span>
                ) : undefined,
                children: (
                  <p className="text-blue-600 font-semibold dark:text-blue-400">
                    {entry.title}
                  </p>
                ),
              }))}
            />
          </div>

          <div className="space-y-6">
            {workExperiences.map((exp, index) => (
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
        </section>

        {/* ── Skills ── */}
        <section className="mt-12">
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
        </section>

        {/* ── Projects ── */}
        <section className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            Projects
          </h2>
          <Row gutter={[16, 16]} className="p-4">
            {projects.map((project, index) => (
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
        </section>

        {/* ── Education ── */}
        <section className="mt-12">
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
              {bio.education.university}
            </p>
            <p className="text-gray-600">Major: {bio.education.major}</p>
            <p className="text-gray-600">
              English Level: {bio.education.english}
            </p>
          </div>
        </section>
      </Content>
    </div>
  );
}
