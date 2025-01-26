import axios from "axios";

export const getMoviesData = () => {
    axios.get("https://www.freetestapi.com/api/v1/movies")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
}