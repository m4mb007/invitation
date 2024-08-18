import "../components/Birthday.css";
import { EmblaCarousel } from "./imageSlider";

const Birthday = () => {
  return (
    <>
      <div className="card">
        <div className="card-header background"></div>
        <div className="card-body background_sec02">
          <img src="/02.png" alt="Slide 3" height="400px" />
          <p>We are so excited to celebrate with you on August 24th!</p>
          <p>Let's make this day full of fun and laughter!</p>
          <EmblaCarousel />
        </div>
      </div>
    </>
  );
};

export default Birthday;
