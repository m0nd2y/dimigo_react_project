import axios from "axios";

export const getMusicList = async () => {  
    const response = await axios.get("http://localhost:5000/musicList");
    return response.data;
};

export const getMusic = async ({ id }) => {
    const response = await axios.get(`http://localhost:5000/musicList/${id}`);
    return response.data;
};

export const getMovieList = async () => {
    const response = await axios.get("http://localhost:5000/movieList");
    return response.data;
};

export const getMovie = async ({ id }) => {
    const response = await axios.get(`http://localhost:5000/movieList/${id}`);
    return response.data;
};