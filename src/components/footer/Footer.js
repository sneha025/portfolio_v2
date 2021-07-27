const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-800   p-2 md:mt-20">
      <div className="my-2 mx-auto font-medium text-white">
        © 2021 Sneha Maurya{" "}
      </div>
      <div className="mx-auto font-medium text-white">
        Made by{" "}
        <span className="font-bold underline text-white">
          <a href="https://www.linkedin.com/in/sneha-maurya-54212a178/">
            Sneha Maurya
          </a>{" "}
        </span>
      </div>
    </div>
  );
};
export default Footer;
