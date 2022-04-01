import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8000/api/v1";

const getReports = async () => {
  return axios.get(SERVER_URL + "/report");
};

const getReport = async (id) => {
  return axios.get(SERVER_URL + "/report/" + id);
};

export default { getReports, getReport };
