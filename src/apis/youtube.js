import axios from "axios";

const KEY = "AIzaSyB0deosbnum-UYpcVjEsf6qVraRZ_ppNIg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});
