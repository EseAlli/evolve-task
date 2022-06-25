import axios from 'axios';

export default axios.create({
    baseURL: "https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/",
    headers: {
        "Content-type": "application/json"
    }
});