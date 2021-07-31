import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import dance from "../../assets/dance.svg";
import ai from "../../assets/ai.svg";
import scroll from "../../assets/scroll.svg";
const AboutMe = () => {
  return (
    <div className="grid justify-items-center overflow-hidden" id="about">
      <div className="grid grid-rows-2  my-40 px-8 gap-4 md:w-5/6">
        <div>
          <h1 className="text-left text-gray-900 font-sans text-lg font-bold md:text-5xl">
            About me
          </h1>
          <p className="text-gray-600 font-sans text-x1  md:text-2xl md:justify-end">
            I'm an innovative software engineer with 1 year of experience.
            Currently working as software developer in{" "}
            <b>Walmart Global Tech</b> Bangalore, India. Recently I'm developing
            a mobile app for planning trips and travel.
          </p>
        </div>
        <div className="flex justify-center m-auto gap-5 md:gap-16">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg ">
            <img src={javascript} alt="" />
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
            <img src={dance} alt="" />
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
            <img src={react} alt="" />
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
            <img src={ai} alt="" />
          </button>
        </div>
        <div className=" flex justify-center grid grid-flow-row grid-rows-2 mt-16 ">
          <span className=" flex justify-center animate-bounce ">
            <img src={scroll} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
