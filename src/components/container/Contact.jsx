import { useRef } from "react";
import massageIcon from "../../assets/maesageicon.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rws1b1h", "template_7csmllc", form.current, {
        publicKey: "yLuwGuvx1C3jNKnof",
      })
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="section" id="contact">
      <div className="text-center sm:text-3xl text-2xl font-bold mb-14">
        Contact <span className="text-Teal">Me</span>
      </div>
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">Get in touch</div>
          <p className="text-sm leading-7 text-gray mb-5">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 rounded-xl">
            <input type="text" placeholder="Full Name *" name="user_name" className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" required />
            <input type="email" placeholder="Email *" name="user_email" className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" required />
            <textarea name="message" className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" placeholder="Message *" cols="20" rows="3"></textarea>
            <button type="submit" className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
              Send Message
            </button>
          </form>
        </div>
        <div className="p-4  md:w-3/4 sm:row-start-1">
          <img src={massageIcon} alt="Message Icons" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
