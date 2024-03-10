import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <motion.form initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} className="mt-5">
        <div className="text-center sm:text-3xl text-2xl font-bold mb-14">
          Contact <span className="text-Teal">Me</span>
        </div>
        <div className="grid sm:grid-cols-2 place-items-center gap-8">
          <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">Get in touch</div>
            <p className="text-sm leading-7 text-gray mb-5">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>

            <form action="" className="flex flex-col gap-4 rounded-xl">
              <input type="text" placeholder="Full Name *" className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
              <input type="text" placeholder="Email *" className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
              <textarea name="message" className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" placeholder="Message *" id="" cols="20" rows="3"></textarea>
              <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">Send Message</button>
            </form>
          </div>
          <div className="p-4 md:w-3/4 sm:row-start-1 ">
            <img src="/src/assets/teacher1.png" alt="" />
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
