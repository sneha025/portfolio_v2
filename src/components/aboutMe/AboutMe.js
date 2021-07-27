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
            Currently working as software developer in Bangalore, India.
            Currently working as software developer in Bangalore, India.
            Currently working as software developer in Bangalore, India.
          </p>
        </div>
        <div className="flex justify-center m-auto gap-5 md:gap-16">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg ">
            <img src={javascript} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
            <img src={dance} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
            <img src={react} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
            <img src={ai} />
          </button>
        </div>
        <div className=" flex justify-center grid grid-flow-row grid-rows-2 mt-16 ">
          <span className=" flex justify-center ">
            <img src={scroll} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
