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
      <div className="container mx-auto max-w-sm">
        <div className="card w-auto bg-base-100 shadow-xl">
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
