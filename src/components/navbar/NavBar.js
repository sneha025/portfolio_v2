import { useState } from "react";
import hamburger from "../../assets/hamburger2.svg";
import close from "../../assets/close.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-scroll";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const design1 = "bg-white-0 flex justify-between p-4  ";
  const design2 = "bg-purple-600 flex justify-between p-4  ";
  const [style, setStyle] = useState(design1);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStyle(design2);
    } else if (isOpen) {
      setStyle(design1);
    }
  };
  return (
    <div className="relative">
      <div className={style}>
        <h1 className="text-left text-gray-900 font-sans text-lg font-bold ">
          SNEHA MAURYA
        </h1>

        <div className=" invisible md:visible w-0 md:w-1/2">
          <div className="grid md:grid-rows-1 grid-cols-4 gap-4 justify-items-center font-sans text-lg font-semibold  text-gray-700  ">
            <Link to="about" spy={true} smooth={true}>
              <button>About Me</button>
            </Link>
            <Link to="work" spy={true} smooth={true}>
              <button>My Work</button>
            </Link>
            <a href="https://medium.com/@simaurya96">
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
          {!isOpen && <img src={hamburger} />}

          {isOpen && <img src={close} />}
        </button>
      </div>
      {isOpen && (
        <div className="z-auto w-screen absolute h-screen bg-purple-600 ">
          <div className="grid md:grid-rows-4 gap-12 justify-items-center py-20 ">
            <Link to="about" spy={true} smooth={true}>
              About Me
            </Link>
            <Link to="work" spy={true} smooth={true}>
              My Work
            </Link>
            <a href="https://medium.com/@simaurya96">
              {" "}
              <button>Blog</button>
            </a>

            <Link to="contact" spy={true} smooth={true} activeClass="active">
              <button type="button">Contact Me</button>
            </Link>
          </div>
          <div className="flex justify-center gap-12">
            <a href="https://github.com/sneha025" className="mx-2">
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-maurya-54212a178/"
              className="mx-2"
            >
              <img src={linkedin} alt="" />
            </a>
            <a href="https://twitter.com/iamdivaDev" className="mx-2">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
