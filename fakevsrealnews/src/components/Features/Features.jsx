import "./Features.css";
import { FaBrain, FaBolt, FaShieldAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose Our model?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <FaBrain className="feature-icon" />
          <h3>Machine Learning</h3>
          <p>
            Our  model analyzes news articles using NLP and
            Machine Learning techniques.
          </p>
        </div>

        <div className="feature-card">
          <FaBolt className="feature-icon" />
          <h3>Fast Detection</h3>
          <p>
            Get fake or real news predictions in just a few
            seconds.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Reliable Results</h3>
          <p>
            High prediction accuracy using trained machine
            learning models.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;