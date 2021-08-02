import project from "../../assets/project.png";
import github from "../../assets/github1.svg";
import linkedin from "../../assets/linkedin1.svg";
import twitter from "../../assets/twitter1.svg";
const MyWork = () => {
  const projects_data = [
    {
      id: 1,
      title: "Covid Notification System",
      content:
        "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis exercitationem praesentium nihil.",
      picture: project,
    },
    {
      id: 2,
      title: "Covid Notification System",
      content:
        "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis exercitationem praesentium nihil.",
      picture: project,
    },
    {
      id: 3,
      title: "Covid Notification System",
      content:
        "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis exercitationem praesentium nihil.",
      picture: project,
    },
  ];
  return (
    <div className="grid justify-items-center" id="work">
      <div className=" grid grid-rows justify-items-center px-8 gap-16 md:w-5/6">
        <div>
          <h1 className=" text-left text-gray-900 font-sans text-lg font-bold md:text-5xl">
            My work
          </h1>
          <p className="text-gray-600 font-sans text-x1  md:text-2xl md:justify-end">
            Some of my projects are listed below.
          </p>
        </div>

        <div className="grid grid-rows-3 md:grid-flow-col md:grid-rows-1 justify-items-center gap-4 sx:overscroll-contain ">
          {projects_data.map((item) => {
            const { id, title, content, picture } = item;

            return (
              <div className="max-w-sm rounded shadow-lg" key={id}>
                <img className="w-full" src={picture} alt="profileImahe" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{content}</p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-center">
                  <button
                    type="button"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" grid grid-rows  justify-items-center gap-4">
          <span className="text-gray-600 font-sans text-x1">MORE IN</span>
          <span className="max-w-sm h-10 rounded rounded-full shadow-lg flex m-4 grid grid-cols-3 p-auto gap-4 justify-items-center">
            <a href="https://github.com/sneha025">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/sneha-maurya-54212a178/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://twitter.com/iamdivaDev">
              <img src={twitter} alt="twitter" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
