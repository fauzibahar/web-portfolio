import about from "../../assets/About2.jpg";
import { skills } from "../../data/index";
const About = () => {
  return (
    <div className="section" id="about">
      <h1 className="text-3xl font-bold text-center mb-14">
        About <span className="text-Teal">Me</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] text-Teal mb-5">Fauzi Bahar</div>
          <p className="text-sm text-gray leading-7 mb-4">
            I am a Full-Stack developer based in Pune, India. I'm an Information Technology undergraduate from SPPU, and my journey in web development began during my first year of college. I'm passionate about creating beautiful,
            functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.
          </p>
          <a href="https://drive.google.com/file/d/1CsRdnTIaJisa4U9JSj-8CwDm3rN9rGUQ/view?usp=sharing">
            <button className="py-3 px-6 text-sm border border-solid border-gray hover:border-white rounded-lg font-bold hover:bg-Teal hover:text-white">Curriculum Vitae</button>
          </a>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-7">Tech Stack</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-2 mt-12 gap-8">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="flex items-center flex-col bg-white p-8 rounded-md ">
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
