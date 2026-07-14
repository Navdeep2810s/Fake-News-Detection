import Navbar from "../components/navbar/navbar";
import "./Dashboard.css";

import {
  FaNewspaper,
  FaCheckCircle,
  FaTimesCircle,
  FaBullseye,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    total_predictions: 0,
    real_news: 0,
    fake_news: 0,
    average_confidence: 0,
    recent_predictions: [],
  });

  

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get(
          "https://fake-news-detection-sz5o.onrender.com/dashboard"
        );
  
        setStats(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchDashboard();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <p>Monitor your Fake News Detection system performance.</p>

        <div className="stats-grid">
          <div className="stat-box">
            <FaNewspaper className="dash-icon" />
            <h2>{stats.total_predictions}</h2>
            <span>Total Predictions</span>
          </div>

          <div className="stat-box">
            <FaCheckCircle className="dash-icon" />
            <h2>{stats.real_news}</h2>
            <span>Real News</span>
          </div>

          <div className="stat-box">
            <FaTimesCircle className="dash-icon" />
            <h2>{stats.fake_news}</h2>
            <span>Fake News</span>
          </div>

          <div className="stat-box">
            <FaBullseye className="dash-icon" />
            <h2>{stats.average_confidence}%</h2>
            <span>Average Confidence</span>
          </div>
        </div>

        <div className="recent">
          <h2>Recent Predictions</h2>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Prediction</th>
                <th>Confidence</th>
              </tr>
            </thead>

            <tbody>
              {stats.recent_predictions.length > 0 ? (
                stats.recent_predictions.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>

                    <td
                      className={
                        item.prediction === "Real News"
                          ? "real"
                          : "fake"
                      }
                    >
                      {item.prediction}
                    </td>

                    <td>{item.confidence}%</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No predictions available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;