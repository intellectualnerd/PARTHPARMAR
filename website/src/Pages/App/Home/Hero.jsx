import heroimg from "./Parth.png";
import RotatingSkillsBar from "../Components/RotatingSkillsBar";
import HeroLine from "../Components/HeroLine";
const Hero = () => {
  return (
    <>
      <div className="mycontainer">
        <div className="row paddingContainer bottombar">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <HeroLine
              text="Turning Complexity into Seamless, Intelligent Experiences."
              highlights={["Seamless,", "Experiences."]}
            />
            <p className="descrp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in.
            </p>
            <button className="heroButton">
              Contact Now
              <svg
                id="nextArrow"
                width="12"
                height="12"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.20594 13L0 11.8462L5.58811 6.5L0 1.15375L1.20594 0L8 6.5L1.20594 13Z"
                  fill="#3C3D37"
                />
                <path
                  d="M1.20594 13L0 11.8462L5.58811 6.5L0 1.15375L1.20594 0L8 6.5L1.20594 13Z"
                  fill="#3C3D37"
                />
                <path
                  d="M7.20594 13L6 11.8462L11.5881 6.5L6 1.15375L7.20594 0L14 6.5L7.20594 13Z"
                  fill="#3C3D37"
                />
                <path
                  d="M7.20594 13L6 11.8462L11.5881 6.5L6 1.15375L7.20594 0L14 6.5L7.20594 13Z"
                  fill="#3C3D37"
                />
              </svg>
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={heroimg} className="heroimg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
