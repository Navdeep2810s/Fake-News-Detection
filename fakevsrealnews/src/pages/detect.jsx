import { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/navbar";
import "./Detect.css";

import { FaUpload, FaRobot } from "react-icons/fa";

function Detect() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const analyzeNews = async () => {

    try {
  
      setLoading(true);
  
      let response;
  
      if (file) {
  
        const formData = new FormData();
  
        formData.append("file", file);
  
        response = await axios.post(
          "http://127.0.0.1:5000/upload",
          formData
        );
  
      } else {
  
        response = await axios.post(
          "http://127.0.0.1:5000/predict",
          {
            text
          }
        );
  
      }
  
      setResult(response.data);
  
    } catch (error) {
  
      console.log(error);
  
    } finally {
  
      setLoading(false);
  
    }
  
  };

  return (
    <>
      <Navbar />

      <section className="detect-page">
        <h1>AI Fake News Detection</h1>

        <p>
          Paste a news article below or upload a TXT file and let our AI analyze
          it.
        </p>

        <textarea
          placeholder="Paste your news article..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="detect-buttons">
          <label className="upload-btn">
            <FaUpload />
            Upload TXT File

            <input
              type="file"
              accept=".txt,.pdf"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <button className="detect-btn" onClick={analyzeNews}>
            <FaRobot />
            Analyze News
          </button>
        </div>

        {loading && (
          <h2 style={{ marginTop: "30px" }}>Analyzing...</h2>
        )}

        {result && (
          <div className="result-card">
            <h2>{result.prediction}</h2>

            <p>
              <strong>Confidence:</strong> {result.confidence}%
            </p>

            <p>
              <strong>Model:</strong> {result.model}
            </p>

            <p>
              <strong>Analysis:</strong>
            </p>

            <p>{result.explanation}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Detect;