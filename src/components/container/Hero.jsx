import hero from "../../assets/hero.png";
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="section" id="home">
      <div className="items-center md:flex justify-between">
        <div>
          <div className="font-bold text-xl text-gray  mb-4">Hey There, 👋</div>
          <div className="sm:text-[2.5rem] text-[1.825rem] text-Teal font-bold">I'm Fauzi Bahar</div>
          <p className="text-lg leading-7 text-gray max-w-sm">Backend Developer</p>
          <div className="mt-6">
            <a href="#about">
              <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">About Me</button>
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="https://github.com/fauzibahar" target="_blank">
              <button className="btn btn-square">
                <FaGithub className="hover:text-Teal" size={25} />
              </button>
            </a>
            <a href="https://wa.me/6282211329243" target="_blank">
              <button className="btn btn-square">
                <FaWhatsapp className="hover:text-Teal" size={25} />
              </button>
            </a>
            <a href="https://www.instagram.com/baae.har/" target="_blank">
              <button className="btn btn-square">
                <FaInstagram className="hover:text-Teal" size={25} />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/fauzi-bahar-67828b245/" target="_blank">
              <button className="btn btn-square">
                <FaLinkedin className="hover:text-Teal" size={25} />
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-[50%] mt-7">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
