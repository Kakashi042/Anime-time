import axios from "axios";

const options = {
    method:'GET',
    url:'https://api.jikan.moe/v4/anime',
}

export default axios.create()