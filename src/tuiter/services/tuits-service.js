import axios from 'axios';

const TUITS_API_LOCAL = process.env.REACT_APP_TUITS_API;
const TUITS_API = TUITS_API_LOCAL? TUITS_API_LOCAL : 'https://tuiter-backend.onrender.com/api/tuits';

console.log(TUITS_API)
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data
}


export const findTuits  = async ()  => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}



export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return tid
}

export const updateTuit = async (tuit) => {
    const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}