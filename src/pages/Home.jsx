import React from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { PiSpinnerBallFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import dataSideBar from "../component/dataSideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { TbMarquee } from "react-icons/tb";

const Home = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
  });

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?per_page=6&page=${pagination.page}`)
      .then((res) => {
        // console.log(res);
        const response = res.data.data;
        setListUsers(response);

        const pagination = {
          total: res.data.total,
          page: res.data.page,
          per_page: res.data.per_page,
          total_pages: res.data.total_pages,
        };

        setPagination(pagination);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [pagination.page]);

  const handleNext = () => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  };

  const handlePrev = () => {
    setPagination({ ...pagination, page: pagination.page - 1 });
  };

  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="flex items-start">
      <div
        className={`w-64 shadow-2xl text-gray-400 text-[18px] transition-all duration-300 ${
          click && "w-[50px]"
        } bg-emerald-900 max-sm:fixed max-sm:w-[50px]`}
      >
        <div className="flex items-start gap-[20px] p-4">
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-200 rounded-lg p-[4px] items-center transition-all duration-300 w-[40px] h-[40px]">
            <PiSpinnerBallFill className="text-[34px] animate-spin" />{" "}
          </div>
          {!click && (
            <p className="text-white text-[24px] max-sm:hidden">Home</p>
          )}
        </div>

        <ul className="flex flex-col h-screen gap-12 p-4 mt-7">
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
        className={`bg-emerald-500 text-white shadow-lg rounded-full ms-[-20px] mt-20 transition-all duration-300 p-1 ${
          click && "transform rotate-180"
        } max-sm:hidden`}
      >
        <IoMdArrowDroprightCircle className="text-xl" />
      </button>

      <div className="w-screen h-full bg-no-repeat bg-cover bg-bg">
        <h1 className="p-4 text-3xl text-center text-white ">List Users</h1>

        <div className="grid grid-cols-3 gap-3 p-3 group max-sm:grid-cols-1">
          {listUsers.map((item) => (
            <Link
              key={item.id}
              className="flex flex-col w-4/5 p-4 mx-auto bg-gray-400 border border-gray-100 shadow-2xl rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-300 max-sm:w-3/5 bg-bg2 bg-center bg-no-repeat"
              to={`/users/${item.id}`}
              title="Detail User"
            >
              <img
                src={item.avatar}
                alt={item.first_name}
                className="self-center w-24 h-24 rounded-full"
              />
              <p className="text-xl font-bold text-center">
                {item.first_name} {item.last_name}
              </p>
              <p className="font-semibold text-center">ID: {item.id}</p>
              <p className="text-sm font-semibold">
                First Name: {item.first_name}
              </p>
              <p className="text-sm font-semibold">
                Last Name: {item.last_name}
              </p>
              <p className="text-sm font-semibold">Email: {item.email}</p>
            </Link>
          ))}
        </div>

        <ul className="flex justify-center p-4">
          <li>
            <button
              className="px-3 py-1 mr-2 text-white bg-emerald-900 rounded-xl disabled:opacity-30 hover:opacity-65 hover:text-yellow-500"
              disabled={pagination.page === 1}
              onClick={handlePrev}
            >
              Prev
            </button>
          </li>
          <li className="px-3 py-1 text-white bg-emerald-900 rounded-xl">
            <span>{pagination.page}</span>
          </li>
          <li>
            <button
              className="px-3 py-1 ml-2 text-white duration-200 bg-emerald-900 rounded-xl disabled:opacity-30 hover:opacity-65 hover:text-yellow-500"
              disabled={pagination.page === pagination.total_pages}
              onClick={handleNext}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
