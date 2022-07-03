import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-lesson.herokuapp.com/",
});

export default instance;