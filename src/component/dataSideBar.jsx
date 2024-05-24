import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const navItem = [
  {
    id: 1,
    icon: <FaUserFriends className="text-xl text-blue-500" />,
    title: "List Users",
  },

  {
    id: 2,
    icon: <FaUser className="text-xl text-blue-500" />,
    title: "Profile",
  }
];

export default navItem;
