import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navItem = [
  {
    id: 1,
    icon: <FaUserFriends className="text-xl text-white" />,
    title: "List Users",
    link: "/",
  },

  {
    id: 2,
    icon: <FaUser className="text-xl text-white" />,
    title: "User",
    link: "/user",
  },
];

export default navItem;
