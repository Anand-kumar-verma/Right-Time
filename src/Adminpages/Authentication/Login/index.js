
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../../Assets/bg.png";

const LogIn = () => {
  const isLogined = localStorage.getItem("erp_token");
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  function submithandler(data) {
    console.log(data.username);
    if (isAdmin) {
      loginAdmin(data);
    } else {
      const reqBody = {
        email: data.username,
        password: data.password,
      };
      employeeLogin(reqBody);
    }
    localStorage.setItem("erp_username", data?.username);
    reset();
  }

  const { mutate: loginAdmin, isLoading: isLoadingAdmin } = useMutation(
    // loginFn,
    {
      onSuccess: (response) => {
        // console.log(response);
        if (response?.data) {
          localStorage.setItem("erp_response", JSON.stringify(response?.data));
          localStorage.setItem("erp_token", response?.data?.token);
          localStorage.setItem("erp_company_id", response?.data?.company_id);
          localStorage.setItem("role", response?.data?.role);
          localStorage.setItem("role_user", response?.data?.role_user);
          navigate("/dashboard", {
            state: { role: response?.data?.role_user },
          });
        } else {
          toast("Something went Wrong");
        }
        window.location.reload()
        toast(response?.data?.message);
        navigate("/dashboard")
      },

    }

  );
  const { mutate: employeeLogin, isLoading: isLoadingEmployee } = useMutation(
    // empLoginFn,
    {
      onSuccess: (response) => {
        console.log(response);
        if (response?.data?.response_code === 201) {
          toast.error(response?.data?.message);
          return;
        }
        if (response?.data?.response_code === 200) {
          localStorage.setItem("erp_employee_id", response?.data?.data?.emp_id);
          localStorage.setItem("erp_response", JSON.stringify(response?.data));
          localStorage.setItem("erp_token", response?.data?.data?.token);
          localStorage.setItem("erp_company", response?.data?.data?.company);
          localStorage.setItem("role", response?.data?.data?.role);
          localStorage.setItem("role_user", response?.data?.data?.designation);
          localStorage.setItem("erp_designation", response?.data?.designation);
          if (response?.data?.role !== "Company Admin") {
            navigate("/task-list");
          } else {
            navigate("/dashboard");
          }
        } else {
          // toast("Something went Wrong");
        }
        window.location.reload()
        navigate("/dashboard");
      },
    }
  );

  useEffect(() => {
    isLogined && navigate("/dashboard");
  }, [isLogined]);

  return (
    <>

      <div className="lg:flex lg:w-screen lg:relative ">
        <img src={bg} className="lg:block hidden w-full h-screen object-fill lg:absolute" alt="" />
        <div className="lg:block hidden ">
          <div className="absolute h-screen bg-red lg:w-[38%] left-0 top-0  text-white flex items-center justify-center">
            <p className="text-[5rem] font-bold pt-[3%] font-poppins">GAME ZONE</p>
          </div>
        </div>

        <div className="lg:flex justify-end h-screen lg:w-[40%] w-[90%]  absolute right-4 top-0 overflow-auto z-20 ">
          <div className="w-full flex flex-col items-center  gap-1  h-full">
            <form
              className="flex flex-col  items-center rounded-2xl w-full h-[80%] justify-evenly"
              onSubmit={handleSubmit(submithandler)}
            >
              <p className="text-[1rem] lg:hidden  font-bold  font-poppins">ADMIN GAME ZONE</p>
              <p className="lg:block hidden">   ADMIN </p>
              <div className="lg:w-[70%] w-full mt-5">
                <label className="text-gray-500 ">Email Id:</label>
                <br />
                <div className="flex items-center ">
                  <input
                    type="text"
                    {...register("username")}
                    placeholder="Enter your email here"
                    className="w-full h-14 focus:outline-none  bg-[#E8F0FE] rounded-l-lg px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider "
                  />
                  <div className="bg-[#E8F0FE]">
                    <p className="bg-[#1E2772] text-white h-14 w-14  flex justify-center items-center text-[1.5rem] rounded-xl">
                      <AiOutlineMail />
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[70%] w-full">
                <label className="text-gray-500">Password:</label>
                <br />
                <div className="flex items-center">
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password here"
                    className="w-full h-14 focus:outline-none bg-[#E8F0FE] rounded-l-lg px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider"
                  />
                  <div className="bg-[#E8F0FE]">
                    <p className="bg-[#1E2772] text-white h-14 w-14  flex justify-center items-center text-[1.5rem] rounded-xl">
                      <AiFillLock />
                    </p>
                  </div>
                </div>

                <div className="w-full mt-5 flex justify-end hover:text-blue-800 cursor-pointer ">
                  <p className="text-sm font-poppins ">Forgot Password?</p>
                </div>
              </div>

              <div className=" lg:w-[70%] w-full">
                <button
                  type="submit"
                  size="large"
                  className="w-full z-20 shadow-md cursor-pointer bg-[#1E2772] !rounded-lg !px-10 py-2 text-white "
                  onClick={() => navigate('/dashboard')} >
                  Login now
                </button>
              </div>

              <div></div>
            </form>


          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
