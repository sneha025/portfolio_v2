import { useState } from "react";
import hamburger from "../../assets/hamburger2.svg";
import close from "../../assets/close.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-scroll";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      {!isOpen && (
        <div className="bg-white-0 flex justify-between p-4">
          <div className=" block h-8 w-8 bg-purple-600 flex justify-center">
            <h1 className="text-left text-white font-sans text-lg font-bold ">
              SM
            </h1>
          </div>

          <div className=" invisible md:visible w-0 md:w-1/2">
            <div className="grid md:grid-rows-1 grid-cols-4 gap-4 justify-items-center font-sans text-lg font-semibold  text-gray-700  ">
              <Link to="about" spy={true} smooth={true}>
                <button>About Me</button>
              </Link>
              <Link to="work" spy={true} smooth={true}>
                <button>My Work</button>
              </Link>
              <a
                href="https://medium.com/@simaurya96"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <button>Blog</button>
              </a>
              <Link to="contact" spy={true} smooth={true} activeClass="active">
                <button
                  type="button"
                  className="font-semibold text-sm text-gray-700 font-sans text-lg"
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <button type="button" className="md:hidden" onClick={handleClick}>
            <img src={hamburger} alt="" />
          </button>
        </div>
      )}
      {isOpen && (
        <div className="bg-purple-600 w-screen p-4 h-screen">
          <div className="flex justify-between">
            <h1 className="text-left text-gray-900 font-sans text-lg font-bold ">
              SNEHA MAURYA
            </h1>
            <button type="button" className="justify-end" onClick={handleClick}>
              <img src={close} alt="" />
            </button>
          </div>

          <div className="grid md:grid-rows-4 gap-12 justify-items-center py-20 ">
            <Link to="about" spy={true} smooth={true}>
              About Me
            </Link>
            <Link to="work" spy={true} smooth={true}>
              My Work
            </Link>
            <a
              href="https://medium.com/@simaurya96"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>Blog</button>
            </a>

            <Link to="contact" spy={true} smooth={true} activeClass="active">
              <button type="button">Contact Me</button>
            </Link>
          </div>
          <div className="flex justify-center gap-12">
            <a
              href="https://github.com/sneha025"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-maurya-54212a178/"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              href="https://twitter.com/iamdivaDev"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
