import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-e8ac9.cloudfunctions.net/api",
});

export default instance;

// "http://localhost:5001/clone-e8ac9/us-central1/api"
