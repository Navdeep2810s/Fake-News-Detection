import "./HowItWorks.css";

import {
  FaRegNewspaper,
  FaBrain,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How It Works</h2>

      <p className="section-subtitle">
        Our  system analyzes news articles in four simple steps.
      </p>

      <div className="steps">

        <div className="step-card">
          <div className="step-number">1</div>

          <FaRegNewspaper className="step-icon"/>

          <h3>Paste News</h3>

          <p>
            Enter or paste any news article you want to verify.
          </p>
        </div>

        <div className="step-card">

          <div className="step-number">2</div>

          <FaBrain className="step-icon"/>

          <h3>AI Analysis</h3>

          <p>
            NLP techniques clean and analyze the news content.
          </p>

        </div>

        <div className="step-card">

          <div className="step-number">3</div>

          <FaRobot className="step-icon"/>

          <h3>ML Prediction</h3>

          <p>
            Our trained Machine Learning model predicts the result.
          </p>

        </div>

        <div className="step-card">

          <div className="step-number">4</div>

          <FaCheckCircle className="step-icon"/>

          <h3>Get Result</h3>

          <p>
            Receive Real or Fake prediction with confidence score.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;