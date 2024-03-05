import hero from "../../assets/hero.png";
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xl text-teal-500 mb-4">
            Halo Semua 👋
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Saya Fauzi Bahar
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Backend Developer
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              About Me
            </button>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="btn btn-square">
              <FaGithub />
            </button>
            <button className="btn btn-square">
              <FaWhatsapp />
            </button>
            <button className="btn btn-square">
              <FaInstagram />
            </button>
            <button className="btn btn-square">
              <FaLinkedin />
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
