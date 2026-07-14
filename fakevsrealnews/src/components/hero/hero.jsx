import "./hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero2.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          ML Based <span>Fake News Detection</span>
        </h1>

        <p>
          Verify news articles instantly using Machine Learning and
          Natural Language Processing. Our model helps identify
          whether news is real or fake with high accuracy.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/detect")}>
            Detect News
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="AI Illustration" />
      </div>

    </section>
  );
}

export default Hero;