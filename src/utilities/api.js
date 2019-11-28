import axios from 'axios';
const baseURL = 'https://api.tvmaze.com';


export default axios.create({ baseURL });
