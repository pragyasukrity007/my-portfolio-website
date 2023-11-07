import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";


function Contactme() {
  const contacts = [
    {
      id: 1,
      name: "Chennai, India",
      icon: <FiMapPin />,
    },
    {
      id: 2,
      name: "pragyasukrity2712@gmail.com",
      icon: <FiMail />,
    },
    {
      id: 3,
      name: "+916380061842",
      icon: <FiPhone />,
    },
    {
      id: 4,
      name: "https://www.linkedin.com/in/pragya-sukrity",
      icon: <FiLinkedin />,
    },
    {
      id: 5,
      name: "https://github.com/pragyasukrity007",
      icon: <FiGithub />,
    },
  ];

  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200 shadow-xl w-11/12 m-auto mt-10"
      >
        <div className="collapse-title text-xl font-medium">
          Reach Me Directly
        </div>
        <div className="collapse-content">
          <p>Hello there!</p>
          <p>
            Thank you for visiting my portfolio. If you have any questions,
            opportunities, or just want to connect, feel free to reach out. I am
            always eager to collaborate on exciting projects or discuss how my
            skills in full-stack development can contribute to your team
            {"'"}s success.
          </p>
          <p>Looking forward to hearing from you!</p>
          <p>Best regards,</p>
          <p>Pragya</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="card bg-base-200 shadow-xl w-11/12 m-auto">
          <div className="card-body">
            <ul className="font-general-regular">
              {contacts.map((contact) => (
                <li className="flex " key={contact.id}>
                  <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                    {contact.icon}
                  </i>
                  <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                    {contact.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactme;
