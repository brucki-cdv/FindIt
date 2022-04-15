import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8000/api/v1";

const getReports =  async () => {
  return axios.get(SERVER_URL + "/report");
};

const getReport = async (id, setting) => {
  return axios.get(SERVER_URL + "/report/" + id, setting);
};

const getUserReports = async (id) => {
  return axios.get(SERVER_URL + "/report/user/" + id);
}

const postUserInformation = async (information) => {
  return axios.post(SERVER_URL + "/userInformation", information)
}

export default { getReports, getReport, getUserReports, postUserInformation };
