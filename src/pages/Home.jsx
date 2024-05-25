import React from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { PiSpinnerBallFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import dataSideBar from "../component/dataSideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
  });

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?per_page=4&page=${pagination.page}`)
      .then((res) => {
        console.log(res);
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

  const handleLogout = () => {
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

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
            <p className="text-white text-[24px] font-semibold">Dashboard</p>
          )}
        </div>
        <ul className="flex flex-col p-4 mt-10 gap-14">
          {dataSideBar.map((item) => (
            <li
              className="flex items-center transition-all duration-300 gap-x-2"
              key={item.id}
            >
              <Link to={item.link} className="flex items-center gap-x-2">
                {item.icon}
                {!click && (
                  <p className="font-semibold text-white">{item.title}</p>
                )}
              </Link>
            </li>
          ))}

          <button
            onClick={handleLogout}
            className="p-2 text-white transition-all duration-300 rounded-full shadow-lg bg-emerald-500"
          >
            Logout
          </button>
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
        <h1 className="p-4 text-3xl font-bold text-center text-emerald-900">
          List Users
        </h1>
        <table className="bg-emerald-900 w-[700px] text-white shadow-lg">
          <thead className="text-center">
            <tr>
              <th className="p-5 border-2">ID</th>
              <th className="p-5 border-2">Avatar</th>
              <th className="p-5 border-2">EMAIL</th>
              <th className="p-5 border-2">FIRST NAME</th>
              <th className="p-5 border-2">LAST NAME</th>
            </tr>
          </thead>

          <tbody>
            {listUsers.map((item) => (
              <tr key={item.id}>
                <td className="p-5 border-2">{item.id}</td>
                <td className="p-5 border-2">
                  <img
                    src={item.avatar}
                    alt={item.first_name}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </td>
                <td className="p-5 border-2">{item.email}</td>
                <td className="p-5 border-2">{item.first_name}</td>
                <td className="p-5 border-2">{item.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul className="flex justify-center mt-4">
          <li>
            <button
              className="px-3 py-1 mr-2 text-white bg-emerald-900 rounded-xl"
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
              className="px-3 py-1 ml-2 text-white bg-emerald-900 rounded-xl"
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
