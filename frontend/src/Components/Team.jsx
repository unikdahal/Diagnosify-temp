import TeamCard from "./TeamCard";
import img1 from "../assets/team/img1.png";
import img2 from "../assets/team/img2.png";
import img3 from "../assets/team/img3.png";

const Team = () => {
  return (
    <div className="pb-40" id="our-team">
      <div class="text-sky-800 text-6xl font-bold poppins px-20 py-20">
        Meet Our Team
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        <TeamCard
          img={img1}
          name="Ajay Khatri"
          role="UI/UX Designer & FrontEnd Developer"
        />
        <TeamCard img={img3} name="Aayush Sinha " role="ML/AI Developer" />
        <TeamCard img={img2} name="Tushar Karna" role="BackEnd Developer" />
      </div>
    </div>
  );
};

export default Team;
