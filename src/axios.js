import axios from "axios";

const instance = axios.create({
  baseURL: "https://inventory-back.herokuapp.com"
});

export default instance;
// https://inventory-back.herokuapp.com
