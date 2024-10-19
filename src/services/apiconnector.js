import axios from "axios";
import toast from "react-hot-toast";
import { fron_end_main_domain } from "./urls";

export const apiConnectorGet = async (endpoint, params) => {
  try {
    const response = await axios?.get(
      endpoint,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
      {
        params: params,
      }
    );
    if (response?.data?.msg === "Invalid Token.") {
      toast("Login in another device ", { id: 1 })
      localStorage.clear();
      sessionStorage.clear();
      window.location.href=`${fron_end_main_domain}`
      return
    }

    return response;
  } catch (e) {

    return {
      msg: e?.message,
    };
  }
};
export const apiConnectorPost = async (endpoint, reqBody) => {
  try {
    const response = await axios?.post(
      endpoint,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response?.data?.msg === "Invalid Token.") {
      toast("Login in another device ", { id: 1 })
      localStorage.clear();
      sessionStorage.clear();
      window.location.href=`${fron_end_main_domain}`
      return
    }
    return response;
  } catch (e) {
    return {
      msg: e?.message,
    };
  }
};
