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
        className="collapse collapse-plus border border-base-300 bg-base-200 mt-10 w-11/12 m-auto"
      >
        <div className="collapse-title text-xl font-medium">
          Reach Me Directly
        </div>
        <div className="collapse-content">
          Hey there, Thanks a bunch for stopping by my portfolio! Whether you
          are checking out my projects or considering a collaboration, your
          visit is appreciated. Feel free to shoot me a message if you have any
          questions or if there is something specific you would like to chat
          about. Looking forward to the possibility of connecting! Best, Pragya
          Sukrity
        </div>
      </div>

      <div className="mt-10 mt-10px">
        <div className="card bg-base-100 shadow-xl w-11/12 m-auto">
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
