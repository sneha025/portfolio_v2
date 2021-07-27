import ContactForm from "../contact/ContactForm";
const ContactSection = () => {
  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-rows justify-item-center gap-0"
        id="contact"
      >
        <div className="py-5 md:m-32 justify-item-center invisible md:visible h-0">
          <span className="text-gray-700 font-sans text-lg md:text-4xl ">
            Let's get started. <br />
            Have any questions for me?
          </span>
        </div>
        <div className="md:mr-20 justify-item-center p-4">
          <ContactForm />
        </div>
      </div>
    </>
  );
};
export default ContactSection;
