import "./Stats.css";

import {
  FaBullseye,
  FaNewspaper,
  FaClock,
  FaServer,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <h2>Trusted AI News Verification</h2>

      <div className="stats-container">

        <div className="stat-card">
          <FaBullseye className="stat-icon" />
          <h3>98.7%</h3>
          <p>Model Accuracy</p>
        </div>

        <div className="stat-card">
          <FaNewspaper className="stat-icon" />
          <h3>45K+</h3>
          <p>Articles Used</p>
        </div>

        <div className="stat-card">
          <FaClock className="stat-icon" />
          <h3>&lt; 2 sec</h3>
          <p>Prediction Time</p>
        </div>

        <div className="stat-card">
          <FaServer className="stat-icon" />
          <h3>24/7</h3>
          <p>Availability</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;