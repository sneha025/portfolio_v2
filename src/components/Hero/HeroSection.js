import profile from "../../assets/profile.png";
import scroll from "../../assets/scroll.svg";
import india from "../../assets/india.svg";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="grid justify-items-center">
      <div className="grid grid-cols-2 grid-flow-col  ">
        <div className=" py-20 my-8 mx-8 md:mx-0 ">
          <p className=" text-gray-600 font-sans text-lg md:text-5xl  ">
            Hi there! I'm
          </p>
          <p className=" text-gray-900 font-sans text-lg md:text-5xl">
            <b>Sneha</b>
          </p>
        </div>
        <div className="my-8 w-40 md:mx-8 justify-center">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-flow-row grid-rows-3 gap-12 m-5">
          <div className=" flex justify-center grid grid-flow-row grid-rows-2">
            <div className="text-gray-600 font-sans text-x1 md:text-2xl flex justify-center">
              I'm a Softwar engineer and
            </div>
            <div>
              <p className="text-gray-600 font-sans text-x1  md:text-2xl flex">
                web developer from Varanasi,India <s />
                <img src={india} className="mx-4" alt="" />
              </p>
            </div>
          </div>
          <div className=" flex justify-center ">
            <Link to="contact" spy={true} smooth={true} activeClass="active">
              <button
                type="button"
                className="bg-transparent hover:bg-purple-600 text-black-900 font-semibold hover:text-white py-2 px-4 border border-purple-600
 hover:border-transparent rounded  duration-150"
              >
                Reach Out to me
              </button>
            </Link>
          </div>
          <div className=" flex justify-center grid grid-flow-row grid-rows-2">
            <span className="text-gray-600 font-sans text-lg flex ">
              SCROLL
            </span>
            <span className=" flex justify-center animate-bounce ">
              <img src={scroll} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
