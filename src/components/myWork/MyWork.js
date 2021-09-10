import project from "../../assets/project.png";
import github from "../../assets/github1.svg";
import linkedin from "../../assets/linkedin1.svg";
import twitter from "../../assets/twitter1.svg";
const MyWork = () => {
  const projects_data = [
    {
      id: 1,
      title: "Covid Vaccine Notification System",
      content:
        "I created a covid vaccination notification system for the personal use. I used nodejs, expressJs and cowin rest apis in backend . I used mongodb for database",
      picture: project,
    },
    {
      id: 2,
      title: " Image visualization Dashboard",
      content:
        "I developed a dashboard for visualizing misclassified images using AngularJs, nodejs and MySQL while working as a Intern.",
      picture: project,
    },
    // {
    //   id: 3,
    //   title: "Covid Notification System",
    //   content:
    //     "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis exercitationem praesentium nihil.",
    //   picture: project,
    // },
  ];
  return (
    <div className="grid justify-items-center" id="work">
      <div className=" grid grid-rows justify-items-center px-8 gap-16 md:w-5/6">
        <div>
          <div className="flex justify-items-start">
            <h1 className=" text-left text-gray-900 font-sans text-lg font-bold md:text-5xl">
              My work
            </h1>
          </div>
          <p className="text-gray-600 font-sans text-x1  md:text-xl md:justify-end">
            I have started my journey with programming back in 2016 on
            Banasthali University with C and soon I shifted to Python which I
            mostly use for problem solving on coding paractices websites like
            HackerRank After finishing my graduation, I got internship
            apportunity in Walmart Labs india and there I got exposure of
            full-satck devlopment (Angular,NodeJs,ExpressJs,MySQL,Rest APIs).
            Since then, I have been working as full stack developer.
          </p>
        </div>

        <div className="grid grid-rows md:grid-flow-col md:grid-rows-1 gap-60  justify-items-stretch ">
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
            <a
              href="https://github.com/sneha025"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-maurya-54212a178/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://twitter.com/iamdivaDev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
