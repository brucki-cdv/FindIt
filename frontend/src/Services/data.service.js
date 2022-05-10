import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8000/api/v1";

const getReports = async (limit, offset) => {
  return axios.get(SERVER_URL + "/report?limit=" + limit + "&offset=" + offset);
};

const getReport = async (id, setting) => {
  return axios.get(SERVER_URL + "/report/" + id, setting);
};

const getReportImages = async (id) => {
  return axios.get(SERVER_URL + "/report/image/" + id);
};

const deleteReportImage = async (id) => {
  return axios.delete(SERVER_URL + "/report/image/" + id);
};

const createReport = async (data) => {
  return axios.post(SERVER_URL + "/report", data);
};

const updateReport = async (id, data) => {
  return axios.patch(SERVER_URL + "/report/" + id, data);
};

const getUserReports = async (id, limit, offset) => {
  return axios.get(
    SERVER_URL + "/report/user/" + id + "?limit=" + limit + "&offset=" + offset
  );
};

const postUserInformation = async (information) => {
  return axios.post(SERVER_URL + "/userInformation", information);
};

export default {
  getReports,
  getReport,
  getReportImages,
  deleteReportImage,
  updateReport,
  getUserReports,
  postUserInformation,
  createReport,
};
