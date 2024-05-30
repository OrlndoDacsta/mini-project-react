import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { PiSpinnerBallFill } from "react-icons/pi";
import { GrLogout } from "react-icons/gr";
import dataSideBar from "../component/dataSideBar";

const DetailUser = () => {
  const param = useParams();

  const [detailUser, setDetailUser] = useState({});
  const [click, setClick] = useState(false);

  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((res) => {
        // console.log(res.data.data)
        const response = res.data.data;
        setDetailUser(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex items-start">
      <div
        className={`h-screen w-64 shadow-2xl text-gray-400 text-[18px] transition-all duration-300 ${
          click && "w-[50px]"
        } bg-emerald-900 max-sm:fixed max-sm:w-[50px]`}
      >
        <div className="flex items-start gap-[20px] p-4">
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-200 rounded-lg p-[4px] items-center transition-all duration-300 w-[40px] h-[40px]">
            <PiSpinnerBallFill className="text-[34px] animate-spin" />{" "}
          </div>
          {!click && (
            <p className="text-white text-[24px] max-sm:hidden">Detail User</p>
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
                className="flex items-center gap-x-2 hover:opacity-65"
                title={item.title}
              >
                {item.icon}
                {!click && (
                  <p className="text-white max-sm:hidden">{item.title}</p>
                )}
              </Link>
            </li>
          ))}
          {!click && (
            <button
              onClick={handleLogout}
              className="p-2 text-white transition-all duration-300 rounded-full shadow-lg bg-emerald-500 hover:text-black max-sm:hidden"
              title="Logout"
            >
              Logout
            </button>
          )}

          {click && (
            <button
              onClick={handleLogout}
              className="p-2 text-white transition-all duration-300"
              title="Logout"
            >
              <GrLogout />
            </button>
          )}
          <button
            onClick={handleLogout}
            className="p-2 text-white transition-all duration-300 sm:hidden hover:opacity-65"
            title="Logout"
          >
            <GrLogout />
          </button>
        </ul>
      </div>

      <button
        onClick={() => setClick(!click)}
        className={`bg-emerald-500 text-white shadow-lg rounded-full p-1 ms-[-20px] mt-20 transition-all duration-300 ${
          click && "transform rotate-180"
        }max-sm:hidden`}
      >
        <IoMdArrowDroprightCircle className="text-xl" />
      </button>

      <div className="w-screen h-screen bg-no-repeat bg-cover bg-bg">
        <h1 className="p-4 text-3xl text-center text-white">Detail User</h1>
        <div
          key={detailUser.id}
          className="flex flex-col justify-center w-2/6 p-6 mx-auto leading-5 bg-gray-400 bg-center bg-no-repeat border border-gray-100 shadow-2xl rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 item-center max-sm:w-3/5 bg-bg2"
        >
          <img
            src={detailUser.avatar}
            alt={detailUser.first_name}
            className="self-center h-40 rounded-lg w-44 max-sm:w-36 max-sm:h-32"
          />
          <div className="self-center p-4">
            <p className="text-xl font-bold text-center max-sm:text-lg">
              {detailUser.first_name} {detailUser.last_name}
            </p>
            <p className="text-lg font-semibold text-center max-sm:text-sm">
              ID: {detailUser.id}
            </p>
            <p className="mb-2 text-lg font-semibold max-sm:text-sm">
              First Name: {detailUser.first_name}
            </p>
            <p className="mb-2 text-lg font-semibold max-sm:text-sm">
              Last Name: {detailUser.last_name}
            </p>
            <p className="text-lg font-semibold max-sm:text-sm">
              Email: {detailUser.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
