import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/news-d9b4e/us-central1",headers:{'Content-Type':'application/json'}
});

export default instance;
