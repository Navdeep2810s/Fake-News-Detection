import Navbar from "../components/navbar/navbar";
import "./About.css";

import aboutImage from "../assets/about.png";

import {
  FaCheckCircle,
  FaReact,
  FaPython,
  FaBrain,
  FaServer,
} from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">

        <div className="about-top">

          <div className="about-image">
            <img src={aboutImage} alt="AI" />
          </div>

          <div className="about-content">

            <h1>About Fake News Detection</h1>

            <p>
              Fake News Detection is an AI-powered web application
              that analyzes news articles using Machine Learning and
              Natural Language Processing. It helps users identify
              whether a news article is genuine or fake.
            </p>

          </div>

        </div>

      </section>

      <section className="why">

        <h2>Why Detect Fake News?</h2>

        <div className="why-container">

          <div className="why-card">
            <FaCheckCircle className="why-icon"/>
            <h3>Stop Misinformation</h3>
            <p>Reduce the spread of false information.</p>
          </div>

          <div className="why-card">
            <FaCheckCircle className="why-icon"/>
            <h3>Improve Awareness</h3>
            <p>Help people verify online information.</p>
          </div>

          <div className="why-card">
            <FaCheckCircle className="why-icon"/>
            <h3>Support Journalism</h3>
            <p>Promote reliable news sources.</p>
          </div>

        </div>

      </section>

      <section className="technology">

        <h2>Technologies Used</h2>

        <div className="tech-container">

          <div className="tech-card">
            <FaReact className="tech-icon"/>
            <p>React</p>
          </div>

          <div className="tech-card">
            <FaPython className="tech-icon"/>
            <p>Python</p>
          </div>

          <div className="tech-card">
            <FaBrain className="tech-icon"/>
            <p>Machine Learning</p>
          </div>

          <div className="tech-card">
            <FaServer className="tech-icon"/>
            <p>Flask API</p>
          </div>

        </div>

      </section>

      <section className="objective">

        <h2>Project Objective</h2>

        <p>
          The objective of this project is to develop an AI-powered
          fake news detection system capable of classifying news
          articles with high accuracy using Machine Learning,
          Natural Language Processing, and a user-friendly web
          interface.
        </p>

      </section>

    </>
  );
}

export default About;