import { useEffect } from "react";
import { useState } from "react";
import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data.team);
      });
  }, []);

  return (
    <div data-aos="fade-left">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          {/* <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Meet Our Team
            </h2>
           
          </div> */}
          <div className="relative">
            <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
              TEAM
            </h1>
            <h1 className="text-4xl font-bold"> Meet Our <span className="text-yellow-500"> Team
            </span> </h1>
            <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
              <div className="flex-1 h-2 bg-yellow-200">
              </div>
              <div className="flex-1 h-2 bg-yellow-300">
              </div>
              <div className="flex-1 h-2 bg-yellow-400">
              </div>
            </div>
            <p className="mb-6 md:pr-36">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur cupiditate optio nulla repellat sapiente harum consequuntur, quas natus praesentium reiciendis omnis expedita tempora voluptates officiis ab dolores quam earum magni.

            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {team.map((member, ind) => (
              <div
                key={ind}
                className="items-center bg-gray-50 rounded-lg shadow md:flex mb-4"
              >
                <a href="#" className="md:w-1/2 ">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:h-64 object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </a>
                <div className="md:w-1/2 p-5">
                  <h3 className="text-xl font-bold text-[#4A55A2] tracking-tight">
                    <a href="#">{member.name}</a>
                  </h3>
                  <span className="text-gray-500">{member.designation}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">
                    {member.description}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0 text-[#7895CB] text-xl">
                    <li>
                      <a href={`mailto:$mailto:${member.email}`}>
                        <MdEmail />
                      </a>
                    </li>
                    <li>
                      <a href={member.website}>
                        <FaGlobe />
                      </a>
                    </li>
                    <li>
                      <a href={member.linkedin}>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href={member.github}>
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
