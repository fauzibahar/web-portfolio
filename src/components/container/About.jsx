import about from "../../assets/aboutfoto.jpg";
import { skills } from "../../data/index";
const About = () => {
  return (
    <div className="section" id="about">
      <h1 className="text-3xl font-bold text-center mb-14">
        About <span className="text-Teal">Me</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="about" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] text-Teal mb-5">Fauzi Bahar</div>
          <p className="text-sm text-gray leading-7 mb-4">
            Fresh graduate from Information Technology, STMIK Dharma Negara Bandung, Passionate about developing innovative and efficient solutions using the latest technology. Looking for opportunities to develop skills as a Backend
            developer in a dynamic and innovative environment.
          </p>
          <a href="https://drive.google.com/file/d/1BSq5XEGRkrU8DacXUYByhnJuKJSeJJ8q/view?usp=sharing" target="_blank">
            <button className="py-3 px-6 text-sm border  bg-Teal text-white rounded-lg font-bold">Curriculum Vitae</button>
          </a>
        </div>
      </div>

      <h1 className="text-2xl text-Teal font-bold text-center my-7">Tech Stack</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-2 mt-12 gap-8">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="flex items-center flex-col bg-white p-8 rounded-lg ">
              <img src={skill.img} alt={skill.img} className="h-20 w-20" />
              <p className="text-center mt-4">{skill.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
