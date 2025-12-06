import axios from "axios";

const BASE_URL = process.env.NEXT_PULBIC_SERVER_URL;

const apiInstance = axios.create({ baseURL: BASE_URL });

export default apiInstance;
