import React from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { PiSpinnerBallFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import dataSideBar from "../component/dataSideBar";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({});
    const [click, setClick] = useState(false);

    const getUser = () => {
        axios
            .get("https://reqres.in/api/users/2")
            .then((res) => {
                console.log(res.data.data);
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="flex items-start">
          <div
            className={`h-screen w-64 shadow-2xl text-gray-400 text-[18px] transition-all duration-300 ${
              click && "w-[50px]"
            } bg-emerald-900`}
          >
            <div className="flex items-start gap-[20px] p-4">
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-200 rounded-lg p-[4px] items-center transition-all duration-300 w-[40px] h-[40px]">
                <PiSpinnerBallFill className="text-[34px] animate-spin" />{" "}
              </div>
              {!click && (
                <p className="text-white text-[24px] font-semibold">
                  Dashboard
                </p>
              )}
            </div>
            <ul className="flex flex-col p-4 mt-10 gap-14">
              {dataSideBar.map((item) => (
                <li
                  className="flex items-center transition-all duration-300 gap-x-2"
                  key={item.id}
                >
                  <Link
                    to={item.link}
                    className="flex items-center gap-x-2"
                  >
                    {item.icon}
                    {!click && <p className="font-semibold text-white">{item.title}</p>} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    
          <button
            onClick={() => setClick(!click)}
            className={`bg-emerald-500 text-white shadow-lg rounded-full p-2 ms-[-20px] mt-20 transition-all duration-300 ${
              click && "transform rotate-180"
            }`}
          >
            <IoMdArrowDroprightCircle className="text-xl" />
          </button>
    
          <div className="m-auto">
            <h1 className="p-4 text-3xl font-bold text-center text-emerald-900">User Profile</h1>
            
            <div className="p-5 border-8 border-double rounded-lg border-emerald-900">
              <img src={user?.avatar} alt="user" className="mx-auto mb-8 rounded-2xl" />
             <table>
              <tr>
                <td>Id</td>
                <td className="p-2">:</td>
                <td>{user?.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td className="p-2">:</td>
                <td>{user?.first_name} {user?.last_name}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td className="p-2">:</td>
                <td>{user?.first_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="p-2">:</td>
                <td>{user?.email}</td>
              </tr>
             </table>
            </div>         
          </div>
        </div>
      );
};

export default User;