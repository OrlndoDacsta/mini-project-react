import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";

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
    title: "Profile",
    link: "/user",
  },

  {
    id: 3,
    icon: <GrLogout className="text-xl text-white" />,
    title: "Logout",
    link: "/login",
  },
];

export default navItem;
